import PrimaryLogo from "@/components/PrimaryLogo";
import Dropdown from "@components/Header/Dropdown";
import NavBar from "@components/Header/NavBar";

export default function Header() {
  return (
    <div className="w-full h-16 px-10 flex flex-row justify-around">
      <div className="flex justify-center items-center">
        <PrimaryLogo />
      </div>
      <nav className="w-full flex justify-center border-b border-b-foreground/10">
        <NavBar />
      </nav>
      <div className="flex justify-center items-center">
        <Dropdown />
      </div>
    </div>
  );
}
