import React from "react";
import Logo from "../assets/logo.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Work = () => {
  return (
    <div
      name="work"
      className=" w-full  py-10 text-gray-300 bg-[#0a192f]  "
    >
      <div className=" max-w-[1000px] mx-auto  flex flex-col justify-center w-full h-full ">
        <div className="pb-8 px-4">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600  ">
            Projects
          </p>
          <p>Check out some of my completed projects</p>
        </div>

        <div className="flex  sm:flex-col md:flex-row justify-between border-gray-600 rounded-md border p-2 my-2 ">
          <div className=" flex-1 flex flex-col justify-between p-4 ">
            <p className=" text-2xl font-bold">Project:</p>
            <p className=" text-1xl font-bold">Project:</p>
            <p className=" text-2xl font-bold">Stacks:</p>
            <p className=" text-1xl font-bold">Stacks:</p>

            <div className="  ">
              {" "}
              <a href="/">
                <button className="text-white group border-2 px-6 py-3 my-2 flex  items-center  hover:bg-pink-600 hover:border-pink-600">
                  view{" "}
                  <span className="group-hover:pl-5 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className=" flex-2   ">
            <img className="mx-auto w-full" src={Logo}></img>
          </div>
        </div>
 



      </div>
    </div>
  );
};

export default Work;
