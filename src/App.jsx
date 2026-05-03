import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Responsibilities from "./components/Responsibilities";
import Experience from "./components/Experience";
import Footer from "./components/Footer"
import Achievements from "./components/Achievements";
import Interests from "./components/Interests";
import Inspiration from "./components/Inspiration";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Interests />
      <Projects />
      <Experience/>
      <Responsibilities />
      <Achievements />
      <Inspiration />
      <Footer/>
    </>
  );
}

export default App;