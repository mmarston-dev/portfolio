import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (ref: string) => {
    const section = document.getElementById(ref);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  };

  const NavLinks = () => {
    return (
      <>
        <button className="p-3" onClick={() => handleScrollTo("expertise")}>
          Expertise
        </button>
        <button className="p-3" onClick={() => handleScrollTo("history")}>
          History
        </button>
        <button className="p-3" onClick={() => handleScrollTo("contact")}>
          Contact
        </button>
      </>
    );
  };

  return (
    <>
      <nav className="flex justify-end w-1/3 px-5">
        <div className="hidden md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="m-auto">
            {isOpen ? <FontAwesomeIcon icon={faX} size="2x" className="hover:text-primary!" /> : <FontAwesomeIcon icon={faBars} size="2x" className="hover:text-primary!" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Navigation;
