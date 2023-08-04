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
      type: "teach",
      name: "Maestria",
      image:
        "https://wallpapers.com/images/hd/teacher-background-idqts901515fz8d8.jpg",
    },
    {
      type: "clean",
      name: "Limpieza",
      image:
        "https://i.pinimg.com/originals/29/7d/00/297d00acae50a29301b5f8a669056e23.png",
    },
    {
      type: "wash",
      name: "Lavado",
      image:
        "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      type: "fumigar",
      name: "Fumigacion",
      image:
        "https://irp-cdn.multiscreensite.com/4847e1c8/MOBILE/jpg/1960461-img1.w1024.jpg",
    },
  ];

  return (
    <div className="servicios">
      <Bounce right>
        <Swiper
          slidesPerView={window.innerWidth < 800 ? 2 : 3}
          centeredSlides={true}
          spaceBetween={window.innerWidth < 800 ? 20 : 60}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {services.map((service, id) => (
            <SwiperSlide>
              <div
                key={id}
                id={id}
                className="h-full w-full
                rounded-3xl flex items-center relative"
              >
                <img
                  className="
                w-full h-full object-cover rounded-3xl brightness-50
                "
                  src={service.image}
                  alt="service-image"
                />
                {/* bg-gradient-to-tr from-orange-500 via-slate-400 to-blue-500 */}
                <div className="w-full h-full absolute flex items-center justify-center top-0 left-0">
                  <div>
                    <div className="text-6xl md:text-7xl lg:text-9xl mb-4">
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
                      <h1 className="text-white uppercase text-xl ">
                        {service.name}
                      </h1>
                    </div>
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
