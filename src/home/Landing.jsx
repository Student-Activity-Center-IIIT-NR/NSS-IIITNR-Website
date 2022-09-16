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
            Works towards the nation building
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-justify">
            <p>
              Dr. SPM IIIT Naya Raipur, established by the International
              Institute of Information Technology University Act, 2013 of the
              Government of Chhattisgarh, is a joint venture by Chhattisgarh
              State Government and National Thermal Power Corporation (NTPC).
              The institute is committed to pursue excellence in higher
              education, research and development in Information Technology (IT)
              and associated disciplines. It firmly believes in bestowing
              knowledge dissemination and imparting entrepreneurial skills to
              the students to enable them to address real world problems. To
              empower this vision, IIIT-NR fosters state-of-the-art research and
              product development laboratories to carry out inter-disciplinary
              research and product development endeavours.
            </p>
            <p>
              Dr. SPM IIIT-NR's fifty-acres residential campus is located in the
              newly developed smart city of Atal Nagar, approximately 23 kms
              from the city of Raipur. The vibrant lush green campus of IIIT-NR
              is enabled with Wi-Fi connectivity, CCTV surveillance, hi tech
              security measures and excellent amenities for sports and other
              recreational activities. The modern architecture of the buildings
              and the serene environment of the campus fosters an ambience for
              the students for creativity and innovation. The classrooms are
              equipped with state-of-the art technologies for teaching and
              learning.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-2xl py-2">
            <img
              src={"/assets/images/frontview.jpeg"}
              className="w-full object-contain h-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
