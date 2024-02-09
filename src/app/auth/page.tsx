import Link from "next/link";
import AuthCardTabs from "@app/auth/components/AuthCardTabs";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <h1 className="text-lg">App Authentication</h1>
      <div className="w-fit h-fit bg-white">
        <AuthCardTabs />
      </div>
    </div>
  );
}
