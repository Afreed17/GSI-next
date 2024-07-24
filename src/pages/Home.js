import React from "react";
import Header from "../components/Header";
import Discount from "../components/Discount";
import Category from "../components/Category";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Discount />
      <Footer />
    </div>
  );
};

export default Home;
