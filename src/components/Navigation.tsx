function Navigation() {
  const handleScrollTo = (ref: string) => {
    const section = document.getElementById(ref);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <header className="flex justify-end sticky top-0 bg-(--color-bg-dark) text-white text-lg shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
      <nav className="px-8 py-4">
        <button className="px-3" onClick={() => handleScrollTo("about")}>
          About
        </button>
        <button className="px-3" onClick={() => handleScrollTo("history")}>
          History
        </button>
        <button className="px-3" onClick={() => handleScrollTo("contact")}>
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Navigation;
