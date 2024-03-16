'use client'

import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import HeroBannerTwo from "./components/hero-banner/hero-banner-2";
import area_bg from '@/assets/img/bg/area_bg02.jpg';
import SocialArea from "./components/social/social-area";
import BrandArea from "./components/brand/brand-area";
import FooterTwo from "@/layout/footer/footer-2";
import MatchSection from "./components/home/matches";
import HomeRules from "./components/home/rules";
import { useEffect, useState } from "react";
import axios from "axios";
import Section1 from "./components/home/section1";
import VideoArea from "./components/video/video-area";
import TournamentArea from "./components/tournaments/tournament-area";

// export const metadata: Metadata = {
//   title: "Home Page Two",
// };

export default function HomeTwo() {

  const [data,setData]=useState(null);
  const [brands,setBrands]=useState(null);
  const [video,setVideo]=useState(null);

  useEffect(()=>{
    const getMain = () => {

      let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BACKEND_URL}/getMain`,
          headers: {}
      };

      axios.request(config)
          .then((response: any) => {
            setData(response.data)
            console.log(JSON.stringify(response.data));
          })
          .catch((error: any) => {
              console.log(error);
          });

  }

  const getBrands = () => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BACKEND_URL}/getBrands`,
        headers: {}
    };

    axios.request(config)
        .then((response: any) => {
          setBrands(response.data)
          console.log(JSON.stringify(response.data));
        })
        .catch((error: any) => {
            console.log(error);
        });

}

getMain();
  getBrands();
},[])
  return data!=null?(
    <Wrapper>

      <Header style_2={true} />

      <main className="main--area">

        <HeroBannerTwo  title={data.data.title} supTitle={data.data.sup_title}/>
        <div className="area-background" style={{backgroundImage:`url(${area_bg.src})`}}>


<TournamentArea/>
        </div>

        <MatchSection/>
        <br></br>
        <VideoArea/>

        {data.owner_visable?<BrandArea data={brands}/>:null}
        
<SocialArea/>
      </main>


      <FooterTwo/>

    </Wrapper>
  ):(
        <Wrapper>

    <Header style_2={true} />

    <main className="main--area">

      <HeroBannerTwo  title="...تحميل" supTitle=""/>

      <div className="area-background" style={{backgroundImage:`url(${area_bg.src})`}}>
</div>
</main>
<FooterTwo/>

</Wrapper>
)

}
