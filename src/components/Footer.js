import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container max-w-full py-6 bg-orange-400 mt-12 mx-auto lg:py-10 lg:px-10 text-2xl md:text-4xl lg:text-6xl">
        <div className="max-w-full flex flex-col px-3 lg:space-x-11 lg:flex-row lg:justify-around">
          <div className="flex flex-col text-2xl md:text-4xl lg:text-5xl text-center lg:text-left lg:max-w-sm">
            <h3>
              Join us <br /> at <br /> IIIT Naya Raipur
            </h3>
          </div>
          <div className="flex flex-col text-2xl pt-8 lg:pt-0 md:text-4xl lg:pl-0 lg:ml-0 lg:text-5xl text-center lg:text-left lg:max-w-md">
            <h3 className="pb-2">Contact Us</h3>
            <div className="flex flex-col text-lg justify-center text-center space-y-2 lg:text-left">
              <div className="flex flex-row space-x-2">
                <img
                  src="./assets/location-pin.png"
                  className="h-12 py-2"
                  alt=""
                />
                <p className="text-left">
                  IIIT–Naya Raipur Plot No. 7, Sector 24, Near Purkhoti
                  Muktangan , Atal Nagar – 493661 Chhattisgarh
                </p>
              </div>
              <div className="flex flex-row space-x-2">
                <img src="./assets/envelope.png" className="h-12 py-2" alt="" />
                <p className="pt-2">nss@iiitnr.edu.in</p>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <img src="./assets/phone.png" className="h-12 py-2" alt="" />
                <p className="pb-2">+91-9696800234</p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-sm flex flex-col items-center lg:items-start pt-8 lg:pt-0 space-y-2">
            <input
              type="text"
              class="
              w-7xl
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              placeholder="Full Name"
            />
            <input
              type="email"
              class="
              w-7xl
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              placeholder="Email address"
            />
            <textarea
              type="text"
              rows="4"
              cols="19"
              class="
              w-7xl
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              placeholder="Your message"
            />
            <button className="rounded border text-xl mx-auto px-4 py-1">
              Submit
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
