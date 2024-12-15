import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaYoutube, FaBook, FaGlobe } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import assets from "../assets/logo.jpeg";
import { FaBars } from 'react-icons/fa'; // For the menu (hamburger) icon
import { FaUserNurse } from "react-icons/fa";


function Navbar() {
  const [show, setShow] = useState(false); // State for mobile menu
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer visibility

  // Toggle for the mobile menu
  const toggleMobileMenu = () => {
    setShow(!show);
  };

  // Toggle for the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="shadow-lg  py-4 bg-white z-50 w-full  ">
      {/* Upper Navbar: Contact, Email, and Social Media Icons */}
      <div className="text-blue-700 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center ml-auto space-x-4">
            <FiPhone size={30} className="mr-2 text-red-600" />
            <span className="text-blue-900 flex font-bold text-lg items-center space-x-2 hover:text-red-600 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">+91 9335920991</span>
            <FiMail size={30} className="mr-2 text-red-600" />
            <span className="text-blue-900 flex font-bold text-lg items-center space-x-2 hover:text-red-600 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">irwinamitdas@gmail.com</span>
            <a href="https://www.instagram.com/bobbyielts?igsh=MXVuNzF5NW9na2dxZg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="hover:text-pink-800 text-red-700 font-bold text-lg mx-2" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100057307517297&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="hover:text-blue-500 mx-2" />
            </a>
            <a href="https://youtube.com/@covenanteducation3561?si=b346lr5bJog08MvB" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} className="hover:text-red-500 text-red-800 mx-2" />
            </a>
          </div>
        </div>
      </div>

       {/*this is end of the phone validation complete Upper Navbar: Contact, Email, and Social Media Icons */}

      {/* Main Navbar (Logo and Menu) */}
      <div className="flex items-center justify-between container mx-auto mt-2 ">
      <a href="/">
  <div className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-white hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">
    <img src={assets} alt="Logo" className="w-124 h-124" />
  </div>
</a>


        {/* Desktop Navbar Links */}
        <div className="hidden md:flex flex-row items-center mx-6 space-x-10 ">
          <ul className="flex space-x-10">
            <li>
              <Link to="/nurces" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">
              <FaUserNurse size={20} color="red" />
                <span>NURSES</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-900 flex font-bold text-lg items-center space-x-2 hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">
                <BiBuildingHouse size={20} color="red" />
                <span>ABOUT</span>
              </Link>
            </li>
            
            <li>
              <Link to="/courses" className="text-blue-900 flex font-bold text-lg items-center space-x-2 hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">
                <FaBook size={20} color="red" />
                <span>COURSES</span>
              </Link>
            </li>
            <li>
              <Link to="/studyabroad" className="text-blue-900 flex font-bold text-lg items-center space-x-2 hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">
                <FaGlobe size={20} color="red" />
                <span>STUDYABROAD</span>
              </Link>
            </li>
            <li>
              <Link to="/achievment" className="text-blue-900 flex font-bold text-lg items-center space-x-2 hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">
                <MdWork size={20} color="red" />
                <span>ACHIEVEMENTS</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-900 flex font-bold text-lg items-center space-x-2 hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">
                <FiMail size={20} color="red"/>
                <span>CONTACT</span>
              </Link>
            </li>
            {/* Menu Button */}
            <li>
              <button onClick={toggleDrawer} className="text-blue-900 flex font-bold text-lg items-center space-x-2 hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out">
                <FaBars size={30} color="red"/>
                <span>MENU</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {show ? <IoCloseSharp size={24} className="text-blue-700" /> : <AiOutlineMenu size={24} className="text-blue-700" />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {show && (
        <div className="bg-white">
          <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl text-blue-700">
            <li><Link to="/" onClick={toggleMobileMenu} className="hover:text-blue-500">HOME</Link></li>
            <li><Link to="/studyabroad" onClick={toggleMobileMenu} className="hover:text-blue-500">STUDY-ABROAD</Link></li>
            <li><Link to="/joblisting" onClick={toggleMobileMenu} className="py-2 px-4">job-Listing</Link></li>
            <li><Link to="/nurces" onClick={toggleMobileMenu} className=" py-2 px-4">Nurse</Link></li>
            <li><Link to="/achievment" onClick={toggleMobileMenu} className=" py-2 px-4">Achievments</Link></li>
            <li><Link to="/contact" onClick={toggleMobileMenu} className=" py-2 px-4">Contact</Link></li>
            <li><Link to="/about" onClick={toggleMobileMenu} className="py-2 px-4">About</Link></li>
            <li><Link to="/courses" onClick={toggleMobileMenu} className="hover:text-blue-500 py-2 px-4">COURSES</Link></li>
            <li><Link to="/enroll" onClick={toggleMobileMenu} className="hover:text-blue-500 py-2 px-4">ENROLL</Link></li>
            <li><Link to="/adminsign" onClick={toggleMobileMenu} className="hover:text-blue-500 py-2 px-4">ADMIN</Link></li>
            <li><Link to="/terms" onClick={toggleMobileMenu} className="hover:text-blue-500 py-2 px-4">TERMS & CONDITION</Link></li>
            <li><Link to="/privacy" onClick={toggleMobileMenu} className="hover:text-blue-500 py-2 px-4">POLICY & PRIVACY</Link></li>
          </ul>
        </div>
      )}

      {/* Drawer Menu (Triggered by Menu Icon) */}
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-red-600 text-white p-4 z-50 ">
          <ul className="">
            <li><Link to="/" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Home</Link></li>
            <li><Link to="/joblisting" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">job-Listing</Link></li>
            <li><Link to="/nurces" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Nurse</Link></li>
            <li><Link to="/achievment" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Achievments</Link></li>
            <li><Link to="/courses" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Cources</Link></li>
            <li><Link to="/about" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">About</Link></li>
            <li><Link to="/studyabroad" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Study-Abroad</Link></li>
            <li><Link to="/contact" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Contact</Link></li>
            <li><Link to="/enroll" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Enroll</Link></li>
            <li><Link to="/adminsign" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">admin</Link></li>
            <li><Link to="/terms" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Terms&Conditions</Link></li>
            <li><Link to="/privacy" className="text-blue-900 flex font-bold text-lg items-center hover:text-white hover:bg-blue-900 hover:rounded-lg hover:px-4 hover:py-2 transition-all duration-300 ease-in-out m-4">Privacy & Policy</Link></li>
          </ul>
          <button onClick={toggleDrawer} className="absolute top-4 right-4 text-2xl">X</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
