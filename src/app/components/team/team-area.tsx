"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import team_data from "@/data/team-data";
import bg from '@/assets/img/bg/team_bg.jpg';
import TextAnimation from "../common/text-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Pagination } from "reactstrap";

const TeamArea = () => {
  
  // slider setting
  const slider_setting = {
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
      '1500': {
          slidesPerView: 5,
      },
      '1200': {
          slidesPerView: 4,
      },
      '992': {
          slidesPerView: 4,
      },
      '768': {
          slidesPerView: 3,
      },
      '576': {
          slidesPerView: 2,
      },
      '0': {
          slidesPerView: 1.5,
          centeredSlides: true,
          centeredSlidesBounds: true,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    }
  };
  
    
  return (
    <section
      className="team__area team-bg section-pt-130 section-pb-100"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="our team member" />
              <h3 className="title">ACTIVE TEAM MEMBERS</h3>
            </div>
          </div>
        </div>
        <Swiper {...slider_setting} modules={[Navigation,Pagination]} className="swiper-container streamers-active">
          
          {team_data.map((t, i) => (
                  <SwiperSlide key={i}>
            <div
              data-wow-delay={`.${i + 1}s`}
            >
              <div className="team__item">
                <div className="team__thumb">
                  <Link href="/team-details">
                    <Image src={t.img} alt="img" style={{width:'100%',height:'auto'}} />
                  </Link>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <Link href="/team-details">{t.title}</Link>
                  </h4>
                  <span className="designation">{t.subtitle}</span>
                </div>
              </div>
            </div>
            </SwiperSlide>
          ))}

        </Swiper>
        <div className="streamers__pagination">
            <div className="slider-button-prev streamers__pagination-arrow"><i className="fas fa-angle-left"></i></div>
            <div className="swiper-pagination streamers__pagination-dots"></div>
            <div className="slider-button-next streamers__pagination-arrow"><i className="fas fa-angle-right"></i></div>
        </div>

      </div>
    </section>
  );
};

export default TeamArea;
