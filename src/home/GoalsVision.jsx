import React from "react";

export const GoalsVision = () => {
  return (
    <div className="grid grid-rows-2 lg:grid-rows-3 place-content-center place-items-center md:pt-10 px-6 lg:px-12 pb-10 lg:-space-y-28 bg-[#E5E5E5]">
      {/* Row-1 */}
      <div className="flex flex-row justify-between px-2">
        <div className="flex lg:flex-row flex-col space-y-2">
          <div className="text-3xl lg:text-6xl text-center md:text-start lg:-rotate-90 w-fit lg:-mr-36 font-semibold">
            <span className="text-[#E12129] ">Our</span>{" "}
            <span className="text-[#332965]">Vision</span>
          </div>
          <div className="w-fit lg:w-[40%] text-lg md:text-xl text-start ">
            The vision is to build the youth with the mind and spirit to serve
            the society and work for the social uplift of down-trodden masses of
            our nation as a movement. To identify the needs and problems of the
            community and involve them in problem-solving
          </div>
        </div>
        <div className="hidden lg:block">
          <svg
            width="214"
            height="270"
            viewBox="0 0 214 270"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M107 0L213.521 67.5V202.5L107 270L0.478874 202.5V67.5L107 0Z"
              fill="#332965"
            />
          </svg>
        </div>
      </div>

      {/* Row-2 */}

      <div className="hidden lg:flex lg:flex-col justify-center">
        <svg
          width="214"
          height="270"
          viewBox="0 0 214 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M107 0L213.521 67.5V202.5L107 270L0.478874 202.5V67.5L107 0Z"
            fill="#E12129"
          />
        </svg>
      </div>

      {/* Row-3 */}

      <div className="flex flex-row justify-between pt-4 px-2">
        <div className="hidden lg:block">
          <svg
            width="214"
            height="270"
            viewBox="0 0 214 270"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M107 0L213.521 67.5V202.5L107 270L0.478874 202.5V67.5L107 0Z"
              fill="#332965"
            />
          </svg>
        </div>

        <div className="flex lg:flex-row flex-col-reverse col-span-1 lg:w-[55%]">
          <div className="text-lg md:text-xl lg:-mr-40 lg:mt-[5.25rem] text-start md:text-right">
            The National Service Scheme has been functioning with the motto “NOT
            ME BUT YOU” in view of making the youth inspired in service of the
            people and hence NSS Aims Education through Community Service and
            Community Service through Education. IT aims to develop capacity to
            meet emergencies and natural disasters and practise national
            integration and social harmony
          </div>
          <div className="text-3xl  lg:text-6xl lg:rotate-90 font-semibold whitespace-pre text-start md:text-right lg:text-start">
            <span className="text-[#E12129] ">Our</span>{" "}
            <span className="text-[#332965]">Goals</span>
          </div>
        </div>
      </div>
    </div>
  );
};
