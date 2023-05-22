import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import {  Element } from 'react-scroll';


export const About = ({setComponentVisible}) => {
  const { ref, inView } = useInView({threshold: 0});
  useEffect(() => {
    if(inView) setComponentVisible(1);
  }, [inView])

  return (
    <>
    <div ref={ref}>
      <Element name='about' className='p-5 text-lg flex flex-col flex-wrap items-center text-center'>
        <h5 className='text-2xl'>𝐀𝐛𝐨𝐮𝐭 :</h5>
        <p className='max-sm:text-base'>Hello, I am final year Computer Engineering student at Terna Engineering College and I'm passionate in developing Web apps. Along with this I'm also a Competitive programmer with some knowledge of Android Development. I love to code and I consider Software Development to be an incredibly creative discipline that makes difference in people's lives. I enjoy creating application which will be able to impact many user.</p>

      </Element>
    </div>
    </>
  )
}
