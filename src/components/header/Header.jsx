import React, { useState, useEffect } from "react";
import "./header.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import big from "../../assets/big.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Main");
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate('/SignUp');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(true);

  };
  const handleSignInClick = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    navigate('/SignUp');
  };





  return (
    <section>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo__main">
          <img src={big} alt="" />
          <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
            {/* <img src={big} alt="" /> */}
            <li className={` ${activeLink === "Main" ? "active" : ""}`}>
              <a href="#" onClick={() => handleLinkClick("Main")}>
                Main
              </a>
            </li>
            <li className={` ${activeLink === "About" ? "active" : ""}`}>
              <Link to="About" smooth={true} duration={500} onClick={() => handleLinkClick("About")}>
                About
              </Link>
            </li>
            <li className={` ${activeLink === "Service" ? "active" : ""}`}>
              <Link to="Service" smooth={true} duration={500} onClick={() => handleLinkClick("Service")}>
                Service
              </Link>
            </li>
            <li className={` ${activeLink === "Portfolio" ? "active" : ""}`}>
              <Link to="Portfolio" smooth={true} duration={500} onClick={() => handleLinkClick("Portfolio")}>
                Portfolio
              </Link>
            </li>
            <li className={` ${activeLink === "Blog" ? "active" : ""}`}>
              <Link to="Blog" smooth={true} duration={500} onClick={() => handleLinkClick("Blog")}>
                Blog
              </Link>
            </li>
            <li className={` ${activeLink === "Contact" ? "active" : ""}`}>
              <Link to="Contact" smooth={true} duration={500} onClick={() => handleLinkClick("Contact")}>
                Contact
              </Link>
            </li>
            <ul>
            
            </ul>
         
            <img src={big} alt="" />
           
          </ul>
        </div>
      
        <div className="social__icons">
          <a href="">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </div>


        <div className="hey">
  {/* Your component content goes here */}
  <Link to="/SignUp" onClick={handleSignInClick }> <button  className="button__on">Sign In</button></Link>
        </div>

        <div className="toggle-menu" onClick={toggleMenu}>
          {isMenuOpen ? (

            <div className="cross">✕</div>
          ) : (
            <>

              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
      </div>

    </section>
  );
};


export default Header;
