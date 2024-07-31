import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import electronics from "../images/electronics.png";
import grocery from "../images/grocery.png";
import supply from "../images/supply.png";

const data = [
  {
    id: 1,
    src: electronics,
    title: "Electronics",
  },
  {
    id: 2,
    src: supply,
    title: "Supplies",
  },
  {
    id: 3,
    src: electronics,
    title: "Electronics",
  },
  {
    id: 4,
    src: supply,
    title: "Supplies",
  },
  {
    id: 5,
    src: electronics,
    title: "Electronics",
  },
  {
    id: 6,
    src: supply,
    title: "Supplies",
  },
];

const Category = () => {
  return (
    <>
      <div className="section-head cmpad">
        <h2>Top Categories</h2>
        <div>See All</div>
      </div>
      <div className="category cat-swiper">
        <Swiper
        
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            992: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 4,
            },
            576: {
              slidesPerView: 3,
            },
            425: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 2,
            },
          }}
          navigation
          loop={true}
          autoplay={true}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <div className="swiper-content">
                  <img src={item?.src} />
                  <h4>{item?.title}</h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Category;
