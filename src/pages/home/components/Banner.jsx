import React from "react";
import { Fade } from "react-reveal";

export default function Banner() {
  return (
    <div className="relative">
      <img
        className="object-cover h-full w-full rounded-3xl"
        src="assets/images/mockup.jpg"
        alt="http://localhost:3000/assets/images/mockup.jpg"
      />

      <Fade left>
        <div className="p-4 absolute top-[20%] left-[5%] backdrop-blur-md bg-black/30 rounded-xl text-slate-50 w-72">
          <div className="flex space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/66.jpg"
              className="h-16 w-16 lg:h-20 lg:w-20 object-cover rounded-full"
              alt=""
            />
            <h3 className="font-medium lg:font-bold text-base leading-6">
              Necesito mantenimiento a mi refri
            </h3>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className="p-4 lg:p-8 absolute top-[50%] right-[5%] backdrop-blur-md bg-black/30 rounded-xl text-slate-50 w-72">
          <div className="flex space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/40.jpg"
              className="h-16 w-16 lg:h-20 lg:w-20 object-cover rounded-full"
              alt=""
            />
            <h3 className="font-medium xl:font-bold text-base leading-6">
              Claro, estoy en camino, llegar&eacute; en 5 min.
            </h3>
          </div>
        </div>
      </Fade>
    </div>
  );
}
