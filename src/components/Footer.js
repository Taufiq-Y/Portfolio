import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='h-44 md:h-20'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2a2a2a"
          fill-opacity="1"
          d="M0,128L0,64L288,64L288,96L576,96L576,128L864,128L864,96L1152,96L1152,160L1440,160L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
        ></path>
      </svg>
      </div>
      <div className="bg-theme w-screen flex justify-center   ">
        <div className="md:w-full w-1/2">
          <div className=" p-10 font-mont text-center">
            <p className="text-gray-50 pb-5">
              Designed and Developed with ♥ by
            </p>
            <div className="h-1 border-2 border-white border-dotted"></div>
            <div className="flex text-white w-full justify-between py-3">
              <a href="https://www.facebook.com/taufiq.rockzz" target="blank">
                <FaFacebookSquare className="cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/__taufiq____/" target="blank">
                <FaInstagram className="cursor-pointer" />
              </a>
              <a href="https://github.com/Taufiq-Y" target="blank">
                <FaGithub className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-taufiq-y-844b8b1b4"
                target="blank"
              >
                <FaLinkedin className="cursor-pointer" />
              </a>
            </div>
            <div className="h-1 border-2 border-gray-50 border-white border-dotted"></div>
            <p className="text-gray-50 text-xl my-3">Muhammed Taufiq Y</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
