import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ display = "" }) => {
  const activeTab = "underline underline-offset-4";
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className={display}>
        <div className="relative container mx-auto p-2 px-4">
          {/* <!-- Flex container --> */}
          <div className="flex items-center justify-between">
            {/* <!-- logo --> */}
            <div className="pt-2 flex flex-row items-center">
              <img
                src="./assets/nss_logo.png"
                className="w-11 h-11 lg:w-20 lg:h-20"
                alt="NSS Logo"
              />
              <div className="flex flex-row">
                <h1 className="text-5xl font-normal lg:text-8xl">NSS</h1>
                <div className="flex flex-col justify-center">
                  <p className="text-sm lg:text-4xl">IIIT</p>
                  <p className="text-sm lg:text-4xl">Naya Raipur</p>
                </div>
              </div>
            </div>
            {/* <!-- Menu items --> */}
            <div className="hidden lg:flex space-x-6 lg:text-2xl">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeTab : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? activeTab : undefined)}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? activeTab : undefined)}
              >
                Team
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) => (isActive ? activeTab : undefined)}
              >
                Events
              </NavLink>
            </div>
            {/* <!-- Button --> */}

            {/* <!-- Hamburger Icon --> */}
            <button
              id="menu-btn"
              className="block hamburger lg:hidden focus:outline-none"
              onClick={() => {
                let btn = document.getElementById("menu-btn");
                let nav = document.getElementById("menu");

                btn.classList.toggle("open");
                nav.classList.toggle("flex");
                nav.classList.toggle("hidden");
              }}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          {/* <!-- Mobile Menu --> */}
          <div className="lg:hidden">
            <div
              id="menu"
              className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6  bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg"
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeTab : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? activeTab : undefined)}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? activeTab : undefined)}
              >
                Team
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) => (isActive ? activeTab : undefined)}
              >
                Events
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
