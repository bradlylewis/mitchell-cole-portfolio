import './NavMenu.css'
import { Link } from 'react-router-dom'

const NavMemnu = () => {
    function openSideMenu() {
        const hamburgerButton = document.querySelector(".container");
        const sideNav = document.getElementById("nav-links");
        hamburgerButton.classList.toggle("change");
        sideNav.classList.toggle("open");
      }
      
    return (
    <div className="wrapper">  
        <div id="title">Mitchell Cole</div>
        <nav id="nav-links" className="nav-links">
            <li><Link to="/portfolio" className="link">Portfolio</Link></li>
            <li><Link to="/awards" className="link">Awards</Link></li>
            <li><Link to="/about" className="link">About Me</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
        </nav>
        <div className="container" onClick={()=>openSideMenu()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    </div>
    )
}

export default NavMemnu;