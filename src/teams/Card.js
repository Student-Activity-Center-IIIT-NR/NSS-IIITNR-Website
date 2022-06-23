import React from "react";

const Card = () => {
  return (
    <>
      <div className="container rounded-2xl mx-auto max-w-xs bg-stone-400">
        <div className="mx-auto p-6">
          <img
            src="./assets/lakhindar.jpeg"
            className="block object-cover object-center w-full h-full rounded-lg"
            alt=""
          />
        </div>
        <div className="text-2xl text-center">
          <h3>Dr. Lakhindar Murmu</h3>
        </div>
        <div className="flex flex-row max-w-sm mx-auto items-center justify-center space-x-6 py-6">
          <a
            href="https://www.linkedin.com/in/lakhindar-murmu-2b76111b/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/linkedin.png" className="h-8" alt="" />
          </a>
          <a
            href="https://twitter.com/murmu_kgec25"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./assets/twitter.png" className="h-8" alt="" />
          </a>
          <a href="mailto:lakhindar@iiitnr.edu.in">
            <img src="./assets/envelope.png" className="h-8" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
