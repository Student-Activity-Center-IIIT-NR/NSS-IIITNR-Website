import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <>
      <Navbar display="bg-[#E5E5E5]" />
      <div className="bg-[#e12129] bg-opacity-10">
        <h1 className="container px-5 py-4 mx-auto lg:pt-8 lg:px-16 text-2xl md:text-3xl lg:text-4xl">
          Our Memories
        </h1>
        <section className="container mx-auto py-4 mt-4 rounded">
          <div className="flex flex-row flex-wrap mx-2 gap-x-4 gap-y-6 items-start justify-center text-center pb-8">
            <GalleryCard
              link={"/gallery/bloodDC2022"}
              src="/assets/gallery/bloodDC2022/3.jpeg"
              annot={"Blood Donation Camp 2022"}
            />
            <GalleryCard
              link={"/gallery/run4unity2022"}
              src="/assets/gallery/run4unity2022/1.jpeg"
              annot={"Run For Unity 2022"}
            />
            <GalleryCard
              link={"/gallery/poshanmaah2022"}
              src="/assets/gallery/poshanmaah2022/1.jpeg"
              annot={"Poshan Maah 2022"}
            />
            <GalleryCard
              link={"/gallery/plantation2022"}
              src="/assets/gallery/plantation2022/1.jpeg"
              annot={"Plantation Drive 2022"}
            />
            <GalleryCard
              link={"/gallery/independence2022"}
              src="/assets/gallery/independence2022/3.jpeg"
              annot={"Independence Day at adopted village Uparwara 2022"}
            />
            <GalleryCard
              link={"/gallery/orientation2022"}
              src="/assets/gallery/orientation2022/1.jpeg"
              annot={"Orientation 2022"}
            />
            <GalleryCard
              link={"/gallery/nic2022"}
              src="/assets/gallery/nic2022/1.jpeg"
              annot={"NIC 2022"}
            />
            <GalleryCard
              link={"/gallery/eduforall"}
              src="/assets/gallery/eduforall/1.jpeg"
              annot={"Education For All"}
            />
            <GalleryCard
              link={"/gallery/plantation2021"}
              src="/assets/gallery/plantation2021/1.jpeg"
              annot={"Plantation Drive 2021"}
            />
            <GalleryCard
              link={"/gallery/netajijayanti"}
              src="/assets/gallery/netajijayanti/3.jpeg"
              annot={"Subhas Chandra Bose Jayanti"}
            />
            <GalleryCard
              link={"/gallery/fitindia"}
              src="/assets/gallery/fitindia/1.jpeg"
              annot={"Fit India 2020"}
            />
            <GalleryCard
              link={"/gallery/gandhijayanti"}
              src="/assets/gallery/gandhijayanti/1.jpeg"
              annot={"Gandhi Jayanti"}
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
