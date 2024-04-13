import Link from "next/link";

export default function DashboardSidebar() {
  const dashboardSidebarList = [
    { name: "Blocks", link: "/dashboard/blocks" },
    { name: "Dashboard1", link: "/dashboard" },
    { name: "Overview", link: "/dashboard/overviewChart" },
    { name: "Dashboard3", link: "/dashboard" },
    { name: "Dashboard4", link: "/dashboard" },
    { name: "Dashboard5", link: "/dashboard" },
  ];

  return (
    <div className="h-[calc(100vh_-_4rem)] w-full rounded-br-lg border-b border-r border-foreground/10 px-10 py-2 xl:h-fit xl:border-none sm:px-4">
      <h1 className="mx-4 mb-2 border-b border-foreground/10 pb-2 text-2xl font-medium text-foreground xl:mx-0">
        Routes
      </h1>
      <ul className="flex flex-col gap-2 xl:h-12 xl:flex-row xl:overflow-auto">
        {dashboardSidebarList.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="hover:text-accent-foreground focus:text-accent-foreground flex h-9 w-full items-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:bg-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 xl:w-32 xl:border xl:border-foreground/10"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
