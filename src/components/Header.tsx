import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <>
      <header className="flex flex-wrap w-full justify-between items-center mx-auto sticky top-0 p-2 bg-(--color-bg-dark) text-white text-lg shadow-[0_4px_5px_rgba(0,0,0,0.5)] z-1">
        <Logo />
        <Navigation />
      </header>
    </>
  );
}

export default Header;
