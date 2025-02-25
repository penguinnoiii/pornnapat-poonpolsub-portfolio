import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Project from "./components/Project.tsx";
import "./index.css";
import 'animate.css';

function App() {

  return (
    <>
      
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
      
    </>
  );
}

export default App;
