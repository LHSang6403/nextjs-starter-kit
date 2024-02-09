import SecondaryLogo from "@/components/SecondaryLogo";

export default function Footer() {
  return (
    <footer className="w-full h-72 border-t border-t-foreground/10 p-8 flex flex-col justify-center text-center gap-6 text-xs">
      <div className="flex justify-center items-center">
        <SecondaryLogo />
      </div>
      <p>
        Powered by{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>
      </p>
      <p className="max-w-[80%] mx-auto text-justify">
        Introducing our versatile Next.js web project template! Our Next.js web
        project template is designed to streamline the development process for
        your web projects. Built on top of Next.js, a powerful React framework,
        our template provides a solid foundation for creating modern and
        scalable web applications. Here are some key features of our template:
        1. Next.js Framework: Benefit from the capabilities of Next.js,
        including server-side rendering, automatic code splitting, and easy
        routing, to build fast and SEO-friendly web applications. 2. React
        Components: Leverage the power of React to create reusable UI
        components, making your codebase more modular and maintainable.
      </p>
      <nav className="flex flex-row justify-around">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="hover:underline border px-2 py-1 border-foreground/5 rounded-md"
          rel="noreferrer"
        >
          Supabase
        </a>
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="hover:underline border px-2 py-1 border-foreground/5 rounded-md"
          rel="noreferrer"
        >
          Supabase
        </a>
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="hover:underline border px-2 py-1 border-foreground/5 rounded-md"
          rel="noreferrer"
        >
          Supabase
        </a>
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="hover:underline border px-2 py-1 border-foreground/5 rounded-md"
          rel="noreferrer"
        >
          Supabase
        </a>
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="hover:underline border px-2 py-1 border-foreground/5 rounded-md"
          rel="noreferrer"
        >
          Supabase
        </a>
      </nav>
    </footer>
  );
}
