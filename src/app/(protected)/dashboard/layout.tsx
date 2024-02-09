import Header from "@components/Header/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-4">{children}</div>
    </>
  );
}
