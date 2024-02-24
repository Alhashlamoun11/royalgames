'use client'
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import TopSectionStreamers from "../components/streamers/top-section";
import StreamersAreaItem from "../components/streamers/streamersAreaItem";

export default function Home() {

  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* hero banner start */}
        <TopSectionStreamers />


        {/* shop area start */}
        <StreamersAreaItem />
        {/* shop area end */}


      </main>
      <Footer/>
    </Wrapper>
  );
}
