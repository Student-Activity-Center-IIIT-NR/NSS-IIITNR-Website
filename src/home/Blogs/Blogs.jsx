import React from "react";
import { BlogCard } from "./BlogCard";

const Blogs = () => {
  const blog = [
    {
      blog_img: "./images/blogs/1.png",
      blog_heading: "World Environment Day, 2022",
      blog_content:
        "The NSS unit of IIIT-Naya Raipur, in collaboration with ISR, organized a plantation drive in the university campus on the occasion of World Environment Day. Dr. Lakhinder Murmu, NSS Program Officer, led the team of NSS volunteers who gave a message for environmental protection by planting saplings, watering plants & running a cleanliness campaign around the university premises.",
    },
    {
      blog_img: "./images/blogs/2.png",
      blog_heading: "NIC, Raipur, 2022",
      blog_content:
        "The NSS unit of IIIT-NR collaborated with Pt. Ravishankar Shukla University in hosting the National Integration Camp at Raipur from 21st to 27th May, 2022. NSS Volunteers from 12 states across the country participated in the camp which turned out to be a splendid display of different cultures of India. A lot of competitions, cultural & sport events were organized in the camp which helped the volunteers learn about the diverse cultures of our nation & foster the spirit of national integration. Dr. Lakhinder Murmu, NSS Program officer for IIIT-NR, addressed the social media workshop organized during the camp.",
    },
    {
      blog_img: "./images/blogs/3.png",
      blog_heading: "NSS ORIENTATION PROGRAMME, 2022",
      blog_content:
        "NSS unit of IIIT-Naya Raipur organized a first of its kind NSS Orientation program for the BTech batch 2021.The program aimed at educating the new NSS volunteers about how NSS offers great opportunities to serve the society as well as for personal development. the event had the gracious presence of Dr. P.K. Sinha, Director IIITNR, Dr. Neeta Bajpai, NSS Coordinator (C.G.), Dr. Punya Paltani, Dean (Research) IIITNR, Satyendra Sahu, President Awardee NSS Senior Volunteer & Nikhil Kumar, State awardee Senior NSS Volunteer.",
    },
  ];
  return (
    <div className="flex flex-col bg-white px-4 lg:px-8 py-10 ">
      <div className="text-2xl lg:text-4xl font-semibold uppercase pb-8">
        BLOGS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 xl:gap-y-0 xl:grid-cols-3 place-content-between place-items-stretch">
        {blog.map((blog_details, index) => {
          return <BlogCard key={index} blog_details={blog_details} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
