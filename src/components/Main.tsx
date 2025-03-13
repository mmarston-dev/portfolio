import Expertise from "./Expertise";
import Contact from "./Contact";
import Hero from "./Hero";
import History from "./History";

function Main() {
  return (
    <main className="bg-(--color-bg-dark) text-white">
      <Hero />
      <Expertise />
      <History />
      <Contact />
    </main>
  );
}

export default Main;
