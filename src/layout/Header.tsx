import ThemeToggle from "@/components/ThemeToggle.tsx";
import Logo from "@/layout/components/Logo.tsx";
import NavItems from "@/layout/components/NavItems.tsx";
import GithubLink from "@/layout/components/GithubLink.tsx";

const Header = () => {
  return (
    <div className={"flex container mx-auto justify-between p-7 pb-5"}>
      <Logo />
      <NavItems />
      <div className={"flex gap-6"}>
        <ThemeToggle />
        <GithubLink />
      </div>
    </div>
  );
};

export default Header;
