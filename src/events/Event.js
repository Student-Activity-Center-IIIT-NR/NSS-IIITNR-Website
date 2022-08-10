import React from "react";

const Event = ({ event_details }) => {
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center mx-4">
          <img src={event_details.event_img} alt="" />
          <h3 className="text-xl md:text-4xl py-2 ld:py-6 text-center">
            {event_details.event_heading}
          </h3>
          <p className="text-sm md:text-xl lg:text-xl lg:py-4 text-justify">
            {event_details.event_content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Event;
