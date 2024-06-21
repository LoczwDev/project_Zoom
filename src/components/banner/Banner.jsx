import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import images from "../../constants/images/images";

export const Banner = () => {
  const options = {
    responsiveClass: true,
    center: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <section className="w-full">
      <OwlCarousel
        {...options}
        className="owl-theme mx-auto"
        loop
        nav
        margin={15}
        items={4}
      >
        <img src={images.Banner1} alt="" />
        <img src={images.Banner2} alt="" />
        <img src={images.Banner3} alt="" />
        <img src={images.Banner4} alt="" />
        <img src={images.Banner5} alt="" />
        <img src={images.Banner6} alt="" />
      </OwlCarousel>
    </section>
  );
};
