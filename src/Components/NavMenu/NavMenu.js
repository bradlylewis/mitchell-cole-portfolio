import './NavMenu.css'

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
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contact</a></li>
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