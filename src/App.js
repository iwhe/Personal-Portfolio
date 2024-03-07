// import logo from './logo.svg';
import './App.css';
import { About } from './components/about';
import { Banner } from './components/banner';
import { Projects } from './components/project';
import { Skills } from './components/skill';
import Navbar from './navbar';

function App() {
  return (
   <div className='App'>
    <Navbar/>
    <div className="components">
    <Banner/>
    <Projects />
    <Skills />
   
    <About/>
    </div>
   </div>
  );
}

export default App;
