import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperComponent.css';
import { Pagination } from 'swiper/modules';

import slide1Image from '../images/Pagination1.png';
import slide2Image from '../images/Pagination1.png';
import slide3Image from '../images/Pagination1.png';



const SwiperComponent = () => {
  return (
    
    <Swiper pagination={{dynamicBullets: true,}}
        modules={[Pagination]}
        className="mySwiper">
      
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
  );
};

export default SwiperComponent;