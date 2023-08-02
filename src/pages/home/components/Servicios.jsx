import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Bounce } from "react-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Servicios.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const services = [
    {
      type: "clean",
      name: "Limpieza",
    },
    {
      type: "fumigar",
      name: "Fumigacion",
    },
    {
      type: "fumigar",
      name: "Fumigacion",
    },
    {
      type: "fumigar",
      name: "Fumigacion",
    },
    {
      type: "fumigar",
      name: "Fumigacion",
    },
  ];

  return (
    <div className="servicios">
      <Bounce right>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={20}
          // pagination={{
          //   type: "fraction",
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {services.map((service, id) => (
            <SwiperSlide>
              <div
                id={id}
                className="h-full w-full bg-gradient-to-tr from-orange-500 via-slate-500 to-blue-500 rounded-3xl flex items-center"
              >
                <div className="w-full">
                  <div className="text-6xl mb-4">
                    {service.type === "clean" && (
                      <i class="fa-solid fa-broom"></i>
                    )}
                    {service.type === "wash" && (
                      <i class="fa-solid fa-hand-sparkles"></i>
                    )}
                    {service.type === "fumigar" && (
                      <i class="fa-solid fa-biohazard"></i>
                    )}
                    {service.type === "teach" && (
                      <i class="fa-solid fa-chalkboard-user"></i>
                    )}
                  </div>
                  <div className="p-4">
                    <h1 className="text-white uppercase text-xl ">{service.name}</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Bounce>
    </div>
  );
}
