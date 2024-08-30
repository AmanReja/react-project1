import React from "react";
import "./MiddleContent.css";
import banner from "../assets/banner/banner.png";
import ScrollReveal from "scrollreveal";

function MiddleContent() {
  ScrollReveal({
    reset: false,

    delay: 500,
    distance: "60px",
    duration: 2500,
  });

  ScrollReveal().reveal(".aman", {
    delay: 500,
    origin: "left",
  });
  // ScrollReveal().reveal(".hedline-container h1", {
  //   delay: 500,
  //   origin: "up",
  // });

  return (
    <div class="banner-container">
      <img class="aman" src={banner} alt="" />
      <div class="hedline-container">
        <h1>Best social marketing agency</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam rerum
          provident ea porro explicabo ipsa alias praesentium tempore minima,
        </p>
        <button class="contact">Get started</button>
        <div class="stardiv">★★★★★</div>
        <p>Rated 5/5 - from over 450 reviews</p>
      </div>
    </div>
  );
}

export default MiddleContent;
