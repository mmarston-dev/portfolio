import "./App.css";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import History from "./components/History";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Expertise />
      <History />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
