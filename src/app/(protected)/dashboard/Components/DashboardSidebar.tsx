import Link from "next/link";

export default function DashboardSidebar() {
  const dashboardSidebarList = [
    { name: "Dashboard 1", link: "/dashboard" },
    { name: "Dashboard 2", link: "/dashboard" },
    { name: "Dashboard 3", link: "/dashboard" },
    { name: "Dashboard 4", link: "/dashboard" },
    { name: "Dashboard 5", link: "/dashboard" },
  ];

  return (
    <div className="w-full h-[calc(100vh_-_4rem)] px-10 py-2 border-r border-b rounded-br-lg border-foreground/10">
      <h1 className="mx-4 text-2xl font-medium mb-2 pb-2 border-b border-foreground/10 text-foreground">
        Routes
      </h1>
      <ul className="flex flex-col gap-2">
        {dashboardSidebarList.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="w-full h-9 flex items-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
