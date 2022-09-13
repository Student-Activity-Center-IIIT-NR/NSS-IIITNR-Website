import React from "react";

const Event = ({ event_details }) => {
  return (
    <>
      <div className="container mx-auto py-4 md:mt-4">
        <div className="flex flex-col items-center justify-center mx-4">
        <h3 className="text-xl md:text-4xl py-2 lg:py-4 text-center">
            {event_details.event_heading}
          </h3>
          <div className="flex flex-col md:flex-row items-between gap-x-2 gap-y-4 overflow-hidden">
            <img src={event_details.event_img1} className="object-fit rounded md:w-1/2" alt="" />
            <img src={event_details.event_img2} className="object-fit rounded md:w-1/2" alt="" />
          </div>
          <p className="text-sm md:text-lg lg:text-lg py-2 lg:py-2 text-justify">
            {event_details.event_content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Event;
