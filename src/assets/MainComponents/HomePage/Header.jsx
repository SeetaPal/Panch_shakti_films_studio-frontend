import { Link, useNavigate } from "react-router-dom"

export const Header = ({ active }) => {
    const Navigate = useNavigate()
    return (
        <header>
            <div className="nav-wrapper">
                <a href="javascript:void(0)" onClick={() => Navigate('/')} className="logo pt-3">
                    <img src="Assets/Images/logo.webp" alt="Panch Shakti Logo" />
                </a>

                <button className="menu-toggle" id="menu-toggle" aria-label="Open Menu">
                    <i className="fas fa-bars"></i>
                </button>

                {/* We use the `isMenuOpen` state to conditionally apply the 'is-active' class */}
                <nav id="main-nav"
                // className={isMenuOpen ? 'is-active' : ''}
                >
                    <button className="close-menu" id="close-menu" aria-label="Close Menu" >
                        <i className="fas fa-times"></i>
                    </button>
                    <ul>
                        <li onClick={() => Navigate('/')}><a href="javascript:void(0)"
                            className={active === "Home" ? "actives" : 'text-white'}>Home</a></li>

                        <li onClick={() => Navigate('/AboutUs')}><a href="javascript:void(0)"
                            className={active === "AboutUs" ? "actives" : 'text-white'}>About Us</a></li>

                        <li onClick={() => Navigate('/Services')}><a href="javascript:void(0)"
                            className={active === "Services" ? "actives" : 'text-white'}>Services</a></li>

                        <li> <a href="javascript:void(0)">Our Work</a></li>
                        <li><a href="javascript:void(0)">Blogs</a></li>
             
                         <li onClick={() => Navigate('/ContactUs')}><a href="javascript:void(0)"
                            className={active === "ContactUs" ? "actives" : 'text-white'}>Contact Us</a></li>
                        <li className="mobile-only-btn"><a href="javascript:void(0)" className="btn btn-outline">Register/Login</a></li>
                    </ul>
                </nav>

                <a href="javascript:void(0)" className="btn btn-outline desktop-only-btn" onClick={() => Navigate('/Login')}>Register/Login</a>
            </div>
        </header>
    );
}