import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperComponent.css";
import { Autoplay, Pagination } from "swiper/modules";

import slide1Image from "../images/Pagination1.png";
import slide2Image from "../images/Pagination1.png";
import slide3Image from "../images/Pagination1.png";

const SwiperComponent = () => {
  return (
    <div className="cmpad">
      <Swiper
        // pagination={{ dynamicBullets: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={slide1Image} alt="Slide 1" className="slide-image" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={slide2Image} alt="Slide 2" className="slide-image" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={slide3Image} alt="Slide 2" className="slide-image" />
        </SwiperSlide>

        {/* <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
    <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
    <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
    <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
    <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
    <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
