import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./image-slider.css";
import Slider from "react-slick";

const photos = [
    {
        alt: "white flowers inside glass jar",
        image: "../images/2.jpg"
    },
    {
        alt: "flowers",
        image: "../images/3.jpg"
    },
    {
        alt: "wild flowers display",
        image: "../images/4.jpg"
    },
]


class ImageSlider extends Component {
  render() {
    const settings = {
    //   dots: true,
      fade: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      className: "slider"
    };
    return (
      <div>
        <Slider {...settings}>
          {photos.map((pic=>{
              return (<div>
                  <img src={pic.image} alt={pic.alt} />
              </div>
              )
          }))}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider