import React from "react";
import homeImg from "../assets/home-img.png";

const Home = () => {
  return (
    <section>
      <div className="mx-auto flex md:px-8 md:py-16 py-6 px-6 xl:flex-row items-center xl:ml-40 xl:gap-4 flex-col-reverse">
        <div className="xl:max-w-2xl mb-10 md:mb-0">
          <img src={homeImg} alt="" className="rounded-lg xl:w-10/12 " />
        </div>
        <div className="xl:flex-grow xl:max-w-md flex flex-col md:items-start md:text-left">
          <h1 className="xl:text-5xl font-bold leading-snug md:text-left text-4xl">
            Drive to take orders anytime, anywhere and earn the fees you
            need
          </h1>
          <p className="xl:mt-8 md:mt-5 mt-3 text-gray-700 md:max-w-xl">
            <span>
              Earn fees through delivery and/or rides at your own pace.
            </span>
            <span>
              You can use your own vehicle or choose to rent a car through Uber.
            </span>
          </p>
          <div className="flex flex-col items-start mt-6 md:mb-10 md:flex-row pb-6">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-80 duration-300">
              start using
            </button>

            <a href="" className="relative group md:ml-5 text-gray-500 mt-4">
              Already have an account? <span>log in</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
