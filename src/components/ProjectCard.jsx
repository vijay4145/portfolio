import React, { useEffect } from 'react'
import '../style/ProjectCard.css';
import { FaDownload, FaLink } from 'react-icons/fa'
import { DiGithubAlt } from 'react-icons/di';
import { useInView } from 'react-intersection-observer';
import  ays from '../assets/ays_logo.png';

export const ProjectCard = ({data, setComponentVisible}) => {
  const { ref, inView } = useInView({threshold: 0});
  useEffect(() => {
    if(inView) setComponentVisible(2);
  }, [inView])

  
  return (
    <>
    <div ref={ref} data-aos="fade-right" className='projectMainDiv flex md:flex-row flex-col px-2 py-2 rounded-3xl max-w-5xl justify-center items-center gap-1'>
        <img src={`${data.img === 'ays' ? ays: data.img}`} alt=""  className={`${data.img === 'ays' ? 'h-32 w-48 mr-4':'h-52 w-52'} `} />
        <div className='flex flex-col gap-2 h-full justify-center'>
            <h4 className='text-2xl'>{data.name}</h4>
            <p className=' text-gray-600'>{data.desc}</p>
            <div id='tag' className='flex flex-wrap gap-2'>
                {
                  data.tags.map(tag=>{
                    return <div className='bg-purple-100 max-w-fit px-2 py-1 rounded-lg'>
                    {tag}
                </div>
                  })
                }
          </div>
          <div id='buttons' className='flex gap-3 flex-wrap'>
            {data.link && <a href={data.link} target='_blank' className='linkButton'>
              <FaLink className='h-5 w-5'/>
              <span>Website</span>
            </a>}
            {data.download && <a href={data.download} target='_blank' className='linkButton'>
              <FaDownload className='h-5 w-5'/>
              <span>Download</span>
            </a>}
            <a href={data.github} target='_blank' className='linkButton'>
              <DiGithubAlt className='h-7 w-7'/>
              <span>Github</span>
              
            </a>
          </div>
        </div>

    </div>
    </>
  )
}
