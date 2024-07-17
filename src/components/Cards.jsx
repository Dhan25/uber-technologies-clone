import React from "react";
import uberIcon from "../assets/Uber-icon.svg";
import uberDriveIcon from "../assets/UberDrive-icon.svg";
import { RiArrowRightLine } from "react-icons/ri";

const Cards = () => {
  return (
    <div className="w-full h-fit px-3 py-6 mb-6">
      {/* <div className="flex justify-between items-center bg-white p-6 group cursor-pointer md:w-full">
        <img src={uberIcon} alt="" className="xl:w-[130px] w-full" />
        <div className="flex flex-col ml-5">
          <h1 className="text-2xl font-bold xl:whitespace-nowrap">
            Download the Uber App
          </h1>
          <p className="xl:flex hidden">掃描即可下載 App</p>
        </div>
        <div>
          <RiArrowRightLine className="ml-32 w-7 h-7 group-hover:translate-x-2 transition duration-300 ease-out" />
        </div>
      </div>
      <div className="flex justify-between items-center bg-white p-6 group cursor-pointer md:w-full ">
        <img src={uberDriveIcon} alt="" className="xl:w-[130px] w-full" />
        <div className="flex flex-col ml-5">
          <h1 className="text-2xl font-bold xl:whitespace-nowrap">
            Download the Professional Driving App
          </h1>
          <p className="xl:flex hidden">掃描即可下載 App</p>
        </div>
        <div>
          <RiArrowRightLine className="xl:ml-32 w-7 h-7 group-hover:translate-x-2 transition duration-300 ease-out" />
        </div>
      </div> */}
      <div className="relative px-3">
        <div className=" flex flex-col px-3 xl:flex-row items-center md:w-full gap-8">
          <div className="group border shadow-sm bg-white cursor-pointer xl:w-[550px]">
            <div className="relative flex items-center gap-3 p-5">
              <img
                src={uberIcon}
                alt=""
                className="w-16 h-24 md:w-28 md:h-24 xl:w-40 xl:h-32"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-semibold md:whitespace-nowrap">
                  Download the Uber App
                </h1>
                <p className="xl:flex hidden">掃描即可下載 App</p>
              </div>
              <RiArrowRightLine className="ml-3 md:ml-60 xl:ml-16 w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition duration-300 ease-out" />
            </div>
          </div>

          <div className="group border shadow-sm bg-white cursor-pointer xl:w-[550px]">
            <div className="relative flex items-center gap-3 p-5">
              <img
                src={uberIcon}
                alt=""
                className="w-16 h-24 md:w-28 md:h-24 xl:w-40 xl:h-32"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-semibold md:whitespace-nowrap xl:whitespace-normal">
                  Download the Professional Driving App
                </h1>
                <p className="xl:flex hidden">掃描即可下載 App</p>
              </div>
              <RiArrowRightLine className="md:ml-20 xl:ml-0 w-12 h-12 md:w-10 md:h-10 group-hover:translate-x-2 transition duration-300 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
