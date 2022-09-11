import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import bb from "../assets/bb.jpg";
const photos = [
  {
    src: bb,
    width: 1,
    height: 1
  },
  {
    src: bb,
    width: 1,
    height: 1
  },
  {
    src: bb,
    width: 1,
    height: 1
  },
  {
    src: bb,
    width: 1,
    height: 1
  },


];

const Error = () => {
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
      <div
        name="gallery"
       
      >
        {/* <div className=" text-3xl flex justify-start items-start flex-col mb-8  ">
              <div className="border-red-400 font-bold  border-b-4 ">
                Our Gallery
              </div>{" "}
            </div>  */}
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
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
      <div className=" flex ">
         {/* <Link to="/gallery">   <button className="text-black text-1xl bg-orange-300 group border-2 px-6 py-3 my-2 flex  items-center ">
                view more{" "}
               <span className="group-hover:pl-5 duration-300">
                 <HiArrowNarrowRight className="ml-3 " />
            </span>
               </button></Link> */}
         </div>
       </div> 
  );
}

export default Error