import React from 'react'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <>
     <div id='about' className='p-5  flex flex-col flex-wrap items-center justify-center gap-2'>
      <h5 className='text-3xl'>ᴘʀᴏᴊᴇᴄᴛꜱ :</h5>
      <div className='grid gap-5 mt-4'>
        {
          projectData.map((data, i)=>{
            return <ProjectCard data={data} key={i}/>
          })
        }
      </div>
      <a href='https://github.com/vijay4145?tab=repositories' target='_blank' className=' m-3 rounded-lg text-purple-600 underline text-lg hover:text-purple-700 cursor-pointer'>
        +5 More Repositories on Github
      </a>

    </div>
    </>
  )
}


const projectData = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/2293/2293843.png',
    name: 'Terna Web',
    desc: "ChatX is an social media app which lets you chat with other user without the need to save anyones numbers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, a.",
    tags : ['MongDb', 'Reacjs', 'Nodejs', 'Express', 'axios'],
    link : 'https://ternaweb.netlify.app/',
    github : 'https://github.com/vijay4145/TernaWeb'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png',
    name: 'Coder Buddy',
    desc: "ChatX is an social media app which lets you chat with other user without the need to save anyones numbers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, a.",
    tags : ['MongDb', 'Reacjs', 'Nodejs', 'Express', 'axios'],
    link : 'https://coderbuddy.netlify.app/',
    github : 'https://github.com/vijay4145/TernaWeb'
  },
]
