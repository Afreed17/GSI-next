import React, { useState } from "react";
import Header from "../components/Header";
import Discount from "../components/Discount";
import Category from "../components/Category";
import Footer from "../components/Footer";
import SwiperComponent from "../components/SwiperComponent";
import ShopByBrand from "../components/ShopByBrand";
// import ChatBot from "../components/ChatBot";
import Deals from "../components/Deals";

const Home = () => {
  return (
    <div>
      {/* <Cart /> */}
      <Header />
      {/* <ChatBot /> */}
      <SwiperComponent />
      <Category />
      <Deals />
      <Discount />
      <ShopByBrand />
      <Footer />
    </div>
  );
};

export default Home;

