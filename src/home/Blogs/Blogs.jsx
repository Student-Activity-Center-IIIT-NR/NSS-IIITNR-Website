import React from "react";
import { BlogCard } from "./BlogCard";

const Blogs = () => {
  const blog = [
    {
      blog_img: "/assets/gallery/bloodDC2022/4.jpeg",
      blog_heading: "Blood Donation Camp 2022",
      blog_content:
        "The NSS unit of IIITNR, in collaboration with SAC IIITNR, organized a blood donation camp on 8th November 2022 in the college auditorium. The camp was organized under the supervision of an expert medical team from AIIMS Raipur. The blood donation camp began with the inaugural program at 9:30 a.m. Dr. Lakhinder Murmu, Program Officer, NSS IIITNR, welcomed the team of doctors and medical staff from AIIMS Raipur and expressed gratitude towards them and all the generous blood donors as well as the NSS volunteers who organized the camp.",
    },
    {
      blog_img: "/assets/gallery/run4unity2022/1.jpeg",
      blog_heading: "Run For Unity 2022",
      blog_content:
        "The NSS unit of IIITNR, in collaboration with SAC IIITNR, organized “Run For Unity” on 31 October 2022 to commemorate the birth anniversary of the first Home Minister and the ‘Iron Man’ of India, Sardar Vallabhbhai Patel. Hundreds of students and several teaching and non-teaching staff of the College enthusiastically participated in it. The event started at 4 PM in the College with an address by Dr. P.K. Sinha, hon’ble director, IIITNR. In his short speech, Dr. Sinha remembered Sardar Patel’s legacy and commended his tenuous efforts in integrating over 565 princely states into the Union of India with his astute administrative abilities and iron will.",
    },
    {
      blog_img: "/assets/gallery/plantation2022/1.jpeg",
      blog_heading: "Plantation Drive 2022",
      blog_content:
        "In collaboration with the Institute Social Responsibility (ISR) team, the NSS unit of IIIT Naya Raipur organized a plantation drive on the institute campus during World Environment Day. Dr. Lakhindar Murmu, NSS Program Officer, led the team of NSS volunteers who gave a message for environmental protection by planting saplings, watering plants, and running a cleanliness campaign around the institute premises.",
    },

    {
      blog_img: "/assets/gallery/orientation2022/7.jpeg",
      blog_heading: "NSS ORIENTATION PROGRAMME 2022",
      blog_content: `NSS unit of IIIT Naya Raipur organized a first-of-its-kind NSS Orientation program for the BTech batch 2021. The program aimed at educating the new NSS volunteers about how NSS offers excellent opportunities to serve society and personal development. The event had the gracious presence of Dr. Pradeep K. Sinha, Vice Chancellor and Director IIIT Naya Raipur, Dr. Neeta Bajpai, NSS Coordinator (C.G.), Dr. Punya Prasanna Paltani, Dean (Research) IIIT Naya Raipur, Mr. Satyendra Sahu, President Awardee and NSS senior volunteer and Mr. Nikhil Kumar, State awardee and NSS senior volunteer.`,
    },

    {
      blog_img: "/assets/gallery/nic2022/1.jpeg",
      blog_heading: "NIC Raipur 2022",
      blog_content:
        "The NSS unit of IIIT NAYA RAIPUR collaborated with Pt. Ravishankar Shukla University hosted the National Integration Camp at Raipur from 21st to the 27th of May 2022. NSS Volunteers from twelve states across the country participated in the camp, which was a splendid display of the different cultures of India. Many competitions and cultural and sports events were organized in the center, which helped the volunteers learn about our nation’s diverse cultures and foster the spirit of national integration. Dr. Lakhindar Murmu, NSS Program officer for IIIT Naya Raipur, addressed the social media workshop organized during the camp.",
    },
    {
      blog_img: "/assets/gallery/eduforall/1.jpeg",
      blog_heading: "Education For All",
      blog_content:
        "National Service Scheme and Institute Social Responsibility Wing of IIIT Naya Raipur has been running the Education for all campaign in Uparwara village with the help of institute students. The campaign is running under the supervision of the faculties of IIIT Naya Raipur, Dr. Lakhindar Murmu, Dr. Maifuz Ali, and Dr. Mithilesh Kumar Chaube, Pt. RSU student Ms. Pooja Sharma and students of IIIT Naya Raipur Ajeet Ram Verma, Sudhanshu Tripathi, Himanshu Yadav, Govind, Prasad, Kamal Kumar Sinha, Deepraj Choudhary, Anand Singh, along with other NSS active volunteers.",
    },
  ];
  return (
    <>
      <div className="bg-[#e12129] bg-opacity-10 flex flex-col px-4 lg:px-8 py-10 ">
        <div className="container lg:mx-12 text-2xl lg:text-4xl font-semibold uppercase pb-8">
          BLOGS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 xl:gap-y-8 xl:grid-cols-3 place-content-between place-items-stretch">
          {blog.map((blog_details, index) => {
            return <BlogCard key={index} blog_details={blog_details} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
