import React from "react";
import Carousel from "react-bootstrap/Carousel"; 
import ExampleCarouselImage from "./ExampleCarouselImage";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";  

const slides = [
  {
    src: "https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner1.jpg",
    subtitle: "Up To 60% Off Now",
    label: "Mid Season Sale 40%",
    description: "Final Clearance: Take 20% off Sale Must-Haves.",
  },
  {
    src: "https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner3.jpg",
    subtitle: "Fall Summer Clearance",
    label: "Enjoy The Season Sale",
    description: "Final Clearance: Take 20% off Sale Must-Haves.",
  },
  {
    src: "https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner4.jpg",
    subtitle: "Fall Summer Clearance",
    label: "Enjoy The Season Sale",
    description: "Final Clearance: Take 20% off Sale Must-Haves.",
  }, 
  {
    src: "https://p.w3layouts.com/demos_new/template_demo/07-12-2021/shoppykart-liberty-demo_Free/1589417704/web/assets/images/banner2.jpg",
    subtitle: "Up To 60% Off Now",
    label: "Enjoy The Season Sale",
    description: "Final Clearance: Take 20% off Sale Must-Haves.",
  },
];

function Hero() {
  return (
    <Carousel className="carousels">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage imageSrc={slide.src} /> 
          <Carousel.Caption className="carousel-caption-center">
            <p id="des">{slide.subtitle}</p>
            <h1>{slide.label}</h1>
            <p>{slide.description}</p>
            <Link to="/shop">
              <button className="btn btn-danger" >
                Shop Now<FaArrowRight style={{ paddingLeft: "5px" }} />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;
