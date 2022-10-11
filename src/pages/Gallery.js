import React, { useCallback, useState } from "react";
import bg from "../assets/bgg.jpg";
import { photos } from "./photos";
import { Outlet, Link } from "react-router-dom";


import Carousel, { Modal, ModalGateway } from "react-images";

import Gallery1 from "react-photo-gallery";



export const Gallery = () => {

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



  return (
    <>
      <div className=" py-10 pt-[90px] ">
      <div className=" text-4xl flex justify-start items-center flex-col ">
              <div className="border-red-400 font-bold  border-b-4 ">
                 Gallery
              </div>{" "}
            </div>
      </div>

      <div
        name="gallery"
        className="max-w-[1150px] mx-auto  flex  flex-col "
      >
        <div className=" w-full flex sm:flex-col rounded-md justify-between p-3 text-center bg-[#ff520d4f]">
          <p className="text-2xl"> Reach out Upperwest </p>{" "}
          <p className="text-xl justify-center">October 2021</p>
          <button className="hidden text-black text-xl mx-auto bg-orange-300 group border-2 md:px-6 sm:px-3 md:py-3 sm:py-2 my-2  items-center ">
                  view images{" "}
                  {/* <span className="group-hover:pl-5 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span> */}
                </button>
        </div>
      <div className="my-3"></div>
      <div className="sm:grid-cols-2">
      <div className=" grid sm:rows-span-1 gap-0 "  ><Gallery1 photos={photos} onClick={openLightbox} /></div></div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>
    </>
  );
};

export default Gallery;
