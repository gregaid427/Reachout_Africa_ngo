import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Outlet, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
  FaLinkedinIn,
} from "react-icons/fa";


export const Logout = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[60px] flex justify-around items-center px-4 bg-orange-500 text-white">
      {/* <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div> */}
      {/* <div className=" text-orange-500 md:hidden ">.</div> */}

      {/* menu */}
      <ul className="hidden md:flex lg:flex xl:flex">
      <Link to="/">
          <li>
            <p className="text-2xl">Home</p>
          </li>
          </Link>
        {/* <li>
          <Link to='about'offset={-100} smooth={true} duration={500}>
            About
          </Link>
        </li> */}
         <Link to="/projects"> 
          <li>
            <p className="text-2xl">Projects</p>
          </li>
        </Link>
        {/* <li>
          <Link to='team' offset={-90} smooth={true} duration={500}>
           Our Team
          </Link>
        </li> */}
        <Link to="/gallery"> 
          <li>
            <p className="text-2xl">Gallery</p>
          </li>
          </Link>
        {/* <li>
          <Link to='donate' smooth={true} duration={500}>
           Donate
          </Link>
        </li> */}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-orange-500 flex flex-col text-white justify-center items-center"
        }
      >
         <Link to="/"> 
          <li>
            <p  onClick={handleClick} className="text-2xl">Home</p>
          </li>
        </Link>

        {/* <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li> */}
         <Link to="/projects"> 
          <li>
            <p  onClick={handleClick} className="text-2xl">Projects</p>
          </li>
        </Link>

        {/* <li>
          <Link to='team' offset={-70} smooth={true} duration={500}>
            Our Team
          </Link>
        </li> */}
         <Link to="/gallery"> 
          <li>
            <p  onClick={handleClick} className="text-2xl">Gallery</p>
          </li>
        </Link>
        <li>
          {/* <Link to='donate' smooth={true} duration={500}>
           Donate
          </Link> */}
        </li>
      </ul>

      {/* ends here */}
    </div>
  );
};

export default Logout;
