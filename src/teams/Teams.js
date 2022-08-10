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
          <p className="max-w-sm text-center text-darkGrayingBlue md:text-left">
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
      <div className="flex flex-row flex-wrap gap-4 my-10">
        <Card
          image={"./assets/team/sudhanshu.png"}
          name={"Anand Singh"}
          linkedin={"https://www.linkedin.com/in/sudhanshu1309/"}
          twitter={"https://twitter.com/sudhanshutweets"}
          mail={"mailto:sudhanshu20101@iiitnr.edu.in"}
        />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        <h3 className="text-3xl text-center md:text-5xl mb mt-6">
          Cell Secretaries
        </h3>
        <div className="flex flex-row flex-wrap gap-4 my-10">
          <Card
            image={"./assets/team/sudhanshu.png"}
            name={"Ajeet Ram Verma"}
            linkedin={"https://www.linkedin.com/in/sudhanshu1309/"}
            twitter={"https://twitter.com/sudhanshutweets"}
            mail={"mailto:sudhanshu20101@iiitnr.edu.in"}
            dept={"Rural Transformation through Education"}
          />
          <Card
            image={"./assets/team/sudhanshu.png"}
            name={"Navneet Chaubey"}
            linkedin={"https://www.linkedin.com/in/sudhanshu1309/"}
            twitter={"https://twitter.com/sudhanshutweets"}
            mail={"mailto:sudhanshu20101@iiitnr.edu.in"}
            dept="Events"
          />
          <Card
            image={"./assets/team/sudhanshu.png"}
            name={"Paridhi Chauhan"}
            linkedin={"https://www.linkedin.com/in/sudhanshu1309/"}
            twitter={"https://twitter.com/sudhanshutweets"}
            mail={"mailto:sudhanshu20101@iiitnr.edu.in"}
            dept="Content"
          />
          <Card
            image={"./assets/team/sudhanshu.png"}
            name={"Ganesh Prajapati"}
            linkedin={"https://www.linkedin.com/in/sudhanshu1309/"}
            twitter={"https://twitter.com/sudhanshutweets"}
            mail={"mailto:sudhanshu20101@iiitnr.edu.in"}
            dept="Design"
          />
          <Card
            image={"./assets/team/sudhanshu.png"}
            name={"Saumya Singh"}
            linkedin={"https://www.linkedin.com/in/sudhanshu1309/"}
            twitter={"https://twitter.com/sudhanshutweets"}
            mail={"mailto:sudhanshu20101@iiitnr.edu.in"}
            dept="Women Empowerment"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Teams;
