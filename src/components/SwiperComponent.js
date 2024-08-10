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
        <SwiperSlide>
          <img src={slide1Image} alt="Slide 1" className="slide-image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2Image} alt="Slide 2" className="slide-image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3Image} alt="Slide 3" className="slide-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;