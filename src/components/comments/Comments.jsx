import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from "../StarIcon";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Comments.css";

import { EffectCards } from "swiper/modules";

const Comments = ({ comments, color }) => {
  return (
    <div className="w-56 sm:w-96 md:w-80 mx-auto lg:w-80 xl:w-96 2xl:w-[500px]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {comments.map((comment) => {
          const activeStars = comment.rate;
          const grayStars = activeStars < 5 && 5 - activeStars;
          return (
            <div key={comment.name}>
              <SwiperSlide>
                <div
                  className={`p-5 sm:p-8 md:p-8 lg:p-14 space-y-4 backdrop-blur-md
                ${color === "blue" && "bg-blue-900/95"}
                ${color === "orange" && "bg-orange-600/95"}
                ${color === "black" && "bg-gray-900/95"}
                h-full w-full`}
                >
                  <img
                    className="rounded-full w-36 h-36 object-cover mx-auto"
                    src={comment.photo}
                    alt="profile"
                  />
                  <p className="text-center text-base lg:text-xl font-light">
                    "{comment.comment}"
                  </p>
                  <h1 className="text-slate-50 text-center">{comment.name}</h1>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(comment.rate)].map(() => (
                      <StarIcon isActive={true} />
                    ))}
                    {grayStars != 0 &&
                      [...Array(grayStars)].map(() => (
                        <StarIcon isActive={false} />
                      ))}
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Comments;
