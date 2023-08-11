import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Servicios.css";
import { Pagination, Navigation } from "swiper/modules";
import Container from "../../../components/Container";
import CustomH2 from "../../../components/custom/CustomH2";
import CustomButton from "../../../components/custom/CustomButton";
import { WEBSITE_URL } from "../../../common/constants";
import CustomP from "../../../components/custom/CustomP";
import { home } from "../../../common/content";

export default function Servicios() {
  const { services } = home;
  const { serviceList, title, paragraph, button } = services;
  return (
    <Container>
      <div
        className="py-10
    "
      >
        <CustomH2
          styles="text-center text-orange-500 mb-3
      "
        >
          {title}
        </CustomH2>
        {/* <Container> */}
        <CustomP
          styles="text-center
        md:mb-4
        lg:mb-5
        xl:mb-8
        "
        >
          {paragraph}
        </CustomP>
        <div className="servicios mb-5">
          <Swiper
            slidesPerView={window.innerWidth < 800 ? 2 : 3}
            centeredSlides={window.innerHeight < 800 ? true : false}
            spaceBetween={window.innerWidth < 800 ? 20 : 60}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {serviceList.map((service, id) => (
              <SwiperSlide>
                <div
                  className="
                  h-full
                  w-ful
                  flex
                  items-center
                  justify-center
              "
                >
                  {id % 2 === 0 ? (
                    <Form name={service.name} icon={service.icon} first />
                  ) : (
                    <Form name={service.name} icon={service.icon} second />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center">
          <CustomButton
            styles={"text-white"}
            isLink
            link={`${WEBSITE_URL}/app/reservar`}
            orange
          >
            {button}
          </CustomButton>
        </div>
        {/* </Container> */}
      </div>
    </Container>
  );
}

function Form({ first, second, third, icon, name }) {
  return (
    <div className="relative">
      <img
        src={`assets/images/update/${
          first ? "first_form" : second ? "second_form" : "third_form"
        }.webp`}
        alt="form"
      />
      <div
        className="absolute
      top-0
      left-0
      h-full
      w-full
      flex
      items-center
      justify-center
      "
      >
        <div className="w-full">
          <i
            className={`${icon} text-[2.7rem] lg:text-6xl xl:text-8xl mb-2
            lg:mb-4
            xl:mb-6
            `}
          ></i>
          <CustomP styles="uppercase text-[1rem] lg:text-[1.5rem] xl:text-[2rem]">
            {name}
          </CustomP>
        </div>
      </div>
    </div>
  );
}
