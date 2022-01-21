import React, { useState } from "react";
import Layout from "../components/Layout";
import emailjs from "@emailjs/browser";
import { AiOutlineArrowDown } from "react-icons/ai";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c35qotu",
        "template_6cpfgbu",
        e.target,
        "user_RYJiCJa4ahC0PEaoHWa3d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Layout>
      <div>
        <div className="h-screen mt-10 bg-theme">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_9wjm14ni.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <form onSubmit={sendEmail}>
          <div className="w-screen flex justify-center">
            <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
              <h1 className="text-2xl font-semibold">Wanna Hire..??</h1>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                name="name"
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                name="phonenumber"
              />
              <input
                type="text"
                placeholder="Email"
                required
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                name="email"
              />
              <textarea
                type="text"
                placeholder="Message"
                className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                name="message"
              />

              <button className="bg-black rounded text-white px-5 py-1 mt-3 justify-center hover:bg-green-500">
                SUBMIT
              </button>
              <a
                href="https://drive.google.com/file/d/1AuFnGrMlzxxrrKEl6tUcvTzph39Ua9LF/view"
                target={"_blank"}
                className="text-left 
                flex  items-center
                gap-2 group flex-shrink-0
                pr-4 py-2 mt-4
                dark:bg-teal-700 bg-teal-600 rounded-lg hover:shadow-md bg-theme justify-center hover:bg-red-500">
                <AiOutlineArrowDown className="text-white transform transition-transform ml-2" />
                <span className="text-sm text-white ">MY RESUME</span>
            </a>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
