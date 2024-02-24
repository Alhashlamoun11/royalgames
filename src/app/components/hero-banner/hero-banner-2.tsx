"use client";
import React from "react";
import banner_bg from "@/assets/img/slider/banner_bg.jpg";

const HeroBannerTwo = ({title='Welcome',supTitle='video games online'}:any) => {
  return (
    <section className="banner__area banner__padding">
      <div
        className="banner__bg tg-jarallax"
        style={{ backgroundImage: `url(${banner_bg.src})` }}
      ></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="banner__content slider__content text-center">
              <h2 className="title wow bounceInLeft" data-wow-delay=".2s">
                {title}
              </h2>
              <p className="wow bounceInLeft" data-wow-delay=".4s">
                {supTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerTwo;
