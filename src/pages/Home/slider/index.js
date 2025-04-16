import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../index.css";
import Slide1 from '../../../assets/images/banner1.jpg';
import Slide2 from '../../../assets/images/banner2.jpg';
import Slide3 from '../../../assets/images/banner3.jpg';
import Slide4 from '../../../assets/images/banner4.webp';
import Button from 'react-bootstrap/Button';

const HomeSlider = () => {
  function SampleLeftArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: "absolute", zIndex:1, left:"25px",   }}
        onClick={onClick}
      />
    );
  }
  function SampleRightArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: "absolute", zIndex:1, right:"25px"  }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "25px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    nextArrow: <SampleRightArrow />,
    prevArrow: <SampleLeftArrow />
  };
  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className='home_slider_Main'>
          <div className='item'>
                <img src={Slide1} className='w-100'/>
            </div>
          <div className='item'>
                <img src={Slide3} className='w-100'/>
            </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
