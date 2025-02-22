import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import "./index.css";
import 'animate.css';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
