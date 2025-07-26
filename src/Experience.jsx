import React from "react";
import html from "/images/html.png?url";
import css from "/images/css.jpg?url";
import bootstrap from "/images/bootstrap.jpg?url";
import tailwindcss from "/images/tailwindcss.png?url";
import mongodb from "/images/mongodb.jpg?url";
import nodejs from "/images/nodejs.png?url";
import  expressjs from "/images/expressjs.png?url";
import  java from "/images/java.png?url";
import javascript from "/images/javascript.png?url";
import reactjs from "/images/reactjs.png?url"

function Experience() {

  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: bootstrap,
      name: "BootStrap",
    },

    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 6,
      logo: tailwindcss,
      name: "Tailwind CSS",
    },
    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 9,
      logo: expressjs,
      name: "ExpressJS",
    },
    {
      id: 10,
      logo: java,
      name: "JAVA",
    }

  ];
  return (
      <div
        name="Skills"

        className="max-w-screen-xl container mx-auto px-4 md:px-20 my-16 bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-xl"
      >

      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-800">Skills</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-3">


          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 border-blue-100 rounded-2xl md:w-[200px] md:h-[200px] shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 hover:shadow-xl hover:bg-blue-50 transition-all"
              key={id}
            >
              <img src={logo} className="w-[120px] h-[120px] object-contain" alt={name} />
              <div className="mt-4">
                <div className="text-lg font-medium text-blue-800">{name}</div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
