import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "Next.js Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase.",
  keywords: "next.js, supabase, starter kit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="w-screen max-w-[2200px] min-h-screen mx-auto flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
