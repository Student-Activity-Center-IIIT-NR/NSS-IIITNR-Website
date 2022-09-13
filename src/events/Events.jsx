import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Event from "./Event";

export const Events = () => {
  const events = [
    // {
    //   event_img1: "./assets/gallery/14.jpeg",
    //   event_img2: "./assets/gallery/4.jpeg",
    //   event_heading: "World Environment Day, 2022",
    //   event_content:
    //     "The NSS unit of IIIT Naya Raipur, in collaboration with ISR, organized a plantation drive in the university campus on the occasion of World Environment Day. Dr. Lakhinder Murmu, NSS Program Officer, led the team of NSS volunteers who gave a message for environmental protection by planting saplings, watering plants & running a cleanliness campaign around the university premises. Dr. Murmu, in his address to the volunteers, emphasized that planting trees is one of the vital measures to minimize the impacts of climate change & save our environment. The volunteers enthusiastically participated in the initiative & planted trees like peepal, almond & neem in the university premises. They also voluntarily took up the responsibility to take care of the planted saplings & ensure that they are watered regularly. The initiative provided the NSS volunteers an opportunity to widen their vision, attitudes & commitments in the area of environmental preservation & enhancement. It created an awareness among the students to improve & take care of the environment they live in. It was an excellent experience for the volunteers to learn the correct way to plant trees & take care of them. They expressed their willingness to work for the betterment of the environment & help in the conservation of flora in all possible ways. The ISR of IIIT Naya Raipur also extended its generous support for the initiative.",
    // },
    {
      event_img1: "./assets/gallery/21.jpeg",
      event_img2: "./assets/gallery/29.jpeg",
      event_heading: "Plantation Drive 2022",
      event_content:
        "In collaboration with the Institute Social Responsibility (ISR) team, the NSS unit of IIIT Naya Raipur organized a plantation drive on the institute campus during World Environment Day. Dr. Lakhinder Murmu, NSS Program Officer, led the team of NSS volunteers who gave a message for environmental protection by planting saplings, watering plants, and running a cleanliness campaign around the institute premises. Dr. Murmu, in his address to the volunteers, emphasized that planting trees is one of the vital measures to minimize the impacts of climate change and save our environment. The volunteers enthusiastically participated in the initiative and planted trees like peepal, almond, and neem on the institute premises. They also voluntarily took up the responsibility to take care of the planted saplings and ensure they were regularly watered. The initiative allowed the NSS volunteers to widen their vision, attitudes, and commitments to environmental preservation and enhancement. It created an awareness among the students to improve and take care of the environment they live in. It was an excellent experience for the volunteers to learn the appropriate way to plant trees and care for them. They expressed their willingness to help conserve flora in all possible ways. The ISR of IIIT Naya Raipur also extended its generous support for the initiative.",
    },
    
    {
      event_img1: "./assets/gallery/30.jpeg",
      event_img2: "./assets/gallery/39.jpeg",
      event_heading: "NSS ORIENTATION PROGRAMME 2022",
      event_content:
        `NSS unit of IIIT Naya Raipur organized a first-of-its-kind NSS Orientation program for the BTech batch 2021. The program aimed at educating the new NSS volunteers about how NSS offers excellent opportunities to serve society and personal development. The event had the gracious presence of Dr. P K Sinha, Director IIIT Naya Raipur, Dr. Neeta Bajpai, NSS Coordinator (C.G.), Dr. Punya Paltani, Dean (Research) IIIT Naya Raipur, Mr. Satyendra Sahu, President Awardee and NSS senior volunteer and Mr. Nikhil Kumar, State awardee and NSS senior volunteer. In his introductory speech, Dr. Lakhinder Murmu, Program Officer of the NSS unit, informed the audience how NSS IIIT Naya Raipur, despite being a young unit, has participated in many NSS initiatives and programs and National camps with full enthusiasm. He also briefly described various industries NSS IIIT Naya Raipur has taken to ensure sanitation and education for the local underprivileged.
        In his address to the new NSS Volunteers of the Institute, Dr. Sinha emphasized the importance of becoming good human beings. He encouraged the students to utilize their knowledge and skills in solving community problems and serving society. Dean (Research) also shared his experiences of being in youth organizations with the students and motivated them to participate in such organizations and events actively. NSS Program Coordinator and ETI of Pt. Ravishankar Shukla University, Dr. Nita Bajpai drew insights from the life of national youth icon Swami Vivekanand to inspire students toward social service. She urged the students to join NSS and participate enthusiastically in its activities, providing an excellent opportunity to serve people and the nation. She also said that NSS Volunteers exercise self-discipline, which distinguishes NSS Volunteers from other students. Senior volunteers Mr. Satyendra Sahu and Mr. Nikhil Kumar also interacted with the NSS volunteers and explained how NSS brings significant changes in one's personality and life. The volunteers also distributed their regular NSS diaries during the event. Finally, NSS volunteer Mr. Gautam Sarawagi expressed a vote of thanks for winding up the event.`,
    },
    
    {
      event_img1: "./assets/gallery/58.jpeg",
      event_img2: "./assets/gallery/56.jpeg",
      event_heading: "NIC Raipur 2022",
      event_content:
        "The NSS unit of IIIT NAYA RAIPUR collaborated with Pt. Ravishankar Shukla University hosted the National Integration Camp at Raipur from 21st to the 27th of May 2022. NSS Volunteers from twelve states across the country participated in the camp, which was a splendid display of the different cultures of India. Many competitions and cultural and sports events were organized in the center, which helped the volunteers learn about our nation’s diverse cultures and foster the spirit of national integration. Dr. Lakhinder Murmu, NSS Program officer for IIIT Naya Raipur, addressed the social media workshop organized during the camp. Navneet Kumar Chaubey, the NSS volunteer from IIIT Naya Raipur, participated in the camp as a part of the host team of Chhattisgarh.",
    },
    {
      event_img1: "./assets/gallery/1.jpeg",
      event_img2: "./assets/gallery/61.jpeg",
      event_heading: "Education For All",
      event_content:
        "National Service Scheme and Institute Social Responsibility Wing of IIIT Naya Raipur has been running the Education for all campaign in Uparwara village with the help of institute students. The campaign is running under the supervision of the faculties of IIIT Naya Raipur, Dr. Lakhinder Murmu, Dr. Maifuz Ali, and Dr. Mithilesh Kumar Chaube, Pt. RSU student Pooja Sharma and students of IIIT Naya Raipur Ajeet Ram Verma, Sudhanshu Tripathi, Himanshu Yadav, Govind, Prasad, Kamal Kumar Sinha, Deepraj Choudhary, Anand Singh, along with other NSS active volunteers. The campaign has been running at Sahu Bhawan near Mata Karma temple at Uparwara village. As a part of the campaign, classes are conducted here every Saturday and Sunday from 4 pm to 6 pm. Under this campaign, about 100 to 150 students from class 5th to 12th are getting benefits.",
    },
  ];
  return (
    <>
      <Navbar display="bg-[#E5E5E5]" />
      <div className="bg-[#e12129] bg-opacity-10">
        <div className="text-4xl md:text-5xl py-3 md:py-4 px-6 md:px-16 font-semibold">
          <span className="text-[#E12129]">Our </span>
          <span className="text-[#332965]">Events</span>
        </div>
        <div className="">
          {events.map((details, index) => {
            return <Event key={index} event_details={details} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
