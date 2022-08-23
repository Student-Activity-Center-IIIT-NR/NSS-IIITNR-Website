import React from "react";

export const NSS = () => {
  return (
    <div className="flex flex-col-reverse md:space-y-0 md:grid md:grid-cols-2 place-content-center place-items-center gap-x-4 pt-10 md:pt-20 px-6 xl:px-10 pb-10 bg-[#332965] bg-opacity-10 ">
      <div className="">
        <img
          src="./assets/images/1.jpg"
          className="scale-75 md:scale-y-75  md:scale-x-90 lg:scale-100 w-[588px] h-[362px] aspect-auto rounded-3xl drop-shadow-md shadow-md shadow-black "
          alt=""
        />
      </div>
      <br className=" md:hidden"></br>
      <div className="flex flex-col space-y-1 sm:justify-end sm:items-end">
        <div className="text-2xl lg:text-4xl font-bold">NSS at IIIT-NR</div>
        <div className="text-lg lg:text-2xl font-semibold">
          Work towards the the nation building
        </div>
        <div className="text-md lg:text-lg ">
          The NSS wing of IIITNR was initiated in the year 2019 with a vision of
          creating community awareness among the students & developing among
          themselves a sense of social & civic responsibility. It encourages its
          volunteers to utilise their knowledge in generating practical
          solutions to individual & community problems. Since the beginning of
          the program in the institute, the volunteers have actively &
          enthusiastically participated in a lot of social activities aimed at
          serving the community & extending national integration & social
          harmony. The volunteers keeping in mind the motto of “not me but you”
          have undertaken a lot of initiatives towards conservation of
          environment, educating the underprivileged sections of the society &
          observing cleanliness & hygiene in the locality.
        </div>
      </div>
    </div>
  );
};
