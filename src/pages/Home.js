import React from "react";
import Header from "../components/Header";
import Discount from "../components/Discount";
import Category from "../components/Category";
import Footer from "../components/Footer";
import SwiperComponent from "../components/SwiperComponent";

const Home = () => {
  return (
    <div>
      <Header />
      <SwiperComponent />
      <Category />
      <Discount />
      <Footer />

    </div>
  );
};

export default Home;
