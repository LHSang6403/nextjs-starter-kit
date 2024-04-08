// import { put } from "@vercel/blob";
// import { NextResponse } from "next/server";

// export const runtime = "edge";

// export async function POST(req: Request) {
//   if (!process.env.BLOB_READ_WRITE_TOKEN) {
//     return new Response(
//       "Missing BLOB_READ_WRITE_TOKEN. Don't forget to add that to your .env file.",
//       {
//         status: 401,
//       },
//     );
//   }

//   const file = req.body || "";
//   const filename = req.headers.get("x-vercel-filename") || "file.txt";
//   const contentType = req.headers.get("content-type") || "text/plain";
//   const fileType = `.${contentType.split("/")[1]}`;

//   console.log(file);

//   // construct final filename based on content-type if not provided
//   const finalName = filename.includes(fileType)
//     ? filename
//     : `${filename}${fileType}`;

//   const blob = await put(finalName, file, {
//     contentType,
//     access: "public",
//   });

//   return NextResponse.json(blob);
// }

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

async function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerClient(
    "https://ocxohkgmygzfysykcspe.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jeG9oa2dteWd6ZnlzeWtjc3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwODg4NjcsImV4cCI6MjAyNjY2NDg2N30.1riYmPumPcVK5YJdiOCtueHMouE055evB1uLCrVcc_Q",
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    },
  );
}

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();

    const file = req.body;
    const filename = req.headers.get("x-vercel-filename") || "file.txt";
    const contentType = req.headers.get("content-type") || "text/plain";
    const fileType = `.${contentType.split("/")[1]}`;

    const finalName = filename.includes(fileType)
      ? filename
      : `${filename}${fileType}`;

    const { data, error } = await supabase.storage
      .from("public_files")
      .upload("/product_description/" + finalName, file!, {
        // cacheControl: "no-cache",
        upsert: true,
        duplex: "half",
      });

    if (error) {
      console.error("Error handling POST request:", error);
      return new Response("Internal Server Error", { status: 500 });
    }

    return Response.json({
      data: "ok",
      url:
        "https://ocxohkgmygzfysykcspe.supabase.co/storage/v1/object/public/public_files/" +
        data!.path,
    });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
