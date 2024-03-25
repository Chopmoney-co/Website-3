import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {
  Cards,
  Cards1,
  Cards2,
  Cards3,
  Cards4,
  Cards5,
  Cards6,
  Cards7,
  Cards8,
  Cards9,
} from "../../../assets";

const Carousel = () => {
  return (
    <div className="my-20">
      <div className="md:mx-auto mt-12 mb-6">
        <p
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="500"
          className="text-white text-center lg:text-left text-2xl"
        >
          Budget in <span className="text-[#FDF70C] italic">styyyle!</span>
        </p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={Cards} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Cards9} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
