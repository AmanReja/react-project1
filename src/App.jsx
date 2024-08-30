import "./App.css";
import MiddleContent from "./components/MiddleContent";
import Navl from "./components/Navl";
import ScrollReveal from "scrollreveal";

function App() {
  ScrollReveal({
    reset: false,

    delay: 500,
    distance: "60px",
    duration: 2500,
  });
  return (
    <>
      <Navl />
      <MiddleContent></MiddleContent>
    </>
  );
}
export default App;
