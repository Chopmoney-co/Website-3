import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  TransparentImg,
  TransparentImg2,
} from "../../../assets";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <div className="relative">
        <div className="absolute top-[0px] right-[970px] hidden lg:block z-50">
          <img className="h-[200px]" src={TransparentImg} alt="" />
        </div>
        <div className="absolute top-[0px] left-[970px] hidden lg:block z-50">
          <img className="h-[200px]" src={TransparentImg2} alt="" />
        </div>
      </div>
      <div className="mx-auto slider-container">
        <Slider {...settings}>
          <div>
            <img src={Cards} alt="" />
          </div>
          <div>
            <img src={Cards1} alt="" />
          </div>
          <div>
            <img src={Cards2} alt="" />
          </div>
          <div>
            <img src={Cards3} alt="" />
          </div>
          <div>
            <img src={Cards4} alt="" />
          </div>
          <div>
            <img src={Cards5} alt="" />
          </div>
          <div>
            <img src={Cards6} alt="" />
          </div>
          <div>
            <img src={Cards7} alt="" />
          </div>
          <div>
            <img src={Cards8} alt="" />
          </div>
          <div>
            <img src={Cards9} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
