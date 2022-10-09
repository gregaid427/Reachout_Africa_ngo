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

      <div className=" py-10  pt-[90px] ">
        <div className=" text-4xl flex justify-start items-center flex-col ">
          <div className="border-red-400 font-bold  border-b-4 ">
            Our Projects
          </div>{" "}
        </div>
      </div>

      <div
        name="events"
        className="max-w-[1150px] mx-auto  flex items-center my-10 sm:my-0 gap-4     justify-between"
      >
        <div className="  grid md:grid-cols-2 sm:grid-cols-1  md:p-0 sm:px-5 gap-4  w-full h-full ">
          <div className=" shadow-xl w-full md:rows-span-1  mx-auto mb-5 sm:rows-span-1">
            <p className="p-3 bg-[#ff510d7c] text-2xl">Reach Out Upperwest</p>

            <p className="pl-3   text-xl">Jagluu, Upper west - Ghana</p>
            <p className="pl-3  text-xl">Date : October 2021</p>

            <div className="p-3">
              <p className="  text-xl font-bold ">Activities</p>
              <p className=" text-xl">
                {" "}
                In 2021, we went on an outreach to JAGLUU in the upper west
                region of Ghana. Jagluu community is a remote community in the
                Upper West Region with over two thousand (2000) inhabitants who
                lack basic necessities including; healthcare facilities, access
                to education, electricity and portable water. This community is
                an epitome of dejection as it contributes to the high numbers of
                teenage pregnancies, school dropouts and mortality from
                communicable and non-communicable diseases in the Upper West
                Region. As an organization, we provided free health screening
                for the entire community and educated the people on diseases
                such COVID 19, HIV/AIDS, Hepatitis B and C, malaria and many
                more. We embarked on a senior High school tour where we visited
                Lassia Tuolu Senior High School and educated the students on how
                they can be successful people in the society and the various
                career options they have.
              </p>
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

      <div
        name="events"
        className="max-w-[1150px] mx-auto  flex items-center my-10 sm:my-0 gap-4     justify-between"
      >
        <div className="  grid md:grid-cols-2 sm:grid-cols-1  md:p-0 sm:px-5 gap-4  w-full h-full ">
          <div className=" shadow-xl w-full md:rows-span-1  mx-auto mb-5 sm:rows-span-1">
            <p className="p-3 bg-[#ff510d7c] text-2xl">
              Hit The Streets Campaign
            </p>

            <p className="pl-3   text-xl">Location : Ashanti Region - Ghana </p>
            <p className="pl-3  text-xl">Year : 2019</p>

            <div className="p-3">
              <p className="  text-xl font-bold ">Activities</p>
              <p className=" text-xl">
                {" "}
                In 2019, we embarked on a “hit the Streets Campaign” This
                project created public awareness on the threats mentally
                deranged persons pose to the society and called on the
                government of Ghana and other private bodies to provide more
                mental facilities to accommodate such persons. We also provided
                food for about 500 mentally deranged persons on the streets of
                Ghana
              </p>
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

      <div
        name="events"
        className="max-w-[1150px] mx-auto  flex items-center my-10 sm:my-0 gap-4     justify-between"
      >
        <div className="  grid md:grid-cols-2 sm:grid-cols-1  md:p-0 sm:px-5 gap-4  w-full h-full ">
          <div className=" shadow-xl w-full md:rows-span-1  mx-auto mb-5 sm:rows-span-1">
            <p className="p-3 bg-[#ff510d7c] text-2xl">High School Tour</p>

            <p className="pl-3   text-xl">Location : Ashanti Region - Ghana</p>
            <p className="pl-3  text-xl">Year : 2018</p>

            <div className="p-3">
              <p className="  text-xl font-bold ">Activities</p>
              <p className=" text-xl">
                {" "}
                In 2018, we embarked on a high School tour where we visited
                several Senior High schools in Ghana and educated them on the
                various career options they have and how they can be successful
                people in the society.
              </p>
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
