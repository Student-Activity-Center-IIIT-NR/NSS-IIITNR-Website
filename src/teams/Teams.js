import React from "react";

const Teams = () => {
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
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
    </>
  );
};

export default Teams;
