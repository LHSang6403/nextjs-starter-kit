import DashboardSidebar from "@app/(protected)/dashboard/Components/DashboardSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <div className="w-[20%]">
        <DashboardSidebar />
      </div>
      <div className="w-[80%] flex flex-col gap-4">{children}</div>
    </div>
  );
}
