 import './Navbar.css'
 import { Banner } from './components/banner'

 export default function Navbar(){
    return(
    <nav className="navbar">
       <a href="/"><img  alt="Logo"/> PORTFOLIO</a>
        <ul className='navitem'>
            <li><a href="/"> Home </a></li>
            <li><a href="/project"> Projects</a></li>
            <li> <a href="/skill"> Skills</a> </li>
            <li> <a href="/about"> About me</a> </li>
            <li> <a href="/contact"> Contact</a> </li>
        </ul>
    </nav>
    );
 }