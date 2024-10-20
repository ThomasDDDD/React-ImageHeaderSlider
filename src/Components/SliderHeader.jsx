import { NavLink } from "react-router-dom";
import "./ImageSliderZoom.css";

function SliderHeader() {
  return (
    <>
      <header className="sliderHeader">
        <nav className="sliderNav">
          <NavLink to="/" className="sliderA">
            Home
          </NavLink>
          <NavLink to="/" className="sliderA">
            Contact
          </NavLink>
          <NavLink to="/" className="sliderA">
            Info
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default SliderHeader;
