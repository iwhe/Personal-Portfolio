// import logo from './logo.svg';
import "./App.css";
import { About } from "./components/about";
import { Banner } from "./components/banner";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Projects } from "./components/project";
import { Skills } from "./components/skill";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contents">
        <Banner />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
