import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import "./index.css";
import 'animate.css';

function App() {

  return (
    <>
      
        <Navbar />
        <Home />
        <About />
        <Skills />
      
    </>
  );
}

export default App;
