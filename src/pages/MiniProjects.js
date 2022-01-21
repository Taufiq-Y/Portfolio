import React from "react";
import Layout from "../components/Layout";
import miniData from '../resources/miniprojects';
import AOS from 'aos';
AOS.init({
  duration:1000
});


function MiniProjects() {
  return (
    <Layout>
      <div>
        <div>
          <div className="h-screen relative">
            <div className="h-3/4 pt-18 bg-theme">
              <div>
                <div className="h-screen mt-10">
                  <div className="h-3/4">
                    <lottie-player
                      src="https://assets1.lottiefiles.com/packages/lf20_jtbfg2nb.json"
                      background="transparent"
                      speed="1"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute left-0 right-0 -bottom-34'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#2a2a2a"
                fill-opacity="1"
                d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,181.3C672,203,768,213,864,181.3C960,149,1056,75,1152,58.7C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-5">
        <p className="text-xl font-semibold text-center ">
        Experience is the name everyone gives to their mistakes.
        </p>
        <h1 className="text-4xl text-center font-bold mt-5 animate-bounce">
          Because
        </h1>
      </div>
      <div className="font-semibold text-center bg-gray-500 m-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5">
        <h1 className="text-7xl md:text-3xl" data-aos='slide-up'>THE SMALL THINGS CREATE...</h1>
        <h1 className="text-7xl md:text-3xl"data-aos='slide-down'>MISTAKES'S</h1>
      </div>
      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-12 mx-20 md:mx-5">
        {miniData.map((miniproj) => {
          return (
            <div>
              <div className="relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400">
                <img src={miniproj.image} className="w-full h-50 text-center" />
                <div className="absolute inset-0 flex items-center justify-center rounded-tr-3xl rounded-bl-3xl flex-col opacity-0 bg-black hover:opacity-80">
                  <h1 className="text-4xl font-semibold text-white">
                    {miniproj.title}
                  </h1>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location = miniproj.link;
                    }}
                    className="border-2 rounded border-white py-2 bg-green-500 px-5 mt-5 text-white"
                  >
                    Live
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location = miniproj.repo;
                    }}
                    className="border-2 rounded border-white py-2 bg-green-500 px-5 mt-5 text-white"
                  >
                    Repo / GitHub
                  </button>
                </div>
              </div>


            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default MiniProjects;
