import React from "react";

const Card = ({ image, name, linkedin, twitter, mail, dept }) => {
  return (
    <>
      <div className="container rounded-2xl mx-auto max-w-xs bg-[#E5E5E5]">
        <div className="mx-auto p-6">
          <img
            src={image}
            className="block object-cover object-center w-full h-72 rounded-lg"
            alt=""
          />
        </div>
        <div className="text-2xl text-center">
          <h3>{name}</h3>
        </div>
        {dept && (
          <div className="text-md text-center">
            <h3>{dept}</h3>
          </div>
        )}
        <div className="flex flex-row max-w-sm mx-auto items-center justify-center space-x-6 py-6">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img src="./assets/linkedin.svg" className="h-8" alt="" />
          </a>
          <a href={twitter} target="_blank" rel="noreferrer">
            <img src="./assets/twitter.svg" className="h-8" alt="" />
          </a>
          <a href={mail}>
            <img src="./assets/email.svg" className="h-8" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
