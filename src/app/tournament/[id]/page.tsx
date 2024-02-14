'use client'
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import brd_bg from '@/assets/img/bg/breadcrumb_bg03.jpg';
import brd_img from '@/assets/img/others/breadcrumb_img03.png';
import BreadcrumbArea from "@/app/components/breadcrumb/breadcrumb-area";
import { useEffect, useState } from "react";
import axios from "axios";
import TournamentListArea from "@/app/components/tournaments/tournament-list-area";
import UpcomingMatches from "@/app/components/upcoming-match/upcoming-matches";
import GalleryArea from "@/app/components/gallery/gallery-area";
import TextAnimation from "@/app/components/common/text-animation";
import Pagination from "@/context/pagination";

// export const metadata: Metadata = {
//     title: "Tournament Page",
// };

export default function MatchDetail({ params }: { params: { id: string } }) {

    const [match, setMatch] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [currentClanPage, setCurrentClanPage] = useState(1);
    const [currentChallengePage, setCurrentChallengePage] = useState(1);
    const [ totalPage, setTotalPage ] = useState(1);
    const [ totalClanPage, setTotalClanPage ] = useState(1);
    const [ totalChallengePage, setTotalChallengePage ] = useState(1);

    useEffect(() => {
        const getMatchData = () => {

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${process.env.BACKEND_URL}/get_matche/${params.id}/?page=${currentPage}
                &clanpage=${currentClanPage}&challengepage=${currentChallengePage}`,
                headers: {}
            };

            axios.request(config)
                .then((response: any) => {
                    setMatch(response.data.data)
                    setTotalClanPage(Math.ceil(response.data.data.clanLength/9))
                    setTotalChallengePage(Math.ceil(response.data.data.challengesLength/9))

                    console.log(response.data.data)
                    console.log(JSON.stringify(response.data));
                })
                .catch((error: any) => {
                    console.log(error);
                });

        }

        if (params.id) {
            getMatchData()
        }
    }, [currentClanPage,currentChallengePage])

    return (
        <Wrapper>
            {/* header start */}
            <Header />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">
                {/* breadcrumb area start */}
                <BreadcrumbArea title={match&& match.matche.name} prevSuptitle="Name: " subtitle={match&& match.matche.name} bg={brd_bg} brd_img={brd_img} />
                {/* breadcrumb area end */}

                {/* tournament area start */}
                {/* tournament area end */}

                <section className="shop-area shop-details-area">
                    <div className="container">

                        <div className="row">
                            <div className="col-12">

                                <div className="product__desc-wrap">

                                    <div className="tab-content" id="descriptionTabContent">

                                        <div className="tab-pane animation-none fade show active about__content-list" id="info" role="tabpanel" aria-labelledby="info-tab">
                                            <center><h2><TextAnimation title="Clans" /></h2></center>

                                            <table style={{
                                                    borderCollapse: 'separate',
                                                    borderSpacing: '0 15px'
                                            }} cellSpacing={'20px'} cellPadding={"30px"} border={0} className="table table-sm list-wrap tournment_clan_table">
                                                <thead>
                                                    <tr className="clan_item_tournmentt">
                                                        <td style={{border:'none'}}>Clan Name</td>
                                                        <td style={{border:'none'}}>Image</td>
                                                        <td style={{border:'none'}}>Points</td>
                                                        <td style={{border:'none'}}>Win Strick</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {match && match.clans.map((item:any, index:any) => (

                                                        <tr
                                                        style={{
                                                            backgroundImage: "-ms-linear-gradient(0deg,#1f2935 0,transparent 100%,#10181f 100%)",
                                                            boxShadow: "rgb(69 248 130) 0px 2px 5px 0px",
                                                            padding: "7px 13px",
                                                            borderRadius: "7px",
                                                            margin: "0 0 11px",
                                                            fontSize: "16px",
                                                            fontWeight: "var(--tg-fw-bold)",
                                                            fontFamily: "var(--tg-heading-font-family)",
                                                            transform: "translateX(0)",
                                                            transition: ".3s linear",
                                                        }}
                                                        className="clan_item_tournment" >
                                                            <td style={{border:'none'}}>{item.clan_id.name}</td>
                                                            <td style={{border:'none'}}><img src={item.clan_id.image} width={'100px'}/></td>
                                                            <td style={{border:'none'}}>{item.points}</td>
                                                            <td style={{border:'none'}}>{item.win_strick}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br></br>
                    <Pagination
            setCurrentPage={setCurrentClanPage}
             totalPage={totalClanPage}
              currentPage={currentClanPage}
            />

                    {/* tournament list area start */}
                    {/* <TournamentListArea/> */}
                    <div className="container">

                        <div className="row">
                            <div className="col-12">

                                <div className="product__desc-wrap">

                                    <div className="tab-content" id="descriptionTabContent">

                                        <center><h2><TextAnimation title="Challenges"  /></h2></center>
                                        <div className="tab-pane animation-none fade show active" id="challenges" role="tabpanel" aria-labelledby="challenges-tab">
                                            {match && match.challenges.length > 0 ? (<UpcomingMatches challenges={match.challenges} />) : (<center><h5>No Challenges Found Yet</h5></center>)}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <br></br>
                    <Pagination
            setCurrentPage={setCurrentChallengePage}
             totalPage={totalChallengePage}
              currentPage={currentChallengePage}
            /> */}

                </section>
                {/* tournament list area end */}

            </main>
            <div
          className="area-background"
        >
          {/* about-area */}
          {/* about-area-end */}

          {/* gallery area start */}
          <center><h2>Match Role</h2></center>

          <GalleryArea />
          {/* gallery area end */}
        </div>

            {/* main area end */}

            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    );
}
