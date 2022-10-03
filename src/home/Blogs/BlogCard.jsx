import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({ blog_details }) => {
  return (
    <div className="flex flex-col justify-center items-center -space-y-20 lg:-space-y-28">
      <div className="h-[400px] w-[320px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-2xl">
        <img src={blog_details.blog_img} className="object-cover h-full rounded-lg" alt="" />
      </div>
      <div className="bg-white rounded-2xl flex flex-col w-[320px] lg:w-[350px] lg:h-[545px] justify-start items-center py-4 px-6 drop-shadow-md space-y-2">
        <div className="text-lg lg:text-xl font-bold uppercase text-center">
          {blog_details.blog_heading}
        </div>
        <div className="text-base lg:text-md font-medium">
          {blog_details.blog_content}
        </div>
        <div className="flex flex-row justify-between w-full items-center font-medium pb-2">
          <div>Read More</div>
          <Link to="/events">
            <img src="/assets/readmore.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
