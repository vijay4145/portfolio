import React from 'react'
import '../style/Navbar.css';
import { Link } from 'react-scroll';
import {AiOutlineDownload} from 'react-icons/ai';

export const Navbar = (props) => {
  return (
    <>
    <div className='w-screen z-10 justify-evenly flex '>
        <ul className='flex gap-16 text-lg items-center'>
            <Link
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
              className={`nav-ele ${props.componentVisible === 0 ? 'text-white':'text-purple-200'}`}>Home</Link>
            <Link
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
              className={`nav-ele ${props.componentVisible === 1 ? 'text-white':'text-purple-200'}`}>About</Link>
            <Link 
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-ele ${props.componentVisible === 2 ? 'text-white':'text-purple-200'}`}>Project</Link>
            <li className='py-1 px-5 flex items-center m-2 gap-2 bg-blue-500 text-lg text-white rounded-lg'>
                    <AiOutlineDownload/>
                    Resume
                </li>
        </ul>
    </div>
    </>
  )
}
