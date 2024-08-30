import React from "react";
import "./Card.css";
import Social from "../assets/smallpng/s.png";
import Arrow from "../assets/smallpng/a.png";
import Email from "../assets/smallpng/e.png";

function Card() {
  return (
    <div class="inline-container">
      <div class="email-container" id="social-container">
        <div id="social">
          <img class="emailimg" src={Social} alt="" />
        </div>
        <h3>Social Media Marketing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitt elit tellu.
        </p>
        <button class="inline-button">➡️ Check it out</button>
      </div>
      <div class="email-container" id="arrow-container">
        <div id="arrow">
          <img class="emailimg" src={Arrow} alt="" />
        </div>
        <h3>Marketing Plan</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitt elit tellu.
        </p>
        <button class="inline-button">➡️ Check it out</button>
      </div>
      <div class="email-container" id="emailing-container">
        <div id="email">
          <img class="emailimg" src={Email} alt="" />
        </div>
        <h3>Email Marketing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitt elit tellu.
        </p>
        <button class="inline-button">➡️ Check it out</button>
      </div>
    </div>
  );
}

export default Card;
