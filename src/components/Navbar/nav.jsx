import React, { useRef, useState, useEffect } from "react";
import "../Navbar/nav.css";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const menu = useRef();
  const navbar = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); //initialize the navigate function

  //handel booking button click to navigate to the bookin page
  const handleBookingClick = () => {
    navigate("/booking"); //navigaet to the booking page when the button is clicked
  };
  const handleLoginClick = () => {
    navigate("/login"); //navigate to the login page when the button is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.current.classList.add("navbarScroll");
      } else {
        navbar.current.classList.remove("navbarScroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="wrap" ref={navbar}>
      <div className="logo">
        <a href="#">
          <span>ROYAL</span>X
        </a>
      </div>
      <nav ref={menu} className={isMenuOpen ? "showNav" : ""}>
        <NavLink to="/" className="li">
          Home
        </NavLink>
        <NavLink to="/about" className="li">
          About Us
        </NavLink>
        <NavLink to="/rooms" className="li">
          Category
        </NavLink>
        <NavLink to="/testimonial" className="li">
          Testimonial
        </NavLink>
        <NavLink to="/services" className="li">
          Service
        </NavLink>
      </nav>

      <div className="nav_btn">
        <button onClick={handleBookingClick}>Book Now</button>
        <button onClick={handleLoginClick}>Login</button>
        <i className="ri-menu-4-line showNav" id="bar" onClick={toggleMenu}></i>
      </div>
    </div>
  );
};

export default NavBar;
