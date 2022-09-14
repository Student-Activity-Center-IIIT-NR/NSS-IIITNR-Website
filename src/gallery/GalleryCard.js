import React from "react";
import { Link } from "react-router-dom";

const GalleryCard = ({ link, src, annot }) => {
  return (
    <>
      <Link to={link}>
        <div className="w-64 h-full flex flex-col gap-y-1">
          <div className="flex flex-row items-center h-52 justify-center">
            <img
              src={src}
              className="rounded object-cover"
              alt=""
              style={{ height: "100%" }}
            />
          </div>
          <p className="text-center text-md md:text-xl lg:text-xl hover:text-red-400">
            {annot}
          </p>
        </div>
      </Link>
    </>
  );
};

export default GalleryCard;
