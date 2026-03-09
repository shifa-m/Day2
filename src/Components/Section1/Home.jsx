import React from "react";
import Navbar from "./Navbar";
import Right from "./Right";
import Left from "./Left";

const Home = () => {
  return (
    <div className="min-h-screen w-full">

      <div className="w-full  px-6 ">
        <Navbar  />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-10 py-8">

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

          {/* Right */}
          <div className="w-full lg:w-1/2">
            <Right />
          </div>

          {/* Left */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <Left />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;