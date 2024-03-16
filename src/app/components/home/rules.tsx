"use client";
import Image from "next/image";
import React,{useContext, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import gallery_data from "@/data/gallery-data";
import ImageLightBox from "../common/image-lightbox";
import { AppContext } from "@/context/app-context";

// slider setting
const slider_setting = {
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 30,
  freeMode: false,
  observer: true,
  observeParents: true,
  breakpoints: {
    1920: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
};
const HomeRules = (video:any) => {
  console.log("video")
  console.log(video.video)
  const {handleMouseEnter,handleMouseLeave} = useContext(AppContext);
   // photoIndex
   const [photoIndex, setPhotoIndex] = useState(0);
   // image open state
   const [open, setOpen] = useState(false);
   // images
   const images = gallery_data.map(item => item.img.src);
   // handleImagePopup
   const handleImagePopup = (index:number) => {
    setPhotoIndex(index)
    setOpen(true)
   }
  return (
    <>
    <section className="gallery__area fix section-pb-130">
      <br></br>
    <center><h1 className="title wow bounceInLeft" data-wow-delay=".2s">
      الشروحات
      </h1></center>
      
      <br></br>
      <div className="gallery__slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 col-md-11">
              <Swiper
                {...slider_setting}
                modules={[Navigation, Scrollbar]}
                className="swiper-container gallery-active"
                centeredSlides={true}
                observer={true}
                observeParents={true}
              >
                {video.video&&video.video.length>0?video.video.map((item:any,i:any) => (
                  <SwiperSlide key={item._id}>
                    <div className="gallery__item">
                      <div className="gallery__thumb">
                        {/* <a
                          data-cursor="-theme"
                          data-cursor-text="View <br> Image"
                          className="popup-image cursor-pointer"
                          title={item.title}
                          // onClick={() => handleImagePopup(i)}
                          // onMouseEnter={handleMouseEnter} 
                          // onMouseLeave={handleMouseLeave} */}
                        {/* > */}
<iframe width="100%" height="550px"
src="https://www.youtube.com/embed/Tn6-PIqc4UM?autoplay=0&mute=0&controls=2">
</iframe>
                        {/* </a> */}
                      </div>
                      {/* <div className="gallery__content">
                        <h3 className="title">{item.title}</h3>
                        <span className="rate">rate {item.rate}</span>
                      </div> */}
                    </div>
                  </SwiperSlide>
                )):<center><h4>لا يوجد</h4></center>}
                <div className="swiper-scrollbar"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* image light box start */}
    <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
    {/* image light box end */}
    </>
  );
};

export default HomeRules;
