import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

export const metadata = {
  title: "Public | Next.js Kit",
  description: "The fastest way to build apps with Next.js and Supabase.",
  keywords: "next.js, supabase, starter kit",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col gap-4">{children}</div>
      <Footer />
    </>
  );
}
