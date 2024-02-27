'use client'
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import ServicesArea from "../components/services/services-area";
import TeamArea from "../components/team/team-area";
import BlackListArea from "../components/players/black_list_players";
import { useState } from "react";
import Image from "next/image";
import BlackListArea2 from "../components/black-list/black-list-area";


type INavProps = {id: string;img: any;isActive?:boolean}
function NavBtn({id,img,isActive}:INavProps) {
  // handle open search
  const handleClickSound = (audioPath: string) => {
    const audio = new Audio(audioPath);
    audio.play();
  };
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
        onClick={() => handleClickSound('/assets/audio/tab.mp3')}
      >
        <span className="img-shape"></span>
        <Image src={img} alt="img" />
      </button>
    </li>
  );
}

export default function BlackListPage() {
   
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea title="Black List" subtitle="Black List" />
        {/* breadcrumb area end */}

<BlackListArea2 />

        {/* team area start */}
        
        {/* <BlackListArea/> */}
        {/* team area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
