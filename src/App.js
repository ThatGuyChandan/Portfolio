import "./App.css";
import About from "./components/About";
import Certifiacte from "./components/Certifiacte";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Certifiacte />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
