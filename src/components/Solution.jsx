import React from "react";
import "./Solution.css";
import solution1 from "../assets/smallpng/s1.png";
import solution2 from "../assets/smallpng/s2.png";

function Solution() {
  return (
    <div className="solution-png">
      <div className="container">
        <img src={solution1} alt="" />
        <img src={solution2} alt="" />
      </div>
      <div>
        <h1 class="solution">Our solutions</h1>
      </div>
    </div>
  );
}

export default Solution;
