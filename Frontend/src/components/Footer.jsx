import React from "react";
import { footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:x-24 xl:px-32">
      <div
        className="flex flex-col md:flex-row items-start justify-between 
        gap-10 py-10 border-b border-gray-500/30 text-white"
      >
        <div>
          <div className="font-bold text-2xl w-32 sm:w-44 cursor-pointer text-pink-400">
            Ink.AI
          </div>
          <p className="max-w-[410px] mt-6 text-lg font-bold">
            Hey everyone, I'm Sarthak Patel. This project is built with my love
            and passion ❤️.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-4">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3
                className="font-semibold text-base 
              text-white md:mb-5 
              mb-2"
              >
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-white font-bold">
        By Sarthak Patel ❤️
      </p>
    </div>
  );
};

export default Footer;
