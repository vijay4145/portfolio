import React from 'react'
import '../style/Navbar.css';
import {AiOutlineDownload} from 'react-icons/ai';

export const Navbar = () => {
  return (
    <>
    <div className='w-screen z-10 justify-evenly flex '>
        <ul className='flex gap-16 text-lg items-center'>
            <li className='nav-ele'>Home</li>
            <li className='nav-ele'>About</li>
            <li className='nav-ele'>Project</li>
            <li className='py-1 px-5 flex items-center m-2 gap-2 bg-blue-500 text-lg text-white rounded-lg'>
                    <AiOutlineDownload/>
                    Resume
                </li>
        </ul>
    </div>
    </>
  )
}
