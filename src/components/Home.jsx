import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#242424]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-bold text-[#997272]">Hola! Soy</p>
        <h1 className="text-4x sm:text-7xl font-bold text-[#f0e4e4]">
          Christopher Ochoa
        </h1>
        <h2 className="text-4xl sm:7xl font-bold text-[#997272]">
          Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2  hover:bg-[#997272] hover:border-[#997272]">
            <Link
              className="flex items-center"
              to="work"
              smooth={true}
              duration={500}
            >
              Mi trabajo{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
