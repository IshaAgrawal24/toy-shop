import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { caraouselList } from "../../../../Assets/HeaderCarousel";
import { ChevronRight, ChevronLeft } from "react-feather";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();
  const timer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => clearTimeout(timer.current);
  }, [timer.current]);

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(2);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex === 2) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="header-main">
      <div className="header-container">
        <div
          className="leftArrow carousel-arrow header__caraousel-btn-color"
          onClick={() => previousSlide()}
        >
          <ChevronLeft />
        </div>
        <div
          className="rightArrow carousel-arrow header__caraousel-btn-color"
          onClick={() => nextSlide()}
        >
          <ChevronRight />
        </div>
        {caraouselList.map((item, index) => {
          return (
            <div className="carousel-main" key={item.title}>
              {currentIndex === index ? (
                <>
                  <div
                    className="carousel-content"
                    // style={{
                    //   transform:
                    //     "translateX(-100px) translateY(0px) translateZ(0px)",
                    //   opacity: 0,
                    // }}
                  >
                    <p>{item.description}</p>
                    <h1>{item.heading}</h1>
                    <button onClick={() => navigate("/shop")}>Shop Now</button>
                  </div>
                  <div className="carousel-img">
                    <div className="main-img">{item.mainImg}</div>
                    <div className="sub-img">{item.subImg}</div>
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
