import React, { useState, useEffect } from "react";
import { HiBars2 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { HiGlobeAlt } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { NavData, NavLinks, DropDownLinks } from "../constant/index";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);

  useEffect(() => {
    const handleDropDownMenu = () => {
      setDropDownMenu(false);
    };
    document.addEventListener("mousedown", handleDropDownMenu);
  });

  return (
    <nav className="w-full bg-primary px-6 py-3 md:px-8 xl:px-32 xl:py-4">
      <div className="flexBetween">
        {/* Nav menu for larger screen */}
        <div className="flexBetween gap-5">
          <a href="">
            <span className="text-white text-lg md:text-xl">Uber</span>
          </a>

          <ul className="items-center space-x-5 xl:flex hidden">
            {NavLinks.map((item) => (
              <li key={item.link} className="text-white">
                <a href={item.id} className="text-sm font-semibold btn">
                  {item.desc}
                </a>
              </li>
            ))}
          </ul>

          {/* Dropdown menu */}
          <div className="relative flex-col items-center xl:flex hidden">
            <button
              onClick={() => setDropDownMenu((prev) => !prev)}
              className="flex items-center text-white gap-3 hover:bg-gray-700/50 px-3 py-2 rounded-full active:bg-gray-500"
            >
              <span className="font-semibold text-sm ">Introduction</span>
              {!dropDownMenu ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>

            {dropDownMenu && (
              <div className="bg-white absolute top-12 left-4 w-[300px] rounded overflow-hidden">
                {DropDownLinks.map((item) => (
                  <li key={item.link} className="text-primary list-none">
                    <a
                      href={item.id}
                      className="flex items-center text-sm font-semibold w-full px-3 py-2 hover:bg-gray-100 text-gray-400 hover:text-primary"
                    >
                      {item.desc}
                    </a>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flexBetween gap-3">
          <div className="items-center hidden xl:flex">
            <a href="" className="btn flex items-center text-white text-sm">
              <HiGlobeAlt className="mr-2 w-5 h-5 -rotate-45" />
              ZH-TW
            </a>

            
            <a href="" className="btn text-white text-sm">
              Help
            </a>
          </div>
          <a href="" className="btn text-white text-sm">
            log in
          </a>
          <button className="text-sm bg-white px-4 py-2 rounded-full hover:bg-opacity-80 duration-300">
            register
          </button>

          {/* Nav Button */}
          <div className="xl:hidden md:block">
            {!navMenu ? (
              <HiBars2
                className="text-white w-6 h-6 cursor-pointer"
                onClick={() => setNavMenu(true)}
              />
            ) : (
              <IoClose
                className="text-white w-6 h-6 cursor-pointer bg-gray-600 rounded-full"
                onClick={() => setNavMenu(false)}
              />
            )}
          </div>

          {/* Nav Mobile */}
          <ul
            className={`xl:hidden md:block overflow-hidden absolute bg-white top-16 w-full h-full p-3 px-6 left-0 space-y-5 z-10 transition-transform duration-300  ${
              navMenu ? "translate-y-0" : "-translate-x-full"
            }`}
          >
            {NavData.map((item) => (
              <li key={item.link} className="mt-3">
                <a href={item.id} className="text-[32px] font-semibold ">
                  {item.desc}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
