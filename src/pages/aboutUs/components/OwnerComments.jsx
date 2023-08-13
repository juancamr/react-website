import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { aboutUs } from "../../../common/content";

export default function OwnerComments() {
  return (
    <>
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
                md:rounded-none md:mb-0 md:w-[400px] md:h-auto object-cover
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
    </>
  );
}
