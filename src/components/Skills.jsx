import React from 'react'
import java_icon from '../assets/java.png'


export const Skills = () => {
  return (
    <>
     <div id='about' className='p-5 text-lg flex flex-col flex-wrap items-center text-center justify-center gap-2'>
      <h5 className='text-2xl'>𝐒𝐤𝐢𝐥𝐥𝐬 :</h5>
      <div className='grid md:grid-cols-5 max-sm:text-base  sm:grid-cols-3 grid-cols-2 gap-5'>
        <div className='skills-card'>
          <img src={java_icon} alt="" className='h-7 w-7'/>
          Java
        </div>
        <div className='skills-card'>
          <img src="https://img.icons8.com/color/256/c-plus-plus-logo.png" alt="" className='h-7 w-7'/>
          c++
        </div>
        <div className='skills-card'>
          <img src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png" alt="" className='h-7 w-7'/>
          CP
        </div>
        <div className='skills-card'>
          <img src="https://img.icons8.com/arcade/256/javascript.png" alt="" className='h-7 w-7'/>
          JavaScript
        </div>
        <div className='skills-card'>
          <img src="https://img.icons8.com/color/256/c-plus-plus-logo.png" alt="" className='h-7 w-7'/>
          c++ STL
        </div>
        <div className='skills-card'>
          <img src="https://img.icons8.com/dusk/256/react.png" alt="" className='h-7 w-7'/>
          React
        </div>
        <div className='skills-card'>
          <img src="https://img.icons8.com/color/256/git.png" alt="" className='h-7 w-7'/>
          Git
        </div>
        <div className='skills-card'>
          <img src="https://img.icons8.com/color/256/tailwindcss.png" alt="" className='h-7 w-7'/>
          Tailwind
        </div>
        <div className='skills-card'>
          <img src="https://img.icons8.com/color/256/google-firebase-console.png" alt="" className='h-7 w-7'/>
          Firebase
        </div>
        <div className='skills-card'>
          <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="" className='h-7 w-7'/>
          Mongo
        </div>
        <div className='skills-card'>
          <img src="https://img.icons8.com/color/256/nodejs.png" alt="" className='h-7 w-7'/>
          Node
        </div>
        <div className='skills-card'>
          <img src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text-thumbnail.png" alt="" className='h-7 w-7'/>
          express
        </div>
        <div className='skills-card'>
          <img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/android_studio_alt_macos_bigsur_icon_190395.png" alt="" className='h-7 w-7'/>
          Android studio
        </div>
        <div className='skills-card'>
          <img src="https://cdn-icons-png.flaticon.com/512/136/136526.png" alt="" className='h-7 w-7'/>
          XML
        </div>
      </div>
   

    </div>
    </>
  )
}
