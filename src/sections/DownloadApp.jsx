import React from "react";
import Cards from "../components/Cards";
const DownloadApp = () => {
  return (
    <section className="bg-gray-100">
      <div className="xl:ml-40 flex flex-col pt-16"> 
        <h1 className="text-primary md:text-3xl text-2xl xl:text-4xl font-bold md:px-6 md:pb-6 px-6">Using App is Easier</h1>
        <div>
            <Cards />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
