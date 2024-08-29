import "./Navl.css";
import logo from "../assets/logo/logo.png";

function Navl() {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
        </div>
        <ul className="navlink">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Case Study</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="hambarger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
}
export default Navl;
