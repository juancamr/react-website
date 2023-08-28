import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home } from "../../../../common/content";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function EspecialistasComments() {
  const { especialistasCommentsSection } = home;
  const especialistasComments = especialistasCommentsSection.comments;

  return (
    <div id="especialista-comments" className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="EspecialistasSwiper h-[250px]"
      >
        {especialistasComments.map((comment) => (
          <SwiperSlide>
            <div className="bg-blue-500 p-6 rounded-xl text-white ">
              <p className="text-base font-light mb-4">{comment.comment}</p>
              <div className="flex space-x-4">
                <img
                  src={`/${comment.photo}`}
                  alt="photo-profile"
                  className="h-10 w-10 rounded"
                />
                <div className="grid">
                  <p className="text-base font-light">{comment.name}</p>
                  <p className="text-base font-light">{comment.profession}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
