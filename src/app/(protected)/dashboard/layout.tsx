import DashboardSidebar from "@app/(protected)/dashboard/Components/DashboardSidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReturnType<React.FC> {
  return (
    <div className="max-w-screen flex min-h-screen w-full flex-row xl:flex-col">
      <div className="w-[20%] xl:w-full">
        <DashboardSidebar />
      </div>
      <TooltipProvider>
        <div className="flex w-[80%] flex-col gap-4 xl:w-full">{children}</div>
      </TooltipProvider>
    </div>
  );
}
