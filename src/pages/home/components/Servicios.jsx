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
      name: "limpieza",
      image:
        "https://i.pinimg.com/originals/29/7d/00/297d00acae50a29301b5f8a669056e23.png",
    },
    {
      type: "security",
      name: "seguridad",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/122/518/desktop-wallpaper-modern-companies-need-to-switch-to-cloud-security-guard.jpg",
    },
    {
      type: "diente",
      name: "odontologia",
      image:
        "https://fondosmil.com/fondo/89830.jpg",
    },
    {
      type: "conserjeicon",
      name: "conserje",
      image:
        "https://media.istockphoto.com/id/1038261104/es/foto/productos-de-limpieza-con-fondo-moderno-y-copia-espacio-para-texto-del-anuncio.jpg?s=612x612&w=0&k=20&c=T2NW5zrXEwCEuXu266TMsYMM8uvVt4PGGKnmvXyz3QA=",
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
                      {service.type === "diente" && (
                        <i class="fa-solid fa-tooth"></i>
                      )}
                      {service.type === "conserjeicon" && (
                        <i class="fa-solid fa-person-shelter"></i>
                      )}
                      {service.type === "security" && (
                        <i class="fa-solid fa-shield-halved"></i>
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
