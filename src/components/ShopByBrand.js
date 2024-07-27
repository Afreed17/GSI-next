import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../components/ShopByBrand.css';
import { Pagination, Navigation } from 'swiper/modules';

import Apple from '../images/ShopByBrand/Apple.png';
import Samsung from '../images/ShopByBrand/Samsung.png';
import Dell from '../images/ShopByBrand/Dell.png';
import HP from '../images/ShopByBrand/Hp.png';
import LG from '../images/ShopByBrand/LG.png';
import Oppo from '../images/ShopByBrand/Oppo.png';
import Voltas from '../images/ShopByBrand/Voltas.png';
import Godrej from '../images/ShopByBrand/Godrej.png';

const brands = [
  { name: 'Apple', logo: Apple },
  { name: 'Samsung', logo: Samsung },
  { name: 'Godrej', logo: Godrej },
  { name: 'HP', logo: HP },
  { name: 'Oppo', logo: Oppo },
  { name: 'Dell', logo: Dell },
  { name: 'Voltas', logo: Voltas },
  { name: 'LG', logo: LG },
];

const ShopByBrand = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="shop-by-brand">
      <div className="shop-by-brand-header">
        <h2>Shop by Brand</h2>
        <a className='view-all' href="#">View All</a>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          // type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-slide">
              <img src={brand.logo} alt={brand.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopByBrand;