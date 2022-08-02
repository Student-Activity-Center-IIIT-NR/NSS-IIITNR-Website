import React, { useState } from "react";

export const CarouselLanding = () => {
  const [photo, setphoto] = useState(0);
  const Carousel_Images = [
    "./images/carasouel/2.jpeg",
    "./images/carasouel/1.jpg",
    "./images/carasouel/3.jpeg",
  ];
  const next = () => {
    console.log(photo);
    if (photo === Carousel_Images.length - 1) {
      setphoto(0);
    } else {
      let number = photo + 1;
      setphoto(number);
    }
  };
  const previous = () => {
    if (photo === 0) {
      setphoto(Carousel_Images.length - 1);
    } else {
      let number = photo - 1;
      setphoto(number);
    }
  };
  return (
    <div className="scale-75 sm:scale-x-90 sm:scale-y-75 lg:scale-100 relative">
      <div className="overflow-hidden ">
        <div className="rounded-2xl shadow-sm drop-shadow-lg shadow-black ">
          <img
            src={Carousel_Images[photo]}
            className="w-[588px] h-[362px] aspect-auto rounded-2xl  "
            alt=""
          />
        </div>
      </div>
      <div
        className="absolute top-[50%] left-[2%] cursor-pointer hover:bg-gray-50 hover:bg-opacity-40 transition duration-200 p-2 rounded-full  z-20"
        onClick={previous}
      >
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 41.0787L3 22.0393L17 3"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden">Previous</span>
      </div>
      <div
        className="absolute top-[50%] right-[2%] cursor-pointer hover:bg-gray-50 hover:bg-opacity-40 transition duration-200 p-2 rounded-full  z-20"
        onClick={next}
      >
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3.00018L17 22.0395L3 41.0789"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="hidden">Previous</span>
      </div>
    </div>
  );
};
