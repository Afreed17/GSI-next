import React, { useState } from "react";
// import starbuck from "../images/starbuck.png";
// import begopa from "../images/begopa.png";
// import star from "../images/Star.png";
import apple_watch from "../images/apple_watch.png";
import samsung_watch from "../images/samsung_watch.png";
import Activecart from "../images/activecart.png";

const data = [
  {
    id: 1,
    src: apple_watch,
    title: "Loop Silicone Strong Magnetic Watch",
    price: "15.25",
    rating: "4.8 reviews",
  },
  {
    id: 2,
    src: samsung_watch,
    title: "M6 Smart watch IP67 Waterproof",
    price: "12",
    rating: "4.8 reviews",
  },
  {
    id: 3,
    src: apple_watch,
    title: "Loop Silicone Strong Magnetic Watch",
    price: "15.25",
    rating: "4.8 reviews",
  },
  {
    id: 4,
    src: samsung_watch,
    title: "M6 Smart watch IP67 Waterproof",
    price: "12",
    rating: "4.8 reviews",
  },
  {
    id: 5,
    src: apple_watch,
    title: "Loop Silicone Strong Magnetic Watch",
    price: "15.25",
    rating: "4.8 reviews",
  },
  {
    id: 6,
    src: samsung_watch,
    title: "M6 Smart watch IP67 Waterproof",
    price: "12",
    rating: "4.8 reviews",
  },
];

const Discount = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className=" section-head cmpad">
        <h2>Top Watches</h2>
        <div>See All</div>
      </div>
      <div className="cmpad discount">
        <div className=" discount">
          {data.map((item) => {
            return (
              <div key={item.id} className="discount-card">
                <div className="discount-card_flex">
                  <img className="deals-active_cart" src={Activecart} />
                  <img className="discount-img" src={item.src} />
                  <h3>{item.title}</h3>
                  <div className="discount-desc">
                    <div>${item.price}</div>
                    <div className="discount-desc_right"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Discount;
