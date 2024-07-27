import React from "react";
import starbuck from "../images/starbuck.png";
import begopa from "../images/begopa.png";
import star from "../images/Star.png";

const data = [
  {
    id: 1,
    src: starbuck,
    title: "Starbuck Borobudur",
    mile: "1.0 km",
    rating: "4.8 reviews",
  },
  {
    id: 2,
    src: begopa,
    title: "Baegopa Suhat",
    mile: "1.0 km",
    rating: "4.8 reviews",
  },
  {
    id: 3,
    src: starbuck,
    title: "Starbuck Borobudur",
    mile: "1.0 km",
    rating: "4.8 reviews",
  },
  {
    id: 4,
    src: begopa,
    title: "Baegopa Suhat",
    mile: "1.0 km",
    rating: "4.8 reviews",
  },
  {
    id: 5,
    src: starbuck,
    title: "Starbuck Borobudur",
    mile: "1.0 km",
    rating: "4.8 reviews",
  },
  {
    id: 6,
    src: begopa,
    title: "Baegopa Suhat",
    mile: "1.0 km",
    rating: "4.8 reviews",
  },
];

const Discount = () => {
  return (
    <>
      <div className=" section-head cmpad">
        <h2>Top Discount</h2>
        <div>See All</div>
      </div>
      <div className="cmpad discount">
        <div className=" discount">
          {data.map((item) => {
            return (
              <div key={item.id} className="discount-card">
                <div className="discount-card_flex">
                  <div className="discount-card_flex">
                    {/* <div className="discount-img"> */}
                    <img className="discount-img" src={item.src} />
                    {/* </div> */}
                    <h3>{item.title}</h3>
                    <div className="discount-desc">
                      <div>{item.mile}</div>
                      <div className="discount-desc_right">
                        <img src={star} />

                        <div>{item.rating}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div>
        <div>
          <img src={begopa} />
        </div>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default Discount;
