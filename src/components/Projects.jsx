import React, { useEffect, useRef } from 'react'
import { ProjectCard } from './ProjectCard'
import { useInView } from 'react-intersection-observer';
import {  Element } from 'react-scroll';
import { AiFillGithub } from "react-icons/ai";


export const Projects = ({setComponentVisible}) => {
  const { ref, inView } = useInView({threshold: 0});
  useEffect(() => {
    if(inView) setComponentVisible(2);
  }, [inView])

  return (
    <>
    <div ref={ref}>

     <Element name='project' className='p-5  flex flex-col flex-wrap items-center justify-center gap-2'>
      <h5 className='text-3xl'>ᴘʀᴏᴊᴇᴄᴛꜱ :</h5>
      <div className='grid gap-5 mt-4'>
        {
          projectData.map((data, i)=>{
            return <ProjectCard data={data} key={i} setComponentVisible={setComponentVisible}/>
          })
        }
      </div>
      <a href='https://github.com/vijay4145?tab=repositories' target='_blank' className='flex gap-2 items-center m-3 rounded-lg text-purple-600 underline text-lg hover:text-purple-700 cursor-pointer'>
        <AiFillGithub className='h-5 w-5'/>
        View more on Github.com
      </a>

    </Element>
    </div>
    </>
  )
}


const projectData = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/2293/2293843.png',
    name: 'Terna Web',
    desc: "ChatX is an social media app which lets you chat with other user without the need to save anyones numbers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, a.",
    tags : ['MongDb', 'Reactjs', 'Nodejs', 'Express', 'axios'],
    link : 'https://ternaweb.netlify.app/',
    github : 'https://github.com/vijay4145/TernaWeb'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png',
    name: 'Coder Buddy',
    desc: "ChatX is an social media app which lets you chat with other user without the need to save anyones numbers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, a.",
    tags : ['MongDb', 'Reactjs', 'Nodejs', 'Express', 'axios'],
    link : 'https://coderbuddy.netlify.app/',
    github : 'https://github.com/vijay4145/TernaWeb'
  },
]
