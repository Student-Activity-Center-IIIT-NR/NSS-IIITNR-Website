import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Event from "./Event";

export const Events = () => {
  const events = [
    {
      event_img1: "/assets/gallery/bloodDC2022/6.jpeg",
      event_img2: "/assets/gallery/bloodDC2022/7.jpeg",
      event_heading: "Blood Donation Camp 2022",
      event_content: `The NSS unit of IIITNR, in collaboration with SAC IIITNR, organized a blood donation camp on 8th November 2022 in the college auditorium. The camp was organized under the supervision of an expert medical team from AIIMS Raipur.
        The blood donation camp began with the inaugural program at 9:30 a.m. Dr. Lakhinder Murmu, Program Officer, NSS IIITNR, welcomed the team of doctors and medical staff from AIIMS Raipur and expressed gratitude towards them and all the generous blood donors as well as the NSS volunteers who organized the camp. In his address, Dr. Manoj Kumar Majumdar, President SAC-IIITNR, said that donating blood is one of the most novel contributions towards serving humanity. He emphasized, "Once a blood donor is always a lifesaver.” He also motivated the students, faculty, and staff members of the institute to actively take part in the camp and register in large numbers to donate blood.
        During the Blood donation camp, a total number of 53 donors donated blood. Certificates of appreciation and refreshments were given to all the donors as a token of gratitude. The medical team from AIIMS was overwhelmed with the participation of all the donors & the support and hospitality of the NSS volunteers and institute management. They appreciated the kindness, generosity, and awareness of all the donors and iterated their commitment to support the institute in all such social initiatives.`,
    },
    {
      event_img1: "/assets/gallery/run4unity2022/6.jpeg",
      event_img2: "/assets/gallery/run4unity2022/1.jpeg",
      event_heading: "Run For Unity 2022",
      event_content:
        "The NSS unit of IIITNR, in collaboration with SAC IIITNR, organized “Run For Unity” on 31 October 2022 to commemorate the birth anniversary of the first Home Minister and the ‘Iron Man’ of India, Sardar Vallabhbhai Patel. Hundreds of students and several teaching and non-teaching staff of the College enthusiastically participated in it. The event started at 4 PM in the College with an address by Dr. P.K. Sinha, hon’ble director, IIITNR. In his short speech, Dr. Sinha remembered Sardar Patel’s legacy and commended his tenuous efforts in integrating over 565 princely states into the Union of India with his astute administrative abilities and iron will. He remarked that Sardar Patel was one of the founding fathers of India who was solely responsible for the unification of Modern India, which earned him the title the ‘Bismarck of India’. He reiterated that the young citizens and the staff of the College must ensure that the unity of the nation remains intact at all costs. On this occasion, Dr. Lakhinder Murmu, Program Officer, NSS IIITNR, administered all the students the oath to protect the integrity of India. After the pledge, the unity march proceeded from the academic building and proceeded through the residential areas of the institute to the main gate & back to the academic building. The enthusiastic students & faculty chanted the slogans of unity which filled the atmosphere with patriotism & brotherhood.",
    },
    {
      event_img1: "/assets/gallery/plantation2022/6.jpeg",
      event_img2: "/assets/gallery/plantation2022/7.jpeg",
      event_heading: "Plantation Drive 2022",
      event_content:
        "In collaboration with the Institute Social Responsibility (ISR) team, the NSS unit of IIIT Naya Raipur organized a plantation drive on the institute campus during World Environment Day. Dr. Lakhindar Murmu, NSS Program Officer, led the team of NSS volunteers who gave a message for environmental protection by planting saplings, watering plants, and running a cleanliness campaign around the institute premises. Dr. Murmu, in his address to the volunteers, emphasized that planting trees is one of the vital measures to minimize the impacts of climate change and save our environment. The volunteers enthusiastically participated in the initiative and planted trees like peepal, almond, and neem on the institute premises. They also voluntarily took up the responsibility to take care of the planted saplings and ensure they were regularly watered. The initiative allowed the NSS volunteers to widen their vision, attitudes, and commitments to environmental preservation and enhancement. It created an awareness among the students to improve and take care of the environment they live in. It was an excellent experience for the volunteers to learn the appropriate way to plant trees and care for them. They expressed their willingness to help conserve flora in all possible ways. The ISR of IIIT Naya Raipur also extended its generous support for the initiative.",
    },

    {
      event_img1: "/assets/gallery/orientation2022/1.jpeg",
      event_img2: "/assets/gallery/orientation2022/2.jpeg",
      event_heading: "NSS ORIENTATION PROGRAMME 2022",
      event_content: `NSS unit of IIIT Naya Raipur organized a first-of-its-kind NSS Orientation program for the BTech batch 2021. The program aimed at educating the new NSS volunteers about how NSS offers excellent opportunities to serve society and personal development. The event had the gracious presence of Dr. Pradeep K. Sinha, Vice Chancellor and Director IIIT Naya Raipur, Dr. Neeta Bajpai, NSS Coordinator (C.G.), Dr. Punya Prasanna Paltani, Dean (Research) IIIT Naya Raipur, Mr. Satyendra Sahu, President Awardee and NSS senior volunteer and Mr. Nikhil Kumar, State awardee and NSS senior volunteer. In his introductory speech, Dr. Lakhindar Murmu, Program Officer of the NSS unit, informed the audience how NSS IIIT Naya Raipur, despite being a young unit, has participated in many NSS initiatives and programs and National camps with full enthusiasm. He also briefly described various industries NSS IIIT Naya Raipur has taken to ensure sanitation and education for the local underprivileged.
        In his address to the new NSS Volunteers of the Institute, Dr. Sinha emphasized the importance of becoming good human beings. He encouraged the students to utilize their knowledge and skills in solving community problems and serving society. Dean (Research) also shared his experiences of being in youth organizations with the students and motivated them to participate in such organizations and events actively. NSS Program Coordinator and ETI of Pt. Ravishankar Shukla University, Dr. Nita Bajpai drew insights from the life of national youth icon Swami Vivekanand to inspire students toward social service. She urged the students to join NSS and participate enthusiastically in its activities, providing an excellent opportunity to serve people and the nation. She also said that NSS Volunteers exercise self-discipline, which distinguishes NSS Volunteers from other students. Senior volunteers Mr. Satyendra Sahu and Mr. Nikhil Kumar also interacted with the NSS volunteers and explained how NSS brings significant changes in one's personality and life. The volunteers also distributed their regular NSS diaries during the event. Finally, NSS volunteer Mr. Gautam Sarawagi expressed a vote of thanks for winding up the event.`,
    },

    {
      event_img1: "/assets/gallery/nic2022/4.jpeg",
      event_img2: "/assets/gallery/nic2022/3.jpeg",
      event_heading: "NIC Raipur 2022",
      event_content:
        "The NSS unit of IIIT NAYA RAIPUR collaborated with Pt. Ravishankar Shukla University hosted the National Integration Camp at Raipur from 21st to the 27th of May 2022. NSS Volunteers from twelve states across the country participated in the camp, which was a splendid display of the different cultures of India. Many competitions and cultural and sports events were organized in the center, which helped the volunteers learn about our nation’s diverse cultures and foster the spirit of national integration. Dr. Lakhindar Murmu, NSS Program officer for IIIT Naya Raipur, addressed the social media workshop organized during the camp. Mr. Navneet Kumar Chaubey, the NSS volunteer from IIIT Naya Raipur, participated in the camp as a part of the host team of Chhattisgarh.",
    },
    {
      event_img1: "/assets/gallery/eduforall/3.jpeg",
      event_img2: "/assets/gallery/eduforall/4.jpeg",
      event_heading: "Education For All",
      event_content:
        "National Service Scheme and Institute Social Responsibility Wing of IIIT Naya Raipur has been running the Education for all campaign in Uparwara village with the help of institute students. The campaign is running under the supervision of the faculties of IIIT Naya Raipur, Dr. Lakhindar Murmu, Dr. Maifuz Ali, and Dr. Mithilesh Kumar Chaube, Pt. RSU student Ms. Pooja Sharma and students of IIIT Naya Raipur Ajeet Ram Verma, Sudhanshu Tripathi, Himanshu Yadav, Govind, Prasad, Kamal Kumar Sinha, Deepraj Choudhary, Anand Singh, along with other NSS active volunteers. The campaign has been running at Sahu Bhawan near Mata Karma temple at Uparwara village. As a part of the campaign, classes are conducted here every Saturday and Sunday from 4 pm to 6 pm. Under this campaign, about 100 to 150 students from class 5th to 12th are getting benefits.",
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
