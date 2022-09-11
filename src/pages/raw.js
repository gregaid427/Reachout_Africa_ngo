import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import bg from "../assets/bg.jpg";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
  FaLinkedinIn,
} from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <div name="home" className="">
        <img className=" w-full h-screen" src={bg}></img>
      </div>

      <div
        name="about"
        className="max-w-[900px] mx-auto flex items-center my-10 justify-center"
      >
        <div className=" flex flex-row ">
          <div className=" flex-1 flex pl-3  flex-col">
            <div className=" text-4xl flex justify-center  border-b-4 mb-3  border-red-400 mx-auto ">
              <div className=" flex items-center">Impact Africa</div>{" "}
            </div>
            <div className="flex justify-center text-center">
              {" "}
              dsn fjgbnd lhigdijgi fjed 
              guo jgdsnfjgbnd
              lhigdijgifjed uojgds
              nfjgbn dlhigdijgifjedg
              uojgd snfjgb
              ndlhigdijgifjedguojg
              dsnfj gbndlhigd ijgifjed guojgd snfjgbndlh igdijgifjed guojgds
              nf jgbndl higdi jgifje dguoj gdsnfjg bndlhi gdijgifje dguojg
              dsnfj gbndl higd ijgifjed  guoj gdsnfjg bndlh igdijg ifjed guojgds
              nfjgbndlh igdi jgifje dguoj gdsn fjgbn dlhigd ijgifj edguojg
            </div>
          </div>
          {/* <div className=" flex-1 flex ">
            {" "}
            <img src={bg}></img>
          </div> */}
        </div>
      </div>

      <div
        name="vision"
        className="max-w-[1000px] mx-auto flex items-center my-10 sm:flex-col sm:gap-3 sm:m-5  justify-center"
      >
        <div className="shadow-md rounded-md flex-1  ">
          <img className=" w-full " src={bg}></img>
          <p className="p-3 text-center text-2xl">Our Vision</p>
          <p className="p-3 text-1xl text-center">
            {" "}
            dsnfjgbndlhigdijgifjed guojgdsnfjgbndlhigdijgifjedguojgds
            nfjgbndlhigdijgifjedguojgdsnfjgbndlhigdijgifjedguojg
          </p>
        </div>

        <div className="shadow-md rounded-md flex-1 ">
          <img className=" w-full " src={bg}></img>
          <p className="p-3 text-center text-2xl">Our Vision</p>
          <p className="p-3 text-1xl text-center">
            {" "}
            dsnfjgbndlhigdijgifjed guojgdsnfjgbndlhigdijgifjedguojgds
            nfjgbndlhigdijgifjedguojgdsnfjgbndlhigdijgifjedguojg
          </p>
        </div>

        <div className="shadow-md rounded-md flex-1 ">
          <img className=" w-full " src={bg}></img>
          <p className="p-3 text-center text-2xl">Our Vision</p>
          <p className="p-3 text-1xl text-center">
            {" "}
            dsnfjgbndlhigdijgifjed guojgdsnfjgbndlhigdijgifjedguojgds
            nfjgbndlhigdijgifjedguojgdsnfjgbndlhigdijgifjedguojg
          </p>
        </div>
      </div>

      <div
        name="events"
        className="max-w-[1150px] mx-auto  flex items-center my-20 gap-4 sm:px-5   justify-between"
      >
        <div className=" flex flex-row shadow-md w-full h-full sm:flex-col ">
          <div className=" flex-2 w-full ">
            <p className="p-3 text-center text-4xl">Our Projects</p>
            <p className="p-3  text-center text-2xl">
              dsnfjgbndlhigdijgifjed guojgdsnfjgbndlhigdijgifjedguojgds
              nfjgbndlhigdijgifjedguojgdsn fjgbndlhigdijgifjedguojg
            </p>
            <div className=" flex items-center justify-center ">
            <a href="./projects">   <button className="text-black bg-slate-400 group border-2 px-6 py-3 my-2 flex  items-center  hover:bg-pink-600 hover:border-pink-600">
                view more{" "}
                <span className="group-hover:pl-5 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button></a> 
            </div>
          </div>{" "}
          <div>
            <img className=" flex flex-1 h-80 w-[1000px] " src={bg}></img>
          </div>
        </div>
      </div>
      <div
        name="quote"
        className="max-w-[1150px] mx-auto  flex items-center my-10 "
      >
        <div className=" flex flex-row  w-full h-full ">
          <div className=" flex-2 w-full ">
            <p className="p-5 text-center text-4xl">"</p>
            <p className=" text-center text-4xl sm:text-2xl">
              dsnfjgbndlhigdijgifjed guojgdsnfjgbndlhigdijgifjedguojgds
              nfjgbndlhigdijgifjedguojgdsn fjgbndlhigdijgifjedguojg
              dsnfjgbndlhigdijgifjed guojgdsnfjgbndlhigdijgifjedguojgds
              nfjgbndlhigdijgifjedguojgdsn fjgbndlhigdijgifjedguojg
            </p>
            <p className="p-5 text-center text-4xl">"</p>
          </div>{" "}
        </div>
      </div>

      <div name="team" className="max-w-[1150px] mx-auto my-10  ">
        <div className=" text-4xl flex flex-col mb-8  ">
          <div className="border-red-400 mx-auto  border-b-4 text-center">
            Our Team
          </div>{" "}
        </div>

        <div className="flex items-center gap-5 sm:flex-col ">
          <div className="shadow-md rounded-md flex-1  ">
            <img className=" w-full  h-60" src={bg}></img>
            <p className="p-3 text-center text-1xl">Founder</p>
            <p className="p-3 text-1xl">
              {" "}
              dsnfjgbnd lhigdijgif nfjgbndlh igdijgifje
            </p>
          </div>

          <div className="shadow-md rounded-md flex-1  ">
            <img className=" w-full h-60 " src={bg}></img>
            <p className="p-3 text-center text-1xl">Volunteer</p>
            <p className="p-3 text-1xl">
              {" "}
              dsnfjgb ndlhigdi jgifjed nfjgb dlhigdijgi
            </p>
          </div>

          <div className="shadow-md rounded-md flex-1 ">
            <img className=" w-full h-60" src={bg}></img>
            <p className="p-3 text-center text-1xl">Volunteer</p>
            <p className="p-3 text-1xl">
              {" "}
              dsnfjgb ndlhigdi jgifjed nfjgb dlhigdijgi
            </p>
          </div>

          <div className="shadow-md rounded-md flex-1 ">
            <img className=" w-full h-60" src={bg}></img>
            <p className="p-3 text-center text-1xl">Volunteer</p>
            <p className="p-3 text-1xl">
              {" "}
              dsnfjgbndlhigdijgifj nfjgbndlhigdijgifjedgu
            </p>
          </div>
        </div>
      </div>

      <div
        name="donate"
        className=" mx-auto  flex items-center my-10   justify-center "
      >
        <div className=" flex  max-w-[1150px] flex-row sm:flex-col w-full h-full gap-4">
          <div className="p-7 flex-1 shadow-md ">
            <p className="  text-8xl">Donate</p>
            <p className="   text-2xl">
              Give to support our Projects either in kind or cash
            </p>
            <p className="   text-2xl">
              Our Momo Wallet Number : +233 244 244 2444
            </p>
            <div className=" flex ">
            <a href="./projects">   <button className="text-black text-1xl bg-slate-400 group border-2 px-6 py-3 my-2 flex  items-center  hover:bg-pink-600 hover:border-pink-600">
                view our Projects{" "}
                <span className="group-hover:pl-5 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button> </a>
            </div>
          </div>{" "}
          <div className="p-7 pt-3 flex-1 shadow-md ">
            <div className=" text-4xl flex justify-start items-start flex-col mb-8  ">
              <div className="border-red-400   border-b-4 ">
                Get In Touch With Us
              </div>{" "}
            </div>
       
         <div className=" flex gap-20 sm:flex-col sm:gap-5 ">


            <div className="flex flex-col gap-2  ">
              <ul>
                <li className=" px-0 flex gap-5 ">
                  <a className="flex   " href="/">
                    <FaMailBulk
                      size={45}
                      className=" text-white  bg-black p-2 rounded-md"
                    />
                  </a>

                  <div className="flex items-center  ">Phone </div>
                </li>
              </ul>
              <ul>
                <li className=" px-0 flex gap-5 ">
                  <a className="flex   " href="/">
                    <FaMailBulk
                      size={45}
                      className=" text-white  bg-black p-2 rounded-md"
                    />
                  </a>

                  <div className="flex items-center  ">Email </div>
                </li>
              </ul>
              <ul>
                <li className=" px-0 flex gap-5 ">
                  <a className="flex   " href="/">
                    <FaMailBulk
                      size={45}
                      className=" text-white  bg-black p-2 rounded-md"
                    />
                  </a>

                  <div className="flex items-center  ">Instagram </div>
                </li>
              </ul>
            </div>


  <div className="flex flex-col gap-2  ">
              <ul>
                <li className=" px-0 flex gap-5 ">
                  <a className="flex   " href="/">
                    <FaMailBulk
                      size={45}
                      className=" text-white  bg-black p-2 rounded-md"
                    />
                  </a>

                  <div className="flex items-center  ">Phone </div>
                </li>
              </ul>
              <ul>
                <li className=" px-0 flex gap-5 ">
                  <a className="flex   " href="/">
                    <FaMailBulk
                      size={45}
                      className=" text-white  bg-black p-2 rounded-md"
                    />
                  </a>

                  <div className="flex items-center  ">Email </div>
                </li>
              </ul>
              <ul>
                <li className=" px-0 flex gap-5 ">
                  <a className="flex   " href="/">
                    <FaMailBulk
                      size={45}
                      className=" text-white  bg-black p-2 rounded-md"
                    />
                  </a>

                  <div className="flex items-center  ">Instagram </div>
                </li>
              </ul>
            </div>
</div>
          </div>{" "}
        </div>
      </div>

      <div
        name="gallery"
        className="max-w-[1150px] mx-auto  flex items-center my-10 gap-4 flex-col "
      >
        <div className=" text-4xl flex justify-start items-start flex-col mb-8  ">
              <div className="border-red-400   border-b-4 ">
                Our Gallery
              </div>{" "}
            </div>
        <div className=" flex ">
        <a href="./Gallery">   <button className="text-black text-1xl bg-slate-400 group border-2 px-6 py-3 my-2 flex  items-center  hover:bg-pink-600 hover:border-pink-600">
                view more{" "}
                <span className="group-hover:pl-5 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button> </a>
            </div>
      </div>

      <div
        name="Footer"
        className=" mx-auto  flex items-center   bg-slate-800  justify-center "
      >
        <div className="py-4 flex gap-3 max-w-[1150px]  ">
          <p className="  text-2xl">@2022</p>
          <p className="  text-1xl flex items-center ">Designed by Optimum</p>
     
        </div>{" "}
      </div>
    </>
  );
};

export default Home;
