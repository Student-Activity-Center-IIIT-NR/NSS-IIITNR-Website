import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Event from "./Event";

export const Events = () => {
  const events = [
    {
      event_img1: "./assets/gallery/14.jpeg",
      event_img2: "./assets/gallery/4.jpeg",
      event_heading: "World Environment Day, 2022",
      event_content:
        "The NSS unit of IIIT Naya Raipur, in collaboration with ISR, organized a plantation drive in the university campus on the occasion of World Environment Day. Dr. Lakhinder Murmu, NSS Program Officer, led the team of NSS volunteers who gave a message for environmental protection by planting saplings, watering plants & running a cleanliness campaign around the university premises. Dr. Murmu, in his address to the volunteers, emphasized that planting trees is one of the vital measures to minimize the impacts of climate change & save our environment. The volunteers enthusiastically participated in the initiative & planted trees like peepal, almond & neem in the university premises. They also voluntarily took up the responsibility to take care of the planted saplings & ensure that they are watered regularly. The initiative provided the NSS volunteers an opportunity to widen their vision, attitudes & commitments in the area of environmental preservation & enhancement. It created an awareness among the students to improve & take care of the environment they live in. It was an excellent experience for the volunteers to learn the correct way to plant trees & take care of them. They expressed their willingness to work for the betterment of the environment & help in the conservation of flora in all possible ways. The ISR of IIIT Naya Raipur also extended its generous support for the initiative.",
    },
    {
      event_img1: "./assets/gallery/58.jpeg",
      event_img2: "./assets/gallery/56.jpeg",
      event_heading: "NIC, Raipur 2022",
      event_content:
        "The NSS unit of IIIT-NR collaborated with Pt. Ravishankar Shukla University in hosting the National Integration Camp at Raipur from 21st to 27th May, 2022. NSS Volunteers from 12 states across the country participated in the camp which turned out to be a splendid display of different cultures of India. A lot of competitions, cultural & sport events were organized in the camp which helped the volunteers learn about the diverse cultures of our nation & foster the spirit of national integration. Dr. Lakhinder Murmu, NSS Program officer for IIIT-NR, addressed the social media workshop organized during the camp. Navneet Kumar Chaubey, NSS volunteer from IIIT-NR participated in the Camp as a part of the host team of Chhattisgarh.",
    },
    {
      event_img1: "./assets/gallery/30.jpeg",
      event_img2: "./assets/gallery/39.jpeg",
      event_heading: "NSS ORIENTATION PROGRAMME, 2022",
      event_content:
        "NSS unit of IIIT-Naya Raipur organized a first of its kind NSS Orientation program for the BTech batch 2021.The program aimed at educating the new NSS volunteers about how NSS offers great opportunities to serve the society as well as for personal development. the event had the gracious presence of Dr. P.K. Sinha, Director IIITNR, Dr. Neeta Bajpai, NSS Coordinator (C.G.), Dr. Punya Paltani, Dean (Research) IIITNR, Satyendra Sahu, President Awardee NSS Senior Volunteer & Nikhil Kumar, State awardee Senior NSS Volunteer. Dr. Lakhinder Murmu, Program Officer of NSS unit, in his introductory speech informed the gathering about how NSS IIITNR despite being a young unit has participated in a lot of NSS initiatives, programs & National camps with full enthusiasm. He also gave brief description about various initiatives that NSS IIITNR has taken to ensure sanitation & education for the underprivileged in the locality. Dr. Sinha in his address to the new NSS Volunteers of the institute, emphasized on the importance of becoming good human beings in life. He encouraged the students to utilize their knowledge & skills in solving problems of the community & to serve the society. Dean (Research) also shared his experiences of being in youth organizations, with the students & motivated them to actively participate in such organizations & events. NSS Program Coordinator & E.T.I of Pt. Ravishankar Shukla, Dr. Nita Bajpai drew insights from the life of national youth icon Swami Vivekanand to inspire students towards social service. She urged the students to join NSS & participate enthusiastically in its activities as it provides a great opportunity to serve people & the nation. She also told that NSS Volunteers exercise self-discipline which distinguishes an NSS Volunteers from other students. Senior Volunteer Satyendra Sahu & Nikhil Kumar also interacted with the NSS Volunteers & explained them how NSS brings great changes in one's personality and life. The volunteers were also distributed their regular NSS diaries in the event. Finally, NSS Volunteer Gautam Sarawagi expressed the vote of thanks to wind up the event.",
    },
    {
      event_img1: "./assets/gallery/21.jpeg",
      event_img2: "./assets/gallery/29.jpeg",
      event_heading: "Plantation Drive, 2022",
      event_content:
        "Under the aegis of ‘Azadi Ka Amrit Mahotsav’, the NSS unit of IIIT Naya Raipur, organized a plantation drive in the university campus, celebrating 75 years of India’s Independence. Faculty members, non-teaching staff, NSS Volunteers & Officials of the institute actively participated in the drive during which Neem, Guava, Peepal, Almond & Mango tree seedlings and saplings were planted. The plantation drive, organised in collaboration with ISR was led by Dr. P.K. Sinha, hon’ble director IIITNR & guided by Dr. Punya Paltani, Dean (Research), Dr. Lakhinder Murmu, Program officer of NSS unit, IIITNR & Dr. Mithilesh Chaube. Speaking on the occasion, Dr P.K. Sinha highlighted the importance of planting trees to fight the challenge of global warming and said that the university administration is committed to support all pro-environment initiatives & work towards making the campus greener. He emphasized that planting trees is one of the vital measures to minimize the impacts of climate change & save our environment. The drive created an awareness among the students to improve & take care of the environment they live in. It was an excellent experience for the volunteers who learned about the various steps involved in planting different kinds of trees & taking care of them. They also learned about the benefits these trees add to the environment. They voluntarily took up the responsibility to take care of the planted saplings, & ensure that they are watered and weeded regularly.",
    },
    {
      event_img1: "./assets/gallery/1.jpeg",
      event_img2: "./assets/gallery/61.jpeg",
      event_heading: "Education for all",
      event_content:
        "National Service Scheme and Institute Social Responsibility Wing of IIIT-Naya Raipur has been running the 'Education for all' campaign in Uparwara village with the help of institute students. The campaign is supervised under the faculties of IIIT-Naya Raipur, Dr. Lakhinder Murmu, Dr. Maifuz Ali, and Dr. Mithilesh Kumar Chaube. Pt RSU student Pooja Sharma and students of IIIT-NR Ajeet Ram Verma, Sudhanshu Tripathi, Himanshu Yadav, Govind, Prasad, Kamal Kumar Sinha, Deepraj Choudhary, Anand Singh, along with other NSS active volunteers. The campaign has been running at Sahu Bhawan near Mata Karma temple at Uparwara village. As a part of the campaign, classes are conducted here every Saturday and Sunday from 3 pm to 5 pm. Under this campaign, about 100 to 150 students from class 5th to 12th are getting benefits.",
    },
  ];
  return (
    <>
      <Navbar display="bg-[#E5E5E5]" />
      <div className="">
        <div className="text-4xl md:text-5xl py-3 md:py-5 px-6 md:px-16 font-semibold">
          <span className="text-[#E12129]">Our </span>
          <span className="text-[#332965]">Events</span>
        </div>
        <div className="">
          {events.map((event_details, index) => {
            return <Event key={index} event_details={event_details} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
