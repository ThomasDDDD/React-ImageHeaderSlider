import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../utils/AppContext";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "./ImageSliderZoom.css";

function ImageSliderZoom() {
  const { movieArr, setMovieArr, movieArrThump, setMovieArrThump, firstToLast, lastToFirst } = useContext(AppContext);
  const [turnClass, setTurnClass] = useState("");

  function handleClick(type) {
    if (type === "next") {
      setTurnClass("next");
      setMovieArr(firstToLast(movieArr));
      setMovieArrThump(firstToLast(movieArrThump));
      setTimeout(() => setTurnClass(""), 1000);
    } else if (type === "prev") {
      setTurnClass("prev");
      setMovieArr(lastToFirst(movieArr));
      setMovieArrThump(lastToFirst(movieArrThump));
      setTimeout(() => setTurnClass(""), 1000);
    }
  }

  return (
    <>
      <div className="sliderBox">
        <div className={`Karusell ${turnClass}`}>
          <div className="list">
            {movieArr.map((movie) => {
              return (
                <div className="item" key={movie.id}>
                  <img className="itemImg" src={movie.imgUrl} />
                  <div className="content">
                    <div className="regisseur">{movie.regisseur}</div>
                    <div className="title">{movie.title}</div>
                    <div className="genre">{movie.genre}</div>
                    <div className="descr">{movie.descr}</div>
                    <div className="buttons">
                      <NavLink to={`Film/${movie.title}`} className="karusellButton">
                        See More
                      </NavLink>
                      <NavLink className="karusellButton">SUBSCRIBE</NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="thumpnails">
            {movieArrThump?.map((movie) => {
              return (
                <div className="item" key={movie.id * 13}>
                  <img className="thumpnailImg" src={movie.imgUrl}></img>
                  <div className="content">
                    <div className="title">{movie.title}</div>
                    <div className="genre">{movie.genre}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="arrows">
            <button onClick={() => handleClick("prev")} className="arrowButton" id="prev">
              <FaArrowLeft />
            </button>
            <button onClick={() => handleClick("next")} className="arrowButton" id="next">
              <FaArrowRight />
            </button>
          </div>

          <div className="time"></div>
        </div>
      </div>
    </>
  );
}

export default ImageSliderZoom;
