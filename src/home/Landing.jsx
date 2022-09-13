import React from "react";

export const Landing = () => {
  return (
    <div className="bg-[#e12129] bg-opacity-10">
      <div className="flex flex-col md:grid md:grid-cols-2 place-content-center place-items-center pt-6 md:pt-20 pb-12 px-6 xl:px-10 gap-x-4 ">
        <div className="flex flex-col space-y-0.5">
          <div className="text-2xl md:text-3xl lg:text-5xl font-bold">
            IIIT Naya Raipur
          </div>
          <div className=" text-base sm:text-xl lg:text-2xl font-semibold">
            Works towards the the nation building
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-justify">
            IIIT Naya Raipur, established by the International Institute of
            Information Technology University Act, 2013 of the Government of
            Chhattisgarh, is a joint venture by Chhattisgarh State Government
            and National Thermal Power Corporation (NTPC). The Institute is
            committed to pursuing excellence in higher education, research, and
            development in Information Technology (IT) and associated
            disciplines. It believes in bestowing knowledge dissemination and
            imparting entrepreneurial skills to the students to enable them to
            address real-world problems. The Institute is constantly achieving
            new heights in areas of research and innovation.
          </div>
        </div>
        <div>
          <div className="rounded-2xl py-2">
            <img
              src={"./assets/images/frontview.jpeg"}
              className="w-full object-contain h-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
