import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./image-slider.css";
import Slider from "react-slick";

// images for slider
const photos = [
    {
        alt: "product1",
        image: "../images/artistoflifeworkbook.jpeg"
    },
    {
        alt: "product2",
        image: "../images/weeklyresetplanner.jpeg"
    },
    {
        alt: "product3",
        image: "../images/artistoflifewokbookdigital.jpeg"
    },

    {
      alt: "product4",
      image: "../images/weeklyresetplannerdigital.jpeg"
  },

  {
    alt: "product5",
    image: "../images/pastelnotebookset.jpeg"
},
]

// slider animation
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
                  <h2 className="slide-title">{pic.title}</h2>
                  <h3 className="slide-text">{pic.description}</h3>
              </div>
              
              )
          }))}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider