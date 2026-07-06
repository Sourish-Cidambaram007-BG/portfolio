import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Responsibilities from "./components/Responsibilities";
import Achievements from "./components/Achievements";
import Inspiration from "./components/Inspiration";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <Education />
      <Skills />
      <Interests />
      <Projects />
      <Experience />
      <Responsibilities />
      <Achievements />
      <Inspiration />

      <Footer />
    </>
  );
}

export default App;