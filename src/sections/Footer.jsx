import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {
  FooterCompany,
  FooterProduct,
  FooterCitizen,
  FooterBusiness,
} from "../constant/index";

// import { FooterSocials } from '../constant/index';

import {
  FaFacebookSquare,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { BiGlobe } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

import googlePlayImg from "../assets/google-play.svg";
import appStoreImg from "../assets/app-store.svg";

// import { FooterSocials } from "../constant/index";

const Footer = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        color="#0000000"
        className="flex items-center justify-center p-3 xl:w-10 xl:h-10 xl:p-3 md:w-16 md:h-16 rounded-full bg-white"
      />

      <div className="bg-primary h-full w-full pt-24 pb-6 xl:px-40 xl:pb-32">
        <div className="grid grid-cols-1">
          <div className="flex flex-col text-white px-6">
            <h1 className="md:text-2xl">Uber</h1>
            <p className="mt-8">Visit the Visitor</p>

            <span className="mt-8 xl:mb-12">
              Business name - Uber Formosa Co., Ktd. Unified number - 83118125
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-6 xl:gap-12 w-full xl:mt-8">
            {/* FooterCompany */}
            <div>
              <h1 className="text-white mt-6 xl:text-2xl text-xl">company</h1>
              <div className="mt-3 xl:space-y-3">
                {FooterCompany.map((item) => (
                  <li
                    key={item.link}
                    className="list-none text-white hover:text-gray-500"
                  >
                    <a
                      href={item.id}
                      className="flex items-center text-sm w-full py-1"
                    >
                      {item.desc}
                    </a>
                  </li>
                ))}
              </div>
            </div>

            {/* FooterProduct */}
            <div>
              <h1 className="text-white mt-6 xl:text-2xl text-xl">product</h1>
              <div className="mt-3 xl:space-y-3">
                {FooterProduct.map((item) => (
                  <li
                    key={item.link}
                    className="list-none text-white hover:text-gray-500"
                  >
                    <a
                      href={item.id}
                      className="flex items-center text-sm w-full py-1"
                    >
                      {item.desc}
                    </a>
                  </li>
                ))}
              </div>
            </div>

            {/* FooterCitizen */}
            <div>
              <h1 className="text-white mt-6 xl:text-2xl text-2xl">
                global Citizen
              </h1>
              <div className="mt-3 xl:space-y-3">
                {FooterCitizen.map((item) => (
                  <li
                    key={item.link}
                    className="list-none text-white hover:text-gray-500"
                  >
                    <a
                      href={item.id}
                      className="flex items-center text-sm w-full py-1"
                    >
                      {item.desc}
                    </a>
                  </li>
                ))}
              </div>
            </div>

            {/* FooterBusiness */}
            <div>
              <h1 className="text-white mt-6 xl:text-2xl text-2xl">
                Business trip
              </h1>
              <div className="mt-3 xl:space-y-3">
                {FooterBusiness.map((item) => (
                  <li
                    key={item.link}
                    className="list-none text-white hover:text-gray-500"
                  >
                    <a
                      href={item.id}
                      className="flex items-center text-sm w-full py-1"
                    >
                      {item.desc}
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="xl:flex xl:justify-between  md:px-3 mt-28 xl:mt-16 xl:px-0">
          {/* <ul>
                {FooterSocials.map((item) => (
                  <li className="text-white list-none">
                    <img src={item.icon} alt="" className="bg-red-600" />
                  </li>
                ))}
              </ul> */}
          <ul className="flex items-center flex-row xl:gap-26 gap-8 md:gap-20 md:px-3 px-4">
            <li className="text-white px-2 py-3 hover:bg-gray-700/40 rounded-md">
              <a href="" className="">
                <FaFacebookSquare className="xl:h-4 xl:w-6 h-4 w-6 md:h-5 md:w-6" />
              </a>
            </li>
            <li className="text-white px-2 py-3 hover:bg-gray-700/40 rounded-md">
              <a href="" className="">
                <FaXTwitter className="xl:h-4 xl:w-6 h-4 w-6 md:h-5 md:w-6" />
              </a>
            </li>
            <li className="text-white px-2 py-3 hover:bg-gray-700/40 rounded-md">
              <a href="">
                <FaYoutube className="xl:h-4 xl:w-6 h-4 w-6 md:h-5 md:w-6" />
              </a>
            </li>
            <li className="text-white px-2 py-3 hover:bg-gray-700/40 rounded-md">
              <a href="">
                <FaLinkedin className="xl:h-4 xl:w-6 h-4 w-6 md:h-5 md:w-6" />
              </a>
            </li>
            <li className="text-white px-2 py-3 hover:bg-gray-700/40 rounded-md">
              <a href="">
                <FaInstagram className="xl:h-4 xl:w-6 h-4 w-6 md:h-5 md:w-6" />
              </a>
            </li>
          </ul>

          <div className="flex xl:flex-row flex-col xl:gap-6 px-4 mt-12 xl:mt-0 md:px-1">
            <a
              href=""
              className="text-white flex items-center px-3 py-2 hover:bg-gray-700/40 rounded-md"
            >
              <BiGlobe className="mr-2 -rotate-45" />
              English
            </a>

            <a
              href=""
              className="text-white flex items-center  px-3 py-2 hover:bg-gray-700/40 rounded-md"
            >
              <MdLocationOn className="mr-2" />
              Kaoshiung
            </a>
           
          </div>
        </div>

        <div className="flex items-center gap-3 px-5 xl:mt-14 md:px-7 mt-8">
          <span>
            <img src={googlePlayImg} alt="" className="w-32" />
          </span>
          <span>
            <img src={appStoreImg} alt="" className="w-32" />
          </span>
        </div>

        <div className="xl:flex xl:justify-between md:flex-col items-center px-6 md:px-7 xl:mt-16 pb-16">
          <p className="text-white text-xs mt-16">
            <span>© 2024 &nbsp;</span>Uber Technologies Inc.
          </p>

          <div className="mt-12">
            <ul className="flex gap-10">
              <li className="text-white text-xs">
                <a href="">Privacy</a>
              </li>
              <li className="text-white text-xs">
                <a href="">Accessibility</a>
              </li>
              <li className="text-white text-xs">
                <a href="">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
