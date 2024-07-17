import React from "react";
import aboutImg from "../assets/about-img.png";

import { FaDotCircle } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const About = () => {
  return (
    <section className="bg-primary px-6 md:px-8 md:pb-12 pt-10 pb-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center xl:px-40 xl:pt-6">
        <div className="grid grid-cols-1 items-center">
          <div className="text-white tracking-wide">
            <h1 className="text-4xl xl:text-5xl font-bold xl:leading-tight xl:max-w-md md:max-w-2xl xl:tracking-wider">
              Go anywhere with the Uber platform
            </h1>
            <p className="mt-4">Make a reservation, get on the bus and go.</p>
          </div>

          <form
            action=""
            className="relative space-y-5 mt-5 grid xl:flex xl:flex-col md:grid-cols-1"
          >
            <input
              id="location"
              type="text"
              placeholder="Enter Location"
              className="py-3 rounded-lg pl-8 text-sm xl:w-96 md:w-1/2 w-full outline-none"
            />
            <span className="absolute -top-1 flex pl-3 items-center">
              <FaDotCircle className="w-3 h-3" />
            </span>
            <span className="absolute flex -top-2 xl:right-44 right-5 md:right-96 pl-3">
              <BsFillSendFill className="w-5 h-5 mr-2"/>
            </span>
            <span className="absolute h-16 bg-white w-[0.2px] left-[17px] top-1.5"></span>
            <input
              id="destination"
              type="text"
              placeholder="Enter Destination"
              className="relative py-3 rounded-lg pl-8 text-sm xl:w-96 md:w-1/2 w-full outline-none"
            />
            <span className="absolute top-[58px] flex pl-3 items-center">
              <MdCheckBoxOutlineBlank className="w-4 h-4" />
            </span>
            <button className="w-36 mt-5 rounded-xl text-primary bg-white px-6 py-3">
              Check price
            </button>
          </form>
        </div>
        <div className="mt-0 md:mt-5 md:flexCenter">
          <img
            src={aboutImg}
            alt=""
            className="rounded w-full md:rounded-xl md:w-full object-cover object-center xl:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
