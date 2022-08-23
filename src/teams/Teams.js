import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "./Card";

function Teams() {
  return (
    <>
      <Navbar display="bg-[#E5E5E5]" />
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-12 space-y-8 md:w-1/2 md:space-x-1 md:justify-center">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Our Team
          </h1>
          <p className="max-w-sm text-justify lg:text-center text-darkGrayingBlue md:text-left">
            Our team works under the leadership of NSS Program Officer Lakhindar
            Murmu. Under his guidance the team undertakes a lot of initiatives &
            organises programs aimed at serving the society and nation & towards
            conservation of nature. The NSS unit also has a taskforce of
            Volunteers to organise & oversee the events.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="./assets/Rectangle.png" alt="" />
        </div>
      </div>
      <div className="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-8 space-y-8 mt-6">
          <h1 className="text-3xl text-center md:text-5xl ">Program Officer</h1>
          <Card
            image={"./assets/team/lakhindar.jpeg"}
            name={"Dr. Lakhindar Murmu"}
            linkedin={"https://www.linkedin.com/in/lakhindar-murmu-2b76111b/"}
            twitter={"https://twitter.com/murmu_kgec25"}
            mail={"mailto:lakhindar@iiitnr.edu.in"}
          />
        </div>
      </div>

      {/* General Secretary */}
      <div className="text-center">
        <h3 className="text-3xl text-center md:text-5xl mb-6">
          General Secretary
        </h3>
        <div className="flex flex-row">
          <Card
            image={"./assets/team/sudhanshu.png"}
            name={"Sudhanshu Tripathi"}
            linkedin={"https://www.linkedin.com/in/sudhanshu1309/"}
            twitter={"https://twitter.com/sudhanshutweets"}
            mail={"mailto:sudhanshu20101@iiitnr.edu.in"}
          />
        </div>
      </div>
      <h3 className="text-3xl text-center md:text-5xl mb-6 mt-6">
        Additional Secretary
      </h3>
      <div className="flex flex-row gap-4 my-10">
        <Card
          image={"./assets/team/anand.png"}
          name={"Anand Singh"}
          linkedin={"https://www.linkedin.com/in/anand-singh-16b245225/"}
          twitter={"https://twitter.com/Aksingh_55"}
          mail={"mailto:anand20101@iiitnr.edu.in"}
        />
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center">
        <h3 className="text-3xl text-center md:text-5xl mb mt-6">
          Cell Secretaries
        </h3>
        <div className="flex flex-row flex-wrap gap-4 my-10">
          <Card
            image={"./assets/team/ajeet.jpeg"}
            name={"Ajeet Ram Verma"}
            linkedin={"https://www.linkedin.com/in/ajeet-ram-verma-953605244/"}
            twitter={"https://twitter.com/ajeet_321"}
            mail={"mailto:ajeet20101@iiitnr.edu.in"}
            dept={"Rural Transformation through Education"}
          />
          <Card
            image={"./assets/team/navneet.jpeg"}
            name={"Navneet Chaubey"}
            linkedin={
              "https://www.linkedin.com/in/navneet-kumar-chaubey-3702b9244/"
            }
            twitter={"https://twitter.com/navneetchaubey_"}
            mail={"mailto:navneet21100@iiitnr.edu.in"}
            dept="Events"
          />
          <Card
            image={"./assets/team/paridhi.jpeg"}
            name={"Paridhi Chauhan"}
            linkedin={"https://www.linkedin.com/in/paridhi-chauhan-924bb9223/"}
            twitter={"https://twitter.com"}
            mail={"mailto:paridhi21100@iiitnr.edu.in"}
            dept="Content"
          />
          <Card
            image={"./assets/team/ganesh.jpeg"}
            name={"Ganesh Prajapati"}
            linkedin={"https://www.linkedin.com/in/ganesh-prajapati-25577222b/"}
            twitter={"https://twitter.com/GaneshP33886198"}
            mail={"mailto:ganesh21101@iiitnr.edu.in"}
            dept="Design"
          />
          <Card
            image={"./assets/team/saumya.jpeg"}
            name={"Saumya Singh"}
            linkedin={"https://www.linkedin.com/in/saumya-singh-5237b6203/"}
            twitter={"https://twitter.com/saumyas83388904"}
            mail={"mailto:saumya20101@iiitnr.edu.in"}
            dept="Women Empowerment"
          />
          <Card
            image={"./assets/team/rony.jpeg"}
            name={"Rony Joseph"}
            linkedin={"https://www.linkedin.com/in/rony-joseph-0619bb205"}
            twitter={"https://twitter.com/RonyJos09575199"}
            mail={"mailto:rony20100@iiitnr.edu.in"}
            dept="Web Management"
          />
          <Card
            image={"./assets/team/gautam.jpeg"}
            name={"Gautam Sarawagi"}
            linkedin={"https://www.linkedin.com/in/gautam-sarawagi-64b1b4227/"}
            twitter={"https://twitter.com/gautamsarawagi_"}
            mail={"mailto:gautam21100@iiitnr.edu.in"}
            dept="Social Media"
          />
          <Card
            image={"./assets/team/akash.jpeg"}
            name={"Akash Trivedi"}
            linkedin={"https://www.linkedin.com/in/akash-trivedi-bb07ba235"}
            twitter={"https://twitter.com/akashtr22810150"}
            mail={"mailto:akasht21100@iiitnr.edu.in"}
            dept="Social Media"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Teams;
