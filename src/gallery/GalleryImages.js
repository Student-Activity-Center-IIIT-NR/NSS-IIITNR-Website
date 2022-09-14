import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const GalleryImages = ({ max }) => {
  const { dir } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getImageUrl();
  }, []);

  // gallery image name must be a number in increasing order.
  // on image update in gallery, array length must be updated in for loop.
  const getImageUrl = async () => {
    for (let i = 1; i < 100; i++) {
      let image = `/assets/gallery/${dir}/${i}.jpeg`;
      let res = await fetch(image);
      if (!res.headers.get("content-type").startsWith("image/")) break;
      setData(curr => [...curr, { image }]);
    }
  };

  console.log(data);
  return (
    <>
      <section className="overflow-hidden text-gray-700 mb-4">
        <div className="container px-5 py-2 mx-auto lg:pt-8 lg:px-16">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap gap-y-8 gap-x-4">
              {data.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="w-[45%] p-1 md:p-2 shadow-md bg-[#e12129] bg-opacity-10 rounded-lg"
                  >
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
    </>
  );
};

export default GalleryImages;
