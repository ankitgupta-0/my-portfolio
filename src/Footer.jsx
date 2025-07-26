import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="py-12">
      <hr />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20  my-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            
                          <ul className="flex space-x-5">
                            <li>
                            <a href="https://www.linkedin.com/in/ankitgupta0/" target="_balnk">
                              <FaLinkedin className="text-2xl cursor-pointer" />
                              </a>
                            </li>
                            <li>
                            <a href="https://github.com/ankitgupta-0" target="_balnk">
                            <FaGithub  className="text-2xl cursor-pointer" />
                              </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/ankitgupta.dev/" target="_balnk">
                            <FaInstagram  className="text-2xl cursor-pointer" />
                              </a>
                            </li>
                          </ul>
          </div>
          <div className="mt-8 border-t border-gray-900 pt-8 flex flex-col items-center">
            <p className="text-sm">
             Ankit Indresh Gupta
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
