import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import about_1 from "@/assets/img/others/about_tab01.png";
import about_2 from "@/assets/img/others/about_tab02.png";
import about_3 from "@/assets/img/others/about_tab03.png";
import about_4 from "@/assets/img/others/about_tab04.png";
import about_5 from "@/assets/img/others/about_tab05.png";
import about_6 from "@/assets/img/others/about_tab06.png";
import about_bg_1 from "@/assets/img/others/about_img01.jpg";
import about_bg_2 from "@/assets/img/others/about_img02.jpg";
import about_bg_3 from "@/assets/img/others/about_img03.jpg";
import about_bg_4 from "@/assets/img/others/about_img04.jpg";
import about_bg_5 from "@/assets/img/others/about_img05.jpg";
import about_bg_6 from "@/assets/img/others/about_img06.jpg";
import icon_1 from "@/assets/img/icons/features_icon01.png";
import icon_2 from "@/assets/img/icons/features_icon02.png";
import icon_3 from "@/assets/img/icons/features_icon03.png";
import TextAnimation from "../common/text-animation";
import { useEffect, useState } from "react";
import PlayerArea from "./palyers-area";
import ClansArea from "./clans-area";
import { Tooltip } from "reactstrap";

type INavProps = {id: string;img: StaticImageData;isActive?:boolean}
type ITabProps = {
    id: string;
    img: StaticImageData;
    title: string;
    rate: string;
    isActive?: boolean;
  }
  
export default function BlackListArea2(){
    const [type,setType]=useState('Players');

    function TabItemClan({id,img,title,rate,isActive}:ITabProps) {

        return (
          <div
            className={`tab-pane ${isActive ? "show active" : ""}`}
            id={`about${id}`}
            role="tabpanel"
            aria-labelledby={`about${id}-tab`}
          >
            <div className="row justify-content-center">
            <ClansArea/>
            
            </div>
          </div>
        );
      }
      function TabItemPlayer({id,img,title,rate,isActive}:ITabProps) {

        return (
          <div
            className={`tab-pane ${isActive ? "show active" : ""}`}
            id={`about${id}`}
            role="tabpanel"
            aria-labelledby={`about${id}-tab`}
          >
            <div className="row justify-content-center">
            <PlayerArea/>
            </div>
          </div>
        );
      }

    function NavBtn({id,img,isActive}:INavProps) {
        // handle open search
        const handleClickSound = (audioPath: string) => {
          const audio = new Audio(audioPath);
          audio.play();
        };
        const handleSetType=(id:any)=>{
            console.log(type!="Player")
            console.log(type!="Clan")
            console.log(type)
            
            setType(id=="01"?"Player":"Clan")
        }
    
        return (
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${isActive ? "active" : ""}`}
              id={`about${id}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#about${id}`}
              type="button"
              role="tab"
              aria-controls={`about${id}`}
              aria-selected={isActive?'true':'false'}
              tabIndex={-1}
              onClick={() =>{handleSetType(id);handleClickSound('/assets/audio/tab.mp3')}}
            >
              <span className="img-shape"></span>
              <img src={img} alt="img" />
            </button>
          </li>
        );
      }

    return (
        <section className="about__area section-pt-130 section-pb-130">
        <div className="container">
        <div className="tab-content" id="myTabContent">
        <center><h2><TextAnimation title="الفرق المحرومة"/></h2></center>

          <TabItemClan
            id="01"
            img={about_bg_1}
            isActive={true}
            title="human game"
            rate="50%"
          />
                      <br></br><br></br>

                  <center><h2><TextAnimation title="اللاعبين المحرومين"/></h2></center>

          <TabItemPlayer id="02"
                              img={about_bg_2} isActive={true} title="Axie Infinity" rate="60%" />
        </div>

</div>
</section>  
    )
}