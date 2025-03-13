import "./App.css";
import About from "./components/About";
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
      <About />
      <History />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
