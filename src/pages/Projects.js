import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import b from "../gallery_images/3.jpg";
import { Outlet, Link } from "react-router-dom";

export const Projects = () => {
  return (
    <>
      {/* <div className="   ">
        <img className=" w-full h-[300px]" src={bg}></img>

        <div className=" text-5xl font-bold  justify-center  flex">
          <div className=" text-white flex mt-[-150px] ">Our Projects</div>{" "}
        </div>
      </div> */}

<div className=" py-10 pt-[90px] ">
      <div className=" text-4xl flex justify-start items-center flex-col ">
              <div className="border-red-400 font-bold  border-b-4 ">
              Our Projects
              </div>{" "}
            </div>
      </div>

      <div
        name="events"
        className="max-w-[1150px] mx-auto  flex items-center my-10 gap-4     justify-between"
      >
        <div className="   grid md:grid-cols-2 sm:grid-cols-1  md:p-0 sm:px-5 gap-4 shadow-md w-full h-full ">
          <div className="  w-full md:rows-span-1  mx-auto mb-5 sm:rows-span-1">
            <p className="p-3 bg-[#ff510d7c] text-3xl">Reach Out Upperwest</p>
            <div className="flex justify-between">
              {" "}
              <p className="p-3  text-center text-2xl">Location : Upperwest</p>
              <p className="p-3  text-center text-2xl">Date : 21 May, 2021</p>
            </div>
            <div className="p-3">
              <p className="  text-2xl font-bold ">Activities</p>
              <p className=" text-2xl">Health Screening</p><p className=" text-2xl">Crusade</p><p className="text-2xl">Giveaways</p>
            </div>
            <div className=" flex items-center justify-center ">
              {/* <a href="./projects">   <button className="text-black bg-slate-400 group border-2 px-6 py-3 my-2 flex  items-center  hover:bg-pink-600 hover:border-pink-600">
                view more Pictures{" "}
                <span className="group-hover:pl-5 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button></a>  */}
            </div>
          </div>{" "}
          <div className=" md:rows-span-1 mx-auto mb-5 sm:rows-span-1  ">
            <img className=" h-[330px] w-[600px]" src={b}></img>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Projects;
