import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#E5E5E5]">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row lg:justify-around px-4  lg:px-0 items-start gap-x-4 gap-y-6">
            {/* 1st element */}
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col text-2xl lg:text-4xl">
                <p className="text-[#332965]">Join us at</p>
                <p className="text-[#E12129]">IIIT Naya Raipur</p>
              </div>
              <iframe
                className="rounded-lg hidden md:block"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14887.250758493492!2d81.76775380000001!3d21.1200326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1656230571563!5m2!1sen!2sin"
                height="241"
                title="Institute location"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* 2nd element */}
            <div className="flex flex-col gap-y-4 md:gap-y-12">
              <p className="text-2xl lg:text-4xl">Contact Us</p>
              <div className="flex flex-col gap-y-4 text-lg md:text-xl lg:text-2xl">
                <div className="flex flex-row items-center gap-x-3">
                  <img className="w-6" src="/assets/location.svg" alt="" />
                  <p>NSS Office, IIIT Naya Raipur</p>
                </div>
                <div className="flex flex-row items-center gap-x-3">
                  <img className="w-6" src="/assets/email.svg" alt="" />
                  <a href="mailto:nss@iiitnr.edu.in">nss@iiitnr.edu.in</a>
                </div>
                <div className="flex flex-row items-center gap-x-3">
                  <img className="w-6" src="/assets/call.svg" alt="" />
                  <a
                    href="tel:+917712474038"
                    className="md:text-lg lg:text-2xl"
                  >
                    +91-771-2474038
                  </a>
                </div>
              </div>
            </div>
            {/* 3rd element */}
            <div className="flex flex-col gap-y-4 md:gap-y-12 w-full md:w-auto">
              <div className="text-2xl lg:text-4xl">Fill out to reach us</div>
              <div className="flex flex-col gap-y-2 ">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 rounded-lg border border-black"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-black"
                />
                <textarea
                  name=""
                  id=""
                  className="w-full p-3 rounded-lg border border-black"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
                <button className="bg-black text-white py-2 px-12 flex justify-center items-center rounded-lg w-fit -bottom-[20%] right-0">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <hr className="mx-4 mx-auto h-1 bg-[#E12129] my-4" />
          <div className="flex flex-row justify-center items-center gap-x-4">
            <a href="/" rel="noreferrer" target={"_blank"}>
              <img className="w-8" src="/assets/facebook.svg" alt="" />
            </a>

            <a
              href="https://www.instagram.com/nss_iiitnr/"
              rel="noreferrer"
              target={"_blank"}
            >
              <img className="w-8" src="/assets/instagram.svg" alt="" />
            </a>
            <a
              href="https://twitter.com/NSS_IIITNR"
              rel="noreferrer"
              target={"_blank"}
            >
              <img className="w-8" src="/assets/twitter.svg" alt="" />
            </a>
            <a href="/" rel="noreferrer" target={"_blank"}>
              <img className="w-8" src="/assets/linkedin.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
