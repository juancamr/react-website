import React from "react";
import Counter from "../../../components/animations/Counter";

export default function Banner() {
  return (
    <div className="relative">
      <img
        className="object-cover h-full 2xl:h-[800px] w-full rounded-3xl"
        src="assets/images/tools_animated.jpg"
        alt="mockup"
      />

        <div className="p-5 absolute top-[20%] left-[5%] backdrop-blur-md bg-white/40 dark:bg-black/30 rounded-xl text-gray-800 dark:text-slate-50 ">
          <div className="flex space-x-4 items-center">
            <div className="text-3xl md:text-5xl lg:text-7xl text-gray-800 dark:text-white flex items-center h-full">
              <i class="fa-solid fa-money-check-dollar"></i>
            </div>
            <h3 className="font-medium lg:font-bold text-xl lg:text-3xl leading-6">
              + <Counter start={1200} end={2400} /> soles
            </h3>
          </div>
        </div>
        <div className="p-5 lg:p-8 absolute top-[50%] right-[5%] backdrop-blur-md bg-white/40 dark:bg-black/30 rounded-xl text-gray-800 dark:text-slate-50">
          <div className="flex space-x-5 items-center">
            <div className="text-3xl md:text-5xl lg:text-7xl text-gray-800 dark:text-white flex items-center">
              <i class="fa-regular fa-calendar-check"></i>
            </div>
            <h3 className="font-medium lg:font-bold text-xl lg:text-3xl leading-6">
              Cuando quieras
            </h3>
          </div>
        </div>
    </div>
  );
}
