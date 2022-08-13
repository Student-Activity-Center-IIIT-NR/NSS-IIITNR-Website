import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import data from "./ImageList";

const Gallery = () => {
  return (
    <>
      <Navbar display="bg-[#E5E5E5]" />
      <h1 className="container px-5 py-2 mx-auto lg:pt-8 lg:px-16 text-2xl md:text-3xl lg:text-4xl">
        Our Memories
      </h1>
      <section className="overflow-hidden text-gray-700 mb-4">
        <div className="container px-5 py-2 mx-auto lg:pt-8 lg:px-16">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap">
              {data.map((img, index) => {
                return (
                  <div key={index} className="w-1/2 p-1 md:p-2">
                    <img
                      alt=""
                      className="block object-contain object-center w-full h-full rounded-lg"
                      src={img.image}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
