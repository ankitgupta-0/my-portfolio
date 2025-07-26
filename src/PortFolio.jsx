import React from "react";
import mongoDB from "/images/mongodb.jpg?url";
import html from "/images/html.png?url";
import reactjs from "/images/reactjs.png?url";
import javascript from "/images/javascript.png?url";
import jobportal from "/images/jobportal.png?url";
import quiz from "/images/quiz.png?url";
import spotifyclone from "/images/spotifyclone.png?url";
import simonsays from "/images/simonsays.png?url";
import pet from "/images/pet.png?url";
import weather from "/images/weather.png?url";
import wanderlust from "/images/wanderlust.png?url";
import calculator from "/images/calculator.png?url";
import spagpay from "/images/spagpay.png?url";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: jobportal,
      name: "Job Portal",
      description: "Developed a job portal using HTML, CSS, and JavaScript.",
      sourceCodeLink: "https://github.com/ankitgupta-0/Job-Junction",
    },
    {
      id: 2,
      logo: calculator,
      name: "Calculator",
      description: "Created a simple calculator using HTML, CSS, and JavaScript.",
      sourceCodeLink: "https://github.com/ankitgupta-0/NumNinja",
    },
    {
      id: 3,
      logo: wanderlust,
      name: "Wanderlust",
      description: "Built a property listing platform with EJS and Bootstrap CSS.",
      sourceCodeLink: "https://github.com/ankitgupta-0/wanderlust",
    },
    {
      id: 4,
      logo: spotifyclone,
      name: "Spotify Clone",
      description: "A fully responsive music streaming web app inspired by Spotify.",
      sourceCodeLink: "https://github.com/ankitgupta-0/Spot-Sync",
    },
    {
      id: 5,
      logo: quiz,
      name: "Quiz App",
      description: "Developed a quiz application with real-time scoring.",
      sourceCodeLink: "https://github.com/ankitgupta-0/CodeX10",
    },
    {
      id: 6,
      logo: simonsays,
      name: "Simon Says",
      description: "Built a game using ReactJS and Tailwind CSS.",
      sourceCodeLink: "https://github.com/ankitgupta-0/MindSync-Challenge",
    },
    {
      id: 7,
      logo: spagpay,
      name: "SpagPay Payment",
      description: "Tried to integrate a payment gateway for secure transactions.",
      sourceCodeLink: "https://github.com/ankitgupta-0/4spagPay",
    },
    {
      id: 8,
      logo: pet,
      name: "Pet Adoption",
      description: "Developed a pet adoption platform with user authentication.",
      sourceCodeLink: "https://github.com/ankitgupta-0/pet-admin",
    },
    {
      id: 9,
      logo: weather,
      name: "Weather Whiz",
      description: "A weather forecasting app that provides real-time weather updates.",
      sourceCodeLink: "https://github.com/ankitgupta-0/WeatherWhiz-Forecasting-Finesse-",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-xl container mx-auto px-4 md:px-20 mt-10 bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-xl"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-800">Projects</h1>
        <p className="text-gray-600 mb-8">Here are some of my featured projects:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          {cardItem.map(({ id, logo, name, description, sourceCodeLink }) => (
            <div
              className="border-2 border-blue-100 rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 duration-300 hover:shadow-xl hover:bg-blue-50 transition-all"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] object-contain mx-auto"
                alt={name}
              />
              <div className="mt-4 text-center">
                <div className="text-xl font-bold text-blue-800 mb-2">{name}</div>
                <p className="text-gray-600">{description}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href={sourceCodeLink}
                  className="bg-blue-800 hover:bg-blue-900 text-white font-medium px-4 py-2 rounded-lg transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
