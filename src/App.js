import "./App.css";
import "./styles.css";
import Home from "./Components/HomeSection";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutSection";
import SkillSet from "./Components/SkillSet/SkillSet";
import ProjectSection from "./Components/Projects/Projects";
import Contact from "./Components/ContactSection";
import Footer from "./Components/FooterSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <SkillSet />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
