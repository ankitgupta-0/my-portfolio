import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-xl container mx-auto px-4 md:px-20 my-16 bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-5 text-blue-800">About Me</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-8">
            Hello, I am Ankit Indresh Kumar Gupta - a passionate web developer  with a strong foundation in HTML, CSS, JavaScript, Tailwind CSS, React, and Node.js specializing in creating dynamic and responsive web applications.
          </p>
          
          <p className="mt-4 text-gray-600">
            I am always eager to learn new technologies and improve my skills. My goal is to build efficient, user-friendly web applications that provide a great user experience.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Proficient in HTML, CSS, and JavaScript</li>
            <li>Experienced with React for building interactive UIs</li>
            <li>Skilled in Node.js for backend development</li>
            <li>Familiar with MongoDB for database management</li>
            <li>Knowledgeable in Tailwind CSS for modern UI design</li>
          </ul>
        </div>
      </div>

      
          
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Certificates</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-800">TypeScript Workshop certificate (C.H.M. College)</p>
            <a href="https://drive.google.com/file/d/1YWsdQmdmen6goaT9cTgd52hguHDflWBH/view?usp=sharing" 
               className="text-blue-600 hover:text-blue-800" 
               target="_blank" 
               rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-800">JAVA with DSA</p>
            <a href="https://drive.google.com/file/d/1H0JoT5-DuSevudb9wmR8s5jcKhfgSWUP/view?usp=sharing" 
               className="text-blue-600 hover:text-blue-800" 
               target="_blank" 
               rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-800">MERN Stack Certificate(Apna College)</p>
            <a href="https://drive.google.com/file/d/1frLZ2BWqxN_mDDskGf874_3LP5e9a5BB/view?usp=sharing" 
               className="text-blue-600 hover:text-blue-800" 
               target="_blank" 
               rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
