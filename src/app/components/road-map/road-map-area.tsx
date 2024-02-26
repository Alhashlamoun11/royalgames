"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import bg from "@/assets/img/bg/roadmap_bg.jpg";
import road_map from "@/assets/img/others/roadmap.png";
import road_map_step from "@/assets/img/others/roadmap_img.png";
import useTextAnimation from "@/hooks/use-text-animation";
import SvgIconCom from "../common/svg-icon-anim";
import shape from '@/assets/img/icons/shape.svg';
import VideoPopup from "../common/video-popup";

// road map lists
type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    active: true,
    title: "مميزات البرنامج",
    lists: [
      { active: true, text: "كشف جميع انواع الهاكات في الوقت الفعلي" },
      { active: true, text: "منع اي محاولات اختراق او تلاعب" },
      { active: true, text: "تشفير كامل لجميع البيانات" },
      { active: true, text: "تحديثات مستمرة لمواكبة احدث تقنيات الغش" },
    ],
  },
  {
    id: 2,
    active: false,
    title: "",
    lists: [
      { active: true, text: "واجهة سهلة الاستخدام" },
      { active: true, text: "رفع تلقائي للملف على سيرفراتنا" },
      { active: true, text: "ذكاء اصطناعي يسهل عملية فحص الملف" },
      { active: true, text: "تسجيل الدخول عن طريق الديسكورد" },
    ],
  },
  // {
  //   id: 3,
  //   active: false,
  //   title: "season 3",
  //   lists: [
  //     { active: false, text: "Battle Practice Mode" },
  //     { active: false, text: "iOS Open Beta" },
  //     { active: false, text: "Land Creation & Building" },
  //     { active: false, text: "Land Creation & Building" },
  //   ],
  // },
];

const RoadMapArea = () => {
  const [isView, setIsView] = useState<boolean>(false);
  useTextAnimation(isView);

  const handleInViewChange = (inView: boolean) => {
    if (inView) {
      setIsView(true);
    }
  };

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
    <section
      className="roadMap__area roadMap-bg section-pt-150 section-pb-150"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="roadMap__inner">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="roadMap__content">
                    <h2 className="title">RGAC</h2>
                    <p>
                      البرنامج مخصص لحماية اللاعبين من الغشاشين وضمان بيئة لعب عادلة وممتعة للجميع
                    </p>
                                               <div className="about__content-btns">
                              {/* <Link href="/contact" className="tg-btn-3 tg-svg">
                                 <SvgIconCom icon={shape} id="svg-6" />
                                 <span>read more</span>
                              </Link> */}
                                                  <Link href="/contact" className="tg-btn-1 -btn-yellow">
                      <span>تحميل</span>
                    </Link>

                              <a className="popup-video cursor-pointer"
                                 onClick={() => setIsVideoOpen(true)}><i className="fas fa-play">
                              </i><span className="text">How It Work</span></a>
                           </div>

                  </div>
                  <div className="roadMap__img">
                    <Image
                      src={road_map}
                      className="tg-parallax"
                      data-scale="1.5"
                      data-orientation="down"
                      alt="roadMap__img"
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="roadMap__steps-wrap">
                    {road_map_lists.map((item) => (
                      <div
                        key={item.id}
                        className={`roadMap__steps-item ${item.active ? "active" : ""}`}
                      >
                        <h3 className="title">{item.title}</h3>
                        <InView
                          as="ul"
                          onChange={handleInViewChange} className="roadMap__list list-wrap">
                          {item.lists.map((l, i) => (
                            <li
                              key={i}
                              className={`${l.active ? "active" : ""} tg__animate-text style2`}
                            >
                              {l.text}
                            </li>
                          ))}
                        </InView>
                        <Image
                          src={road_map_step}
                          alt="img"
                          className="roadMap__steps-img"
                        />
                      </div>
                    ))}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
             <VideoPopup
             isVideoOpen={isVideoOpen}
             setIsVideoOpen={setIsVideoOpen}
             videoId={"ssrNcwxALS4"}
          />
</> 
  );
};

export default RoadMapArea;
