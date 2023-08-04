import React from "react";
import { Fade, Zoom } from "react-reveal";

export default function Banner({ title, image }) {
  return (
    <div className="relative">
      <img
        className="object-cover h-full sm:h-[400px] md:h-full xl:h-[450px] 2xl:h-[600px] w-full rounded-3xl brightness-75"
        src={image}
        alt="imagee"
      />

      <Zoom>
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <div className="p-6 backdrop-blur-md bg-black/30 rounded-xl text-slate-50">
            <h3 className="font-medium lg:font-bold text-3xl sm:text-5xl lg:text xl:text-6xl 2xl:text-8xl uppercase leading-6">
              {title}
            </h3>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
