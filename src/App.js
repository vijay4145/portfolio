import "./App.css";
import Lottie from "lottie-react";
import web_animation from "./assets/web_development_animation3.json";
import codeforces_icon from "./assets/codeforces.png";
import codechef_icon from "./assets/codechef2.png";
import github_icon from "./assets/github.png";
import linkedin_icon from "./assets/linkedin.png";
import { Navbar } from "./components/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import "./style/Homepage.css";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { Link } from "react-scroll";

function App() {
  const [componentVisible, setComponentVisible] = useState(0);
  AOS.init({
    offset: 20,
    duration: 1000,
  });
  const { ref, inView } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) setComponentVisible(0);
  }, [inView]);

  return (
    <>
      <div>
        <div
          data-aos="fade-down"
          className="fixed z-10 top-0 bg-homepage2 overflow-hidden"
        >
          <Navbar componentVisible={componentVisible} />
        </div>

        <div ref={ref}>
          <Element
            name="home"
            data-aos="fade-down"
            className="max-sm:flex-col-reverse m-1 bg-homepage flex justify-between -z-10  bg-blue-800 shadow-2xl min-h-[60vh] items-center overflow-hidden"
          >
            <div
              data-aos="fade-up-right"
              className="flex flex-col justify-center p-6 gap-5 md:mt-10 max-sm:-mt-10"
            >
              <div className="flex flex-col gap-4">
                <h1 className="md:text-6xl text-4xl font-bold text-white">
                  𝙑𝙞𝙟𝙖𝙮 𝙂𝙪𝙥𝙩𝙖
                </h1>
                <p className="md:text-lg text-sm font-sans text-white ">
                  𝙁𝙪𝙡𝙡 𝙎𝙩𝙖𝙘𝙠 𝙒𝙚𝙗 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧{" "}
                </p>
              </div>
              <div id="tags" className="flex items-start flex-wrap gap-2">
                <a
                  href="#"
                  id="codechef"
                  className="flex gap-1 bg-blue-50 p-2 rounded-lg items-center"
                >
                  <img src={codechef_icon} alt="" className="h-6 w-6" />
                  <p className="max-sm:text-sm">Codechef 4⭐(max-rating)</p>
                </a>
                <a
                  href="#"
                  id="codeforces"
                  className="flex gap-1 bg-blue-50 p-2 rounded-lg items-center"
                >
                  <img src={codeforces_icon} alt="" className="h-5 w-5" />
                  <p className="hover:text-green-500 max-sm:text-sm">
                    Codeforces pupil
                  </p>
                </a>
              </div>
              <div
                id="social-media"
                className="flex flex-wrap gap-2 items-center"
              >
                <a target="_blank" href="https://github.com/vijay4145">
                  <img src={github_icon} alt="" className="h-12 w-12" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/vijay-gupta-519975228/"
                >
                  <img src={linkedin_icon} alt="" className="h-12 w-12" />
                </a>
                <a
                  target="_blank"
                  href="https://www.codechef.com/users/vijay4145"
                >
                  {" "}
                  <img src={codechef_icon} alt="" className="h-12 w-12" />
                </a>
                <a
                  target="_blank"
                  href="https://codeforces.com/profile/vijay4145"
                >
                  <img src={codeforces_icon} alt="" className="h-11 w-11" />
                </a>
              </div>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                id="explore-btn"
                className="bg-blue-500 max-w-fit px-3 py-2 text-white text-lg font-bold rounded-lg shadow-lg"
              >
                <button>Explore</button>
              </Link>
            </div>
            <Lottie
              animationData={web_animation}
              className="mt-10 max-sm:h-41"
            />
          </Element>
        </div>

        <Achievements />
        <About setComponentVisible={setComponentVisible} />
        <Skills setComponentVisible={setComponentVisible} />
        <Projects setComponentVisible={setComponentVisible} />
        <br />
      </div>
    </>
  );
}

export default App;
