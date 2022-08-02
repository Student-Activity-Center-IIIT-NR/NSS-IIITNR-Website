import React from "react";
import Navbar from "../components/Navbar";
import { GoalsVision } from "./GoalsVision";
import { Landing } from "./Landing";
import { NSS } from "./NSS";
import Blogs from "./Blogs/Blogs";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar display="bg-home h-96 lg:h-screen" />
      <Landing />
      <GoalsVision />
      <NSS />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
