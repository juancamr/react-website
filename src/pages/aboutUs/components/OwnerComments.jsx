import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { aboutUs } from "../../../common/content";

export default function OwnerComments() {
  return (
    <div className="xl:w-1/2 lg:w-3/4 mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {aboutUs.ownersComments.map((comment, index) => (
          <SwiperSlide>
            <div
              className="px-14 text-center
              md:text-left
              md:flex
              md:w-[800px] mx-auto
            "
            >
              <img
                className="h-20 w-20 rounded-full mx-auto mb-4
                md:rounded-xl md:mb-0 md:w-[200px] lg:w-[250px] md:h-auto object-cover
                bg-blue-500
                "
                src={comment.photo}
                alt={"owner-photo"}
              />

              <div className="md:ml-8">
                <p
                  className="text-gray-800 text-base font-light mb-3
                "
                >
                  "{comment.comment}"
                </p>
                <h4
                  className="text-2xl font-bold mb-2 text-gray-800
              "
                >
                  {comment.name}
                </h4>
                <p className="text-gray-800 uppercase text-base font-normal">
                  {comment.cargo}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
