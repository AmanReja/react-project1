import "./App.css";
import MiddleContent from "./components/MiddleContent";
import Navl from "./components/Navl";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";
import SubmiddleContainer from "./components/SubmiddleContainer";
import Solution from "./components/Solution";

function App() {
  useEffect(() => {
    ScrollReveal({ reset: true });
    ScrollReveal().reveal(".hedline-container h1", {
      duration: 2500,
      origin: "top",
      distance: "60px",
      delay: 400,
    });
    ScrollReveal().reveal(".aman", {
      duration: 500,
      origin: "left",
      distance: "60px",
      delay: 400,
    });
  }, []);
  return (
    <>
      <Navl />
      <MiddleContent></MiddleContent>
      <SubmiddleContainer></SubmiddleContainer>
      <Solution></Solution>
    </>
  );
}
export default App;
