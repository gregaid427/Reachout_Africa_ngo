import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import bg from "../assets/bg.jpg";

export const Admin = () => {
  const [show, setshow] = useState(false);

  const btnclick = () => {
    setshow(!show);
  };
  return (
    <div>
      <div
        name="events"
        className="max-w-[1150px] mx-auto  flex items-center  gap-4  relative   justify-between"
      >
        <div className=" flex flex-col  w-full h-full my-[100px]">
          <div onClick={btnclick}>
            <button className="text-black text-2xl bg-orange-300 group mx-auto border-2 px-6 py-3 my-2 flex  items-center  ">
              Add New Project{" "}
              <span className="group-hover:pl-5 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>

          <div
            name=""
            className={
              show
                ? "w-full h-screen bg-slate-600 mb-5 flex justify-center items-center p-4"
                : "hidden"
            }
          >
            <form action="" className="flex flex-col max-w-[900px] w-full">
              <input
                className="bg-[#ccd] p-2"
                type={"text"}
                placeholder="Title"
                name="title"
              ></input>
              <input
                className="my-4 p-2 bg-[#ccd] "
                type={"text"}
                placeholder="Location"
                name="Location"
              ></input>
              <input
                className="my-4 p-2 bg-[#ccd] "
                type={"text"}
                placeholder="Date"
                name="Date"
              ></input>
              <textarea
                className="my-4 p-2 bg-[#ccd]"
                rows={"10"}
                placeholder="Notes"
                name="Notes"
              ></textarea>
              <button className="text-white border-2 hover:bg-red-600 hoverborder-pink-500 px-4 py-3 my-8 mx-auto flex items-center">
                {" "}
                Add Project{" "}
              </button>
            </form>
          </div>

   
          <div
        name="events"
        className="max-w-[1150px] mx-auto  flex items-center my-10 gap-4     justify-between"
      >
        <div className=" flex md:flex-row sm:flex-col md:p-0 sm:px-5 gap-4 shadow-md w-full h-full ">
          <div className=" flex-2 w-full ">
            <p className="p-3 bg-[#d1673d] text-white text-3xl">Our Projects</p>
            <div className="flex justify-between">
              {" "}
              <p className="p-3  text-center text-2xl">Location : Tamale</p>
              <p className="p-3  text-center text-2xl">Date : 18/52/2022</p>
            </div>
            <div className="">
              <p className=" p-3 text-2xl">Notes</p>
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
          <div>
            <img className=" flex flex-1 h-80 w-[900px] " src={bg}></img>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
