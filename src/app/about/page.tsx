import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
// import AboutAreaThree from "../components/about-area/about-area-3";
import ServicesArea from "../components/services/services-area";
import TeamArea from "../components/team/team-area";
import area_bg from '@/assets/img/bg/area_bg02.jpg';
import AboutAreaTwo from "../components/about-area/about-area-2";
import RoadMapArea from "../components/road-map/road-map-area";
import StreamersArea from "../components/streamers/streamers-area";
import TournamentArea from "../components/tournaments/tournament-area";
import BreadcrumbAreaTwo from "../components/breadcrumb/breadcrumb-area-2";

export default function AboutPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header style_2={true}/>
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbAreaTwo title="ABOUT US" subtitle="ABOUT US" />
        {/* breadcrumb area end */}

        <AboutAreaTwo/>

        <TournamentArea/>
        {/* about area start */}
        {/* <AboutAreaThree/> */}
        {/* about area end */}

        {/* Services area start*/}
        <ServicesArea/>
        {/* Services area end*/}

        {/* <RoadMapArea /> */}

        {/* team area start */}
        {/* <TeamArea/> */}
        <TeamArea/>
        {/* team area end */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
