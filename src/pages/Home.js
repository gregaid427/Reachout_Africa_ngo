import React, { Component, useCallback, useState } from "react";
import { render } from "react-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Outlet, Link } from "react-router-dom";
import bg from "../assets/bg.jpg";
import bgg from "../assets/bgg.jpg";
import hop from "../assets/hop.JPG";
import mn from "../assets/mn.jpg";
import p1 from "../assets/p1.jpg";
import gg from "../assets/gg.jpg";
import dd from "../assets/dd.jpg";
import bb from "../assets/bb.jpg";

import as from "../assets/as.jpg";
import jj from "../assets/jj.jpg";

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";

import a from "../gallery_images/2.jpg";
import b from "../gallery_images/3.jpg";
import c from "../gallery_images/8.jpg";
import d from "../gallery_images/9.jpg";

import Carousel, { Modal, ModalGateway } from "react-images";

import Gallery from "react-photo-gallery";

import {
  FaBars,
  FaTimes,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaMailBulk,
  FaLinkedinIn,
  FaTwitter,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa";

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: a,
      width: 1,
      height: 1,
    },
    {
      src: b,
      width: 1,
      height: 1,
    },
    {
      src: c,
      width: 1,
      height: 1,
    },
    {
      src: d,
      width: 1,
      height: 1,
    },
  ];

  return (
    <>
      {" "}
      <div name="home" className="sm:hidden">
        <img className=" md:flex w-full " src={bgg}></img>
        {/* <div className="relative flex flex-col">
          <div className="  absolute mt-[-30%] left-[20%] text-[8rem] text-white font-bold  ">Reach Out Africa  </div>{" "}
          <div className="  absolute mt-[-22%] left-[33%] text-[6rem] text-white font-bold  ">Foundation </div>{" "}
        </div> */}
      </div>
      <div name="home" className="">
        <img className="sm:flex md:hidden w-full " src={bg}></img>
      </div>
      <div
        name="about"
        className="max-w-[900px] mx-auto flex items-center md:px-0 sm:px-3 my-7 justify-center"
      >
        <div className=" flex flex-row ">
          <div className=" flex-1 flex pl-3  flex-col">
            <div className=" text-3xl flex justify-center font-bold  border-b-4 mb-3  border-red-400 mx-auto ">
              <div className=" flex items-center">Reach Out Africa</div>{" "}
            </div>
            <div className="flex justify-center text-xl  text-center">
              {" "}
              Reach out Africa is a non-profit organization made up of students,
              lawyers, pharmacists, doctors, nurses and other professionals who
              are like-minded in bringing relief to dispirited communities in
              Africa.
            </div>
          </div>
          {/* <div className=" flex-1 flex ">
            {" "}
            <img src={bg}></img>
          </div> */}
        </div>
      </div>
      <div className="my-10 text-left max-w-[1150px] border-l-4 pl-3 md:auto sm:ml-5 sm:px-5 border-orange-500 flex md:mx-auto justify-center items-left flex-col ">
        <p className="text-3xl font-bold">Our Vision</p>
        <p className="text-xl">
          We feel the need of the suffering and that we reach out in kind and
          other humanitarian services to help as much as we can. Activities of
          our outreach programs include; health promotion through health
          education and free screening, mentorship program to school children,
          donations, and general counseling.
        </p>
      </div>
      <div
        name="events"
        className="max-w-[1150px] mx-auto  md:flex md:px-0 sm:px-5 items-center my-10 gap-4    justify-between"
      >
        <div className=" flex md:flex-row shadow-xl sm:flex-col w-full h-full ">
          <div className=" flex-2 w-full ">
            <p className="p-3  text-3xl sm:text-center md:text-left font-bold ">
              Our Projects
            </p>
            <p className="p-3  text-left sm:text-center md:text-left text-xl">
              We embark on charity projects with the aim of helping the
              impoverished, less endowed and as well giving hope to the people
              in our communities. We feel the need of the suffering and that we
              reach out in kind and other humanitarian services to help as much
              as we can
            </p>
            <div className=" flex items-center justify-center ">
              <Link to="/projects">
                {" "}
                <button className="text-black text-xl bg-orange-300 group border-2 md:px-6 sm:px-3 md:py-3 sm:py-2 my-2 flex  items-center ">
                  view more{" "}
                  {/* <span className="group-hover:pl-5 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span> */}
                </button>
              </Link>
            </div>
          </div>{" "}
          <div>
            <img
              className="px-5 md:flex flex-1 h-80 w-[1000px] sm:hidden "
              src={hop}
            ></img>
          </div>
        </div>
      </div>
      <div
        name="vision"
        className="max-w-[1150px] mx-auto r my-10 sm:px-3  justify-center"
      >
        <div className=" text-3xl flex flex-row mb-8 mx-auto ">
          <div className="border-red-400 mx-auto font-bold  border-b-4 text-center">
            Recent Projects
          </div>{" "}
        </div>

        <div className=" gap-5 sm:gap-0 items-center my-10 sm:px-5  grid md:grid-cols-3 sm:grid-cols-1  justify-center ">
          <div className="shadow-md rounded-md flex-1 sm:mb-5 md:rows-span-1 mx-auto mb-5 sm:rows-span-1 ">
            <img className=" w-full " src={p1}></img>
            <p className="p-3 text-center text-xl">Reach Out Upper West</p>
            <p className="p-3 text-xl ">
              {" "}
              Location Jagluu, Upper west - Ghana <br></br>
              Year : October 2021
            </p>
          </div>

          <div className="shadow-md rounded-md flex-1 sm:mb-5 md:rows-span-1 mx-auto mb-5 sm:rows-span-1 ">
            <img className=" w-full " src={p1}></img>
            <p className="p-3 text-center text-xl">Hit The Streets Campaign</p>
            <p className="p-3 text-xl ">
              {" "}
              Location : Ashanti Region - Ghana <br></br>
              Year : 2019
            </p>
          </div>
          <div className="shadow-md rounded-md flex-1 sm:mb-5 md:rows-span-1 mx-auto mb-5 sm:rows-span-1 ">
            <img className=" w-full " src={p1}></img>
            <p className="p-3 text-center text-xl">High School Tour</p>
            <p className="p-3 text-xl ">
              {" "}
              Location : Ashanti Region - Ghana <br></br>
              Year : 2018
            </p>
          </div>
        </div>
      </div>
      <div
        name="quote  "
        className="  items-center w-full bg-gradient-to-b from-orange-500 to-yellow-500  flex  "
      >
        <div className=" text-white flex mx-auto flex-col justify-around md:px-10 sm:px-2 pt-5 pb-10 max-w-[1150px] h-full ">
          <div>
            <p className=" text-center text-6xl">...</p>
          </div>
          <p className=" text-center font-bold text-4xl sm:text-2xl">
            You may find a helping hand if in need at the end of your arm.
          </p>
          <p className=" text-center font-bold text-4xl sm:text-2xl">
            You will then discover that we were given two hands for a reason:
            one for helping yourself and another for helping others...
          </p>
          <div>
            {" "}
            <p className="mt-[-30px] text-center text-6xl">...</p>
          </div>
        </div>
      </div>
      <div name="team" className="max-w-[1150px] mx-auto my-10  ">
        <div className=" text-3xl flex flex-col mb-8  ">
          <div className="border-red-400 mx-auto font-bold  border-b-4 text-center">
            Our Team
          </div>{" "}
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2  items-center md:gap-5 sm:gap-2 ">
          <div className="shadow-md rounded-md md:rows-span-1 mx-auto md:mb-5 sm:rows-span-1 ">
            <img className="w-full " src={mn}></img>
            <p className="p-3 text-center text-xl">Founder/President</p>
            <p className="p-3 text-center  bg-orange-100 text-1xl">
              {" "}
              Monique Nkrumah
            </p>
          </div>
          <div className="shadow-md rounded-md  md:rows-span-1 mx-auto md:mb-5 sm:cols-span-1 ">
            <img className=" w-full " src={as}></img>
            <p className="p-3 text-center text-xl">Vice President</p>
            <p className="p-3 text-center bg-orange-100 text-1xl">
              {" "}
              Abena Tiwaa Kusi
            </p>
          </div>

          <div className="shadow-md rounded-md md:rows-span-1 mx-auto md:mb-5 sm:rows-span-2 ">
            <img className="w-full" src={gg}></img>
            <p className="p-3 text-center text-xl">Volunteer</p>
            <p className="p-3 text-center bg-orange-100 text-1xl">
              {" "}
              Georgina Gyebi
            </p>
          </div>

          <div className="shadow-md rounded-md md:rows-span-1 mx-auto md:mb-5 sm:cols-span-2 ">
            <img className=" w-full " src={dd}></img>
            <p className="p-3 text-center text-xl">Volunteer</p>
            <p className="p-3 text-center bg-orange-100 text-1xl">Deborah Kabutey</p>
          </div>

          <div className="shadow-md rounded-md  md:rows-span-1 mx-auto md:mb-5 sm:cols-span-2 ">
            <img className=" w-full " src={bb}></img>
            <p className="p-3 text-center text-xl">Volunteer</p>
            <p className="p-3 text-center bg-orange-100 text-1xl">Dorah Adusei</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-2 items-center md:gap-5 sm:gap-2 ">
          <div className="shadow-md rounded-md  md:rows-span-1 mx-auto md:mb-5 sm:cols-span-2 ">
            <img className="w-full" src={jj}></img>
            <p className="p-3 text-center text-xl">Volunteer</p>
            <p className="p-3 text-center bg-orange-100 text-1xl">Baffour Akoto</p>
          </div>
     
          <div className="shadow-md rounded-md  md:rows-span-1 mx-auto md:mb-5 sm:cols-span-2 ">
            <img className=" w-full " src={g1}></img>
            <p className="p-3 text-center text-xl">Volunteer</p>
            <p className="p-3 text-center bg-orange-100 text-1xl">Khaleb Vanderpuye</p>
          </div>

          <div className="shadow-md rounded-md  md:rows-span-1 mx-auto md:mb-5 sm:cols-span-2 ">
            <img className=" w-full " src={g2}></img>
            <p className="p-3 text-center text-xl">Volunteer</p>
            <p className="p-3 text-center bg-orange-100 text-1xl">Michelle Serwaa Nkrumah</p>
          </div>
        </div>
      </div>
      <div
        name="donate"
        className=" mx-auto  md:flex items-center md:my-10 sm:mb-0   justify-center "
      >
        <div className=" md:flex  max-w-[1150px] flex-row w-full h-full gap-4">
          <div className="p-5 flex-1 shadow-md  bg-[#d1673d]">
            <p className=" text-white font-bold md:text-8xl sm:text-6xl ">
              Donate
            </p>
            <p className=" text-white font-bold md:text-2xl sm:text-xl ">
              Give to support our Projects either in kind or cash
            </p>
            <p className="text-white font-bold md:text-2xl sm:text-xl">
              MTN Wallet : +233 244 244 2444
            </p>
            <p className="text-white font-bold md:text-2xl sm:text-xl">
              Vodafone Wallet : +233 50 159 6901
            </p>
          </div>{" "}
          <div className="p-7 pt-3 flex-1 shadow-md ">
            <div className=" md:text-4xl sm:text-3xl  flex justify-start items-start flex-col mb-8  ">
              <div className="border-red-400 sm:mx-auto  border-b-4 ">
                Get In Touch With Us
              </div>{" "}
            </div>

            <div className=" flex gap-20 sm:gap-3 sm:flex-col ">
              <div className="flex flex-col gap-2  ">
                <ul>
                  <li className=" px-0 flex gap-5 ">
                    <a className="flex   " href="/">
                      <FaPhone
                        size={45}
                        className=" text-white  bg-orange-600 p-2 rounded-md"
                      />
                    </a>

                    <div className="flex items-center  ">+233 2442442444</div>
                  </li>
                </ul>
                <ul>
                  <li className=" px-0 flex gap-5 ">
                    <a className="flex   " href="/">
                      <FaWhatsapp
                        size={45}
                        className=" text-white  bg-orange-600 p-2 rounded-md"
                      />
                    </a>

                    <div className="flex items-center  ">+233 501596901</div>
                  </li>
                </ul>
                <ul>
                  <li className=" px-0 flex gap-5 ">
                    <a className="flex   " href="/">
                      <FaInstagram
                        size={45}
                        className=" text-white  bg-orange-600 p-2 rounded-md"
                      />
                    </a>

                    <div className="flex items-center  ">reach_out_africa</div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2  ">
                <ul>
                  <li className=" px-0 flex gap-5 ">
                    <a className="flex   " href="/">
                      <FaMailBulk
                        size={45}
                        className=" text-white  bg-orange-600 p-2 rounded-md"
                      />
                    </a>

                    <div className="flex items-center  ">reachoutafricango@gmail.com </div>
                  </li>
                </ul>
        
            
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className=" flex mx-auto flex-col justify-around md:p-10 sm:p-5  bg-orange-500 pb-7  ">
        <p className=" m-3 text-center md:text-5xl text-white font-bold sm:text-3xl">
          We can’t help everyone, but everyone can help someone
        </p>
        <p className=" p-3 sm:p-2  border-4 text-2xl rounded-[50px] text-white mx-auto ">
          Become A Volunteer
        </p>
      </div>
      <div
        name="gallery"
        className="max-w-[1150px] mx-auto  flex  my-10 gap-4 flex-col  md:px-0 sm:px-5"
      >
        <div className=" text-3xl flex justify-start items-center flex-col mb-8  ">
          <div className="border-red-400 font-bold  border-b-4 ">
            Our Gallery
          </div>{" "}
        </div>
        <Gallery photos={photos} onClick={openLightbox} />

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        <div className=" flex  justify-center ">
          <Link to="/gallery">
            {" "}
            <button className="texmt-black text-1xl bg-orange-300 group border-2 md:px-6 sm:px-3 md:py-3 sm:py-2 my-2 flex  items-center">
              view all{" "}
              {/* <span className="group-hover:pl-5 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span> */}
            </button>
          </Link>
        </div>
      </div>
      <div
        name="Footer"
        className=" mx-auto  flex items-center   bg-[#49430a] justify-center "
      >
        <div className="py-4 flex gap-3 max-w-[1150px] text-white ">
          <p className="  text-1xl">@2022</p>
          <p className="  text-1xl flex items-center ">Designed by Optimum</p>
        </div>{" "}
      </div>
    </>
  );
};

export default Home;

// Your API key is: aa37c769904a76ff4303f70e

// And here's an example request: https://v6.exchangerate-api.com/v6/aa37c769904a76ff4303f70e/latest/USD
