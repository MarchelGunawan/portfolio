import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./compenents/NavBar";
import { Banner } from "./compenents/Banner";
import { Experience } from "./compenents/Experience";
import { Projects } from "./compenents/Projects";
import { Contact } from "./compenents/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
