import './App.css';
import Lottie from "lottie-react";
import web_animation from './assets/web_development_animation3.json'
import codeforces_icon from './assets/codeforces.png'
import codechef_icon from './assets/codechef2.png'
import github_icon from './assets/github.png'
import linkedin_icon from './assets/linkedin.png'
import { Navbar } from './components/Navbar';
import "aos/dist/aos.css";
import AOS from "aos";
import './style/Homepage.css'
import { Skills } from './components/Skills';


function App() {
  AOS.init({
    offset: 20,
    duration: 1000
  });

  return (
    <>
 <div>

      <div data-aos="fade-down" className='fixed z-10 top-0 bg-homepage2 overflow-hidden'>
        <Navbar/>
      </div>
    <div data-aos="fade-down" className='max-sm:flex-col-reverse m-1 bg-homepage flex justify-between -z-10  bg-blue-800 shadow-2xl min-h-[60vh] items-center overflow-hidden'>
      <div data-aos="fade-up-right" className='flex flex-col justify-center p-6 gap-5 md:mt-10 max-sm:-mt-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='md:text-6xl text-4xl font-bold text-white'>𝙑𝙞𝙟𝙖𝙮 𝙂𝙪𝙥𝙩𝙖</h1>
          <p className='md:text-lg text-sm font-sans text-white '>𝙁𝙪𝙡𝙡 𝙎𝙩𝙖𝙘𝙠 𝙒𝙚𝙗 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 </p>
        </div>
        <div id='tags' className='flex items-start flex-wrap gap-2'>
          <a href='#' id='codechef' className='flex gap-1 bg-blue-50 p-2 rounded-lg items-center'>
            <img src={codechef_icon } alt="" className='h-6 w-6' />
            <p className='max-sm:text-sm'>Codechef 4⭐(max-rating)</p>
          </a>
          <a href='#' id='codeforces' className='flex gap-1 bg-blue-50 p-2 rounded-lg items-center'>
            <img src={codeforces_icon} alt="" className='h-5 w-5'/>
            <p className='hover:text-green-500 max-sm:text-sm'>Codeforces pupil</p>
          </a>
        </div>
        <div id='social-media' className='flex flex-wrap gap-2 items-center'>
          <img src={github_icon} alt="" className='h-12 w-12'/>
          <img src={linkedin_icon} alt="" className='h-12 w-12'/>
          <img src={codechef_icon} alt="" className='h-12 w-12'/>
          <img src={codeforces_icon} alt="" className='h-11 w-11'/>
        </div>
        <a id='explore-btn' className='bg-blue-500 max-w-fit px-3 py-2 text-white text-lg font-bold rounded-lg shadow-lg'>
          <button>Explore</button>
        </a>
      </div>
      <Lottie animationData={web_animation} className='mt-10 max-sm:h-41'/>
    </div>

    <div id='achievements' className='mt-1 p-5 text-lg flex flex-col flex-wrap'>
      <h5>𝘼𝙘𝙝𝙞𝙚𝙫𝙚𝙢𝙚𝙣𝙩𝙨 :</h5>
      <div data-aos="fade-right" id='tag' className='flex flex-wrap gap-3'>
        <div className='bg-purple-200 max-w-fit px-3 py-1 rounded-lg shadow-md'>
          2nd Rank in SIES bug4ever
        </div>
        <div className='bg-purple-200 max-w-fit px-3 py-1 rounded-lg shadow-md'>
          Global Rank 184 in Coderush
        </div>
        <div className='bg-purple-200 max-w-fit px-3 py-1 rounded-lg shadow-md'>
          Global rank 96 in Codechef contest
        </div>
        <div className='bg-purple-200 max-w-fit px-3 py-1 rounded-lg shadow-md'>
          594⭐ in GeeksforGeeks
        </div>
        <div className='bg-purple-200 max-w-fit px-3 py-1 rounded-lg shadow-md'>
          Selected for SIH hackathon (institute level)
        </div>
      </div>
    </div>
    <div id='about' className='p-5 text-lg flex flex-col flex-wrap items-center text-center'>
      <h5 className='text-2xl'>𝐀𝐛𝐨𝐮𝐭 :</h5>
      <p>Hello, I am Compter Engineering student at Terna Engineering College and I'm passionate in developing Android apps. Along with this I'm also a Competitive programmer with some knowledge of Web Development. I love to code and I consider Android Development to be an incredibly creative discipline that makes difference in people's lives. I enjoy creating application which will be able to impact many user.</p>

    </div>
   <Skills/>
 </div>


   
    </>
  );
}

export default App;


{/* <div className='flex  gap-1 bg-blue-600 px-3 py-2 rounded-lg text-white font-semibold'>
<AiOutlineDownload className='h-7 w-7'/>
<button >𝚁𝚎𝚜𝚞𝚖𝚎</button>

</div> */}
