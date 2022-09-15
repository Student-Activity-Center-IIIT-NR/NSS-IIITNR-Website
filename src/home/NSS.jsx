import React from "react";

export const NSS = () => {
  return (
    <div className="flex flex-col-reverse md:space-y-0 md:grid md:grid-cols-2 place-content-center place-items-center gap-x-4 pt-10 md:pt-20 px-6 xl:px-10 pb-10 bg-[#332965] bg-opacity-10 ">
      <div className="h-full">
        <img
          src="/assets/images/institute_birdeye.jpeg"
          className="h-full object-fit rounded-xl"
          alt=""
        />
      </div>
      <br className=" md:hidden"></br>
      <div className="flex flex-col space-y-1 sm:justify-end sm:items-end">
        <div className="text-2xl lg:text-4xl font-bold">NSS at IIIT Naya Raipur</div>
        <div className="text-lg lg:text-2xl font-semibold">
        <q>Not Me But You</q>
        </div>
        <div className="text-md lg:text-lg text-justify">
        The NSS wing of IIIT Naya Raipur was initiated in 2019 with a vision of creating community awareness among the students and developing a sense of social and civic responsibility among themselves. It encourages its volunteers to utilize their knowledge in generating practical solutions to individual and community problems. Since the beginning of the program in the institute, the volunteers have actively and enthusiastically participated in many social activities to serve the community and extend national integration and Social harmony. The volunteers kept in mind the motto of <strong><em>Not Me But You</em></strong>. They have undertaken many initiatives towards conserving the environment, educating the underprivileged sections of society, and observing cleanliness and hygiene in the locality.
        </div>
      </div>
    </div>
  );
};
