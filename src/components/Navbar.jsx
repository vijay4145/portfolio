import React, { useState } from "react";
import "../style/Navbar.css";
import { Link } from "react-scroll";
import { AiOutlineDownload } from "react-icons/ai";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/13AB1U_3UZrgMtDM8-bNHM1mxmYZ5kR6a/view?usp=sharing"
  return (
    <>
      <div className="p-1 w-screen z-10 hidden md:flex items-center">
        {/* <h1 className='min-w-fit text-2xl text-white ml-4'>𝕍𝕛</h1> */}
        <img src={logo} alt="" className="h-9 w-12 ml-4" />
        <div className="justify-evenly w-full flex">
          <ul className="flex gap-16 text-lg items-center">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-ele ${
                props.componentVisible === 0 ? "text-white" : "text-purple-200"
              }`}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-ele ${
                props.componentVisible === 1 ? "text-white" : "text-purple-200"
              }`}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-ele ${
                props.componentVisible === 2 ? "text-white" : "text-purple-200"
              }`}
            >
              Project
            </Link>
            <a href={resumeUrl} className="py-1 px-5 cursor-pointer hover:underline flex items-center m-2 gap-2 bg-blue-500 text-lg text-white rounded-lg">
              <AiOutlineDownload />
              𝚁𝚎𝚜𝚞𝚖𝚎
            </a>
          </ul>
        </div>
      </div>

      {/* for mobile */}

      <div className="md:hidden p-1 w-screen z-10 flex items-center flex-col">
        {/* <h1 className='min-w-fit text-2xl text-white ml-4'>𝕍𝕛</h1> */}
        <div onClick={()=>setIsExpanded(!isExpanded)} className="justify-between flex flex-row w-full">
          <img src={logo} alt="" className="h-9 w-12 ml-4" />
          <GiHamburgerMenu
            className="flex justify-end h-10 w-10 text-white pr-3 md:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
        <div className={`justify-evenly w-full flex flex-col overflow-hidden transition-max-h ${isExpanded ? 'max-h-[1000px]':'max-h-0'}`}>
          <ul className="flex gap-3 text-lg items-center flex-col">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-ele ${
                props.componentVisible === 0 ? "text-white" : "text-purple-200"
              }`}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-ele ${
                props.componentVisible === 1 ? "text-white" : "text-purple-200"
              }`}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-ele ${
                props.componentVisible === 2 ? "text-white" : "text-purple-200"
              }`}
            >
              Project
            </Link>
            <hr className="bg-white w-[50%]" />
            <a href={resumeUrl} className="py-1 px-5 flex items-center m-2 gap-2 bg-blue-500 text-lg text-white rounded-lg">
              <AiOutlineDownload />
              𝚁𝚎𝚜𝚞𝚖𝚎
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};
