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
        <div className=" w-full flex rounded-md justify-between p-3 text-center bg-[#ff520d4f]">
          <p className="text-3xl"> Reach out Upperwest </p>{" "}
          <p className="text-2xl justify-center">15th july 2022</p>
        </div>
      <div className="my-3"></div>
      <Gallery1 photos={photos} onClick={openLightbox} />
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
