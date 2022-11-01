import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/About/AboutMe";
import { Project } from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SkillSet from "./Components/SkillSet/skillset";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <SkillSet />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
