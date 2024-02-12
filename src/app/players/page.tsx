'use client'
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import PLayerAreaItem from "../components/players/player-area-items";


export const metadata: Metadata = {
  title: "Players",
};

export default function Clans() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
       <BreadcrumbAreaThree title="All Players" subtitle="All Players" />
        {/* breadcrumb area end */}

        {/* shop area start */}
        <PLayerAreaItem />
        {/* shop area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
