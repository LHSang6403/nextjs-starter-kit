import PrimaryLogo from "@components/PrimaryLogo";
import Dropdown from "@components/Layout/Header/Dropdown";
import NavBar from "@components/Layout/Header/NavBar";

export default function Header() {
  return (
    <div className="w-full h-16 px-10 sm:px-4 flex flex-row justify-around xl:justify-between">
      <div className="flex items-center">
        <PrimaryLogo />
      </div>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 xl:hidden">
        <NavBar />
      </nav>
      <div className="flex items-center">
        <Dropdown />
      </div>
    </div>
  );
}
