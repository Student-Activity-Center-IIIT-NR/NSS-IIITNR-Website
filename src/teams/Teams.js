import React from "react";
import Card from "./Card";

const Teams = () => {
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-12 space-y-8 md:w-1/2 md:space-x-1 md:justify-center">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Our Team
            </h1>
            <p className="max-w-sm text-center text-darkGrayingBlue md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing velit morbi imperdiet ac aliquam pretium. Et dignissim
              in interdum sit nibh quam urna feugiat habitant. Eu cras cras
              laoreet sagittis. Nunc ornare tellus urna mattis non neque aliquam
              orci fringilla. Nunc lectus vitae sed turpis lobortis.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="./assets/Rectangle.png" alt="" />
          </div>
        </div>
      </section>
      {/* <!-- Hero Section --> */}
      <section id="hero">
        {/* <!-- Flex Container --> */}
        <div className="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* <!-- Left Item --> */}
          <div className="flex flex-col mb-8 space-y-8 mt-6 md:w-1/2">
            <h1 className="max-w-lg mx-auto text-4xl font-bold text-center md:text-5xl ">
              Program Officer
            </h1>
            <Card src="./assets/me.jpg" />
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section
        id="senior-vol"
        className="container flex flex-col max-w-7xl items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0"
      >
        <h3 className="max-w-lg text-4xl font-bold text-center md:text-5xl mb-6">
          Senior Volunteer
        </h3>
        <div class="flex flex-row flex-wrap gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section
        id="junior-vol"
        className="container flex flex-col max-w-7xl items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0"
      >
        <h3 className="max-w-lg text-4xl font-bold text-center md:text-5xl mb-6 mt-6">
          Junior Volunteer
        </h3>
        <div class="flex flex-row flex-wrap gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Teams;
