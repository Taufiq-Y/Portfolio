import React,{useEffect} from "react";
import Layout from "../components/Layout";
import {
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiOutlineArrowDown } from "react-icons/ai";
import AOS from 'aos';
AOS.init({
  duration:1000
});

function Home() {
  useEffect(() => {
    window.scroll(0,0)
}, [])
  return (
    <Layout>
      <div>
        <div className="h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 mx-10 z-10 bg-theme border-white transform rotate-12 md:rotate-0">
            <div className="h-1/2"data-aos='zoom-in-up'>
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_kyu7xb1v.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              <hr />
            </div>
            <div className="font-bold text-white md:px-5">
              <h1 className="text-7xl md:text-4xl" data-aos='slide-right'>
                Hii, I am <b className="text-yellow-500">Muhammed</b>
              </h1>
              <hr />
              <h1 className="text-4xl md:text-xl" data-aos='slide-left'>
                FullStack <b className="text-red-500">Developer</b> , Designer
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl text-blue-800 font-bold text-center my-12">
            Things Helps Me Brew...!!
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={170}
              color="#5ED3F3"
              className="w-full text-center mt-20 animate-spin"
            />
            <SiRedux
              size={170}
              color="#7248B6"
              className="w-full text-center mt-20 "
            />
            <FaNodeJs
              size={170}
              color="#30960B"
              className="w-full text-center mt-20 animate-bounce"
            />
            <DiMongodb
              size={170}
              color="#57A94D"
              className="w-full text-center mt-20"
            />
            <FaBootstrap
              size={170}
              color="#8411F4"
              className="w-full text-center mt-20"
            />
            <FaJsSquare
              size={170}
              color="#EFD81D"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaHtml5
              size={170}
              color="#E96127"
              className="w-full text-center mt-20"
            />
            <FaCss3
              size={170}
              color="#2862E9"
              className="w-full text-center mt-20 animate-bounce"
            />
          </div>
        </div>
        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10">
              Yes, Buddy Your Right..I am a MERN Chef
            </h1>
          </div>
          <div className="md:mx-0 mx-80 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96"  data-aos='zoom-in'>
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="text-xl my-5 font-semibold md:px-5 px-14 py-8 items-center">
              Brewing up the spell with MERN, always produces 'Quakes'.
            </p>
          </div>
        </div>

        {/* Dev Stack Section */}
        <div className="my-20">
          <div className="text-center h-52 bg-red-400">
            <h1 className="text-white font-bold text-4xl py-10">
              My Secret Ingredients Stack
            </h1>
          </div>
          <div className="md:mx-0 mx-80 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96">
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_pwohahvd.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-4 text-center" data-aos='fade-up'>
              <div>
                <h1 className="text-xl font-bold">FrontEnd</h1>
                <hr />
                <p className="font-semibold mt-2 ">JavaScript</p>

                <p className="font-semibold mt-2 ">HTML/CSS</p>
                {/* <FaReact /> */}
                <p className="font-semibold mt-2 ">React</p>
                <p className="font-semibold mt-2 ">Redux</p>
                <p className="font-semibold mt-2 ">NPM</p>
                <p className="font-semibold mt-2 ">Sass</p>
                <p className="font-semibold mt-2 ">TypeScript</p>
              </div>

              <div>
                <h1 className="text-xl font-bold">UI/UX</h1>
                <hr />
                <p className="font-semibold mt-2 ">Bootstrap</p>
                <p className="font-semibold mt-2 ">Tailwind CSS</p>
                <p className="font-semibold mt-2 ">Material-ui</p>
                <p className="font-semibold mt-2 ">Semantic-ui</p>
                <p className="font-semibold mt-2 ">FontAwesome</p>
                <p className="font-semibold mt-2 ">Figma</p>
                <p className="font-semibold mt-2 ">Adobe XD</p>
              </div>

              <div>
                <h1 className="text-xl font-bold">BackEnd / DB</h1>
                <hr />
                <p className="font-semibold mt-2 ">JavaScript</p>
                <p className="font-semibold mt-2 ">NodeJs</p>
                <p className="font-semibold mt-2 ">Express JS</p>
                <p className="font-semibold mt-2 ">MySql</p>
                <p className="font-semibold mt-2 ">MongoDB</p>
                <p className="font-semibold mt-2 ">Postman</p>
              </div>

              <div>
                <h1 className="text-xl font-bold">Deploy</h1>
                <hr />
                <p className="font-semibold mt-2 ">Git</p>
                <p className="font-semibold mt-2 ">GitHub</p>
                <p className="font-semibold mt-2 ">AWS</p>
                <p className="font-semibold mt-2 ">Heroku</p>
                <p className="font-semibold mt-2 ">Netlify</p>
                <p className="font-semibold mt-2 ">Hostinger</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-gray-500 text-center font-bold">
            By the way... who is he..! ?
          </h1>
          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_jwqugkrv.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-bold'>Hello World,
                <hr />
                <pre className='text-xl md:text-sm my-5 font-mont font-semibold'>
                    {JSON.stringify({
                        Name: 'Muhammed Taufiq Y',
                        Age: 'Unknown',
                        Gender: 'Male',
                        Location: 'Chennai',
                        Country: 'India'
                    }, null, 2)}
                </pre>
                </h1>
                {/* <ResumeButton /> */}
                <a
                href="https://drive.google.com/file/d/1AuFnGrMlzxxrrKEl6tUcvTzph39Ua9LF/view"
                target={"_blank"}
                className="text-left 
                flex  items-center
                gap-2 group flex-shrink-0
                pr-4 py-2 w-fit relative
                dark:bg-teal-700 bg-teal-600 rounded-lg hover:shadow-md bg-#FEE4DF bg-theme ">
                <AiOutlineArrowDown className="text-white transform transition-transform ml-2" />
                <span className="text-sm text-white hover:bg-#FEE4DF">MY RESUME</span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
