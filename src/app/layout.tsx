import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavDrawer from "@components/Layout/Drawer/NavDrawer";

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
        <main className="w-screen max-w-[2200px] min-h-screen mx-auto overflow-hidden flex flex-col items-center">
          {children}
          <NavDrawer />
        </main>
      </body>
    </html>
  );
}
