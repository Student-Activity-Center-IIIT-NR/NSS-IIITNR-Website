import React from "react";
import Navbar from "./Navbar";
import Card from "../teams/Card";

const Developers = () => {
  return (
    <>
      <Navbar display="bg-[#E5E5E5]" />
      <div className="container mx-auto my-6">
        <div className="text-center text-2xl md:text3xl lg:text-4xl">
          Meet the developers
        </div>
        <div className="flex flex-row flex-wrap gap-4 my-10">
          <Card
            image={"/assets/team/sudhanshu.png"}
            name={"Mr. Sudhanshu Tripathi"}
            linkedin={"https://www.linkedin.com/in/sudhanshu1309/"}
            twitter={"https://twitter.com/sudhanshutweets"}
            mail={"mailto:sudhanshu20101@iiitnr.edu.in"}
            dept="Developer and Coordinator"
          />
          <Card
            image={"/assets/team/rony.jpeg"}
            name={"Mr. Rony Joseph"}
            linkedin={"https://www.linkedin.com/in/rony-joseph-0619bb205"}
            twitter={"https://twitter.com/RonyJos09575199"}
            mail={"mailto:rony20100@iiitnr.edu.in"}
            dept="Developer"
          />
          <Card
            image={"/assets/team/ganesh.jpeg"}
            name={"Mr. Ganesh Prajapati"}
            linkedin={"https://www.linkedin.com/in/ganesh-prajapati-25577222b/"}
            twitter={"https://twitter.com/GaneshP33886198"}
            mail={"mailto:ganesh21101@iiitnr.edu.in"}
            dept="Designer"
          />
        </div>
      </div>
    </>
  );
};

export default Developers;
