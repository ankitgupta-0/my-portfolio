import React from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped, Typed } from "react-typed";

import BlobProfile from "./BlobProfile";
function Home() {
  return (
    <div name="Home" className="max-w-screen-xl container mx-auto px-4 md:px-20 my-20 bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-18 space-y-2 order-2 md:order-1">
          <span className="text-xl">Hi there! 👋</span>
          <div className="flex space-x-2 text-3xl lg:text-2xl">
            <h1>Hello I'm a  </h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={[" Frontend Developer", " MERN Stack Developer", " Backend Coder", " Web App Builder", " Full Stack Developer"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <hr />
          <br />
          <a className="bg-blue-800 hover:bg-green-700 text-white font-bold px-4 py-2 rounded" href="/images/Ankit Gupta Web Resume.pdf" download="Ankit Gupta Web Resume">Download Resume</a>

          <br />
          <br />
          <hr />

          <p className="text-sm md:text-md text-justify">
            I’m Ankit Indresh Gupta, a MERN Stack Developer who loves building fast, scalable, 
            and user-friendly web apps.
            Thanks for visiting my portfolio — feel free to explore my projects and reach out if you'd like to collaborate!
          </p>
          <br />
          <div className="flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between">
            <div id="skill" className="space-y-2">
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[-2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[-2px]" />
                  <IoLogoReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[-2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[-2px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:ml-48 md:mt-18 mt-4 order-1 flex justify-center">
          {/* <img
            src="/images/photo.jpg"
            alt="Profile"
            className="rounded-full w-64 h-64 md:w-[450px] md:h-[450px] object-cover border-4 border-blue-500 shadow-lg"
          /> */}
           <BlobProfile imageSrc="/images/photo.jpg" className="w-64 h-64 md:w-[450px] md:h-[450px] object-cover border-4 border-blue-500 shadow-lg" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
