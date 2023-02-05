import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
// import { BsFillHouseFill } from "react-icons/bs";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
// import Logo from './../Images/logo1.png';
const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div className="navbar">
			<div className="container">
				<Link to="/" onClick={closeMobileMenu}>
					<img
						className="main-logo"
						src={
							"https://res.cloudinary.com/rivach/image/upload/v1670568690/samples/final-logo_1_a2mqtn.png"
						}
						alt="Logo"
					/>
				</Link>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<a href="#about" onClick={closeMobileMenu}>
						<li>About Us</li>
					</a>
					<a href="#service" onClick={closeMobileMenu}>
						<li>Services</li>
					</a>
					<a href="#client" onClick={closeMobileMenu}>
						<li>Clients</li>
					</a>
					<a href="#portfolio" onClick={closeMobileMenu}>
						<li>Portfolio</li>
					</a>
					<a href="#forms" onClick={closeMobileMenu}>
						<li>Forms</li>
					</a>
					<a href="#contact" onClick={closeMobileMenu}>
						<li>Contact</li>
					</a>
				</ul>
				<div className="hamburger" onClick={handleClick}>
					{click ? (
						<FaRegTimesCircle className="icon" />
					) : (
						<HiOutlineMenuAlt4 className="icon" />
					)}
				</div>
			</div>
		</div>
	);
};
export default Navbar;
