import React, { useEffect, useState } from "react";
import Link from "next/link";
import match_bg from "@/assets/img/bg/match_bg.jpg";
import match_icon from "@/assets/img/icons/match.svg";
import SvgIconCom from "../common/svg-icon-anim";
import team_1 from "@/assets/img/others/team_vs01.png";
import team_2 from "@/assets/img/others/team_vs02.png";
import team_3 from "@/assets/img/others/team_vs03.png";
import team_4 from "@/assets/img/others/team_vs04.png";
import team_5 from "@/assets/img/others/team_vs05.png";
import team_6 from "@/assets/img/others/team_vs06.png";
import TextAnimation from "../common/text-animation";
import axios from "axios";
import errorMessage from "@/hooks/messageError";
import Pagination from "@/context/pagination";

// match type
type IMatch = {
  team_1: string;
  game_name_1: string;
  game_name_2: string;
  match_name: string;
  date: string;
  team_2: string;
  match_name_2: string;
  delay: string;
  winner:string,
  id1:string,
  id2:string,
  style1?:any
  style2?:any
};
// match item
function UpcomingMatchItem({
  team_1,
  team_2,
  game_name_1,
  game_name_2,
  match_name,
  date,
  match_name_2,
  delay,
  style1,
  style2,
  winner,
  id1,id2
}: IMatch) {
  const imgStyle = {height:'auto',width:'100%'}
  return (
    <div
      className="upcoming-match__item tg-svg wow fadeInUp"
      data-wow-delay={`${delay}s`}
    >
      <SvgIconCom icon={match_icon} id="svg-7" />
      <div className="upcoming-match__position">
        <div className="upcoming-match__team team-left">
          <Link href="/team-details">
            <img src={team_1} alt="img" style={imgStyle} />
          </Link>
        </div>
        <div className="upcoming-match__content">
          <div className="team--info info-left">
            <span style={{fontSize:'14px'}} className="game-name">{game_name_1}</span>
            <h3 style={{fontSize:'16px',}} className="name">
              <Link style={{color:style1}} href={`/clans/${id1}`}>{match_name}</Link>
            </h3>
          </div>
          <div className="upcoming-match__time">
            <h2 className="time">VS</h2>
          </div>
          <div className="team--info info-right">
            <span style={{fontSize:'14px'}} className="game-name">{game_name_2}</span>
            <h3 style={{fontSize:'16px'}} className="name">
              <Link style={{color:style2}} href={`/clans/${id2}`}>{match_name_2}</Link>
            </h3>
          </div>
        </div>
        <div className="upcoming-match__team team-right">
          <Link href="/team-details">
            <img src={team_2} alt="img" style={imgStyle} />
          </Link>
        </div>
      </div>
      <div className="upcoming-match__date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="287"
          height="24"
          viewBox="0 0 287 24"
        >
          <path
            id="bottom-svg1"
            d="M1104,3760l-20,24H837l-20-24"
            transform="translate(-817 -3760)"
          />
        </svg>
        <span>{date}</span>
      </div>
    </div>
  );
}

const MatchSection = ({challenges,id}:any) => {
  const [currentPageChallenges, setcurrentPageChallenges] = useState(1);
  const [ totalPageChallenges, settotalPageChallenges ] = useState(1);
  const [ challengesData, setChallengesData ] = useState([]);

  const getChallenges=()=>{

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.BACKEND_URL}/get_challenges?pagechallenges=${currentPageChallenges}`,
      headers: {}
    };

    axios.request(config)
      .then((response: any) => {
        if(response.data.success){
          
        console.log(JSON.stringify(response.data));
        settotalPageChallenges(Math.ceil(response.data.length/9))
        setChallengesData(response.data.data)
        }else{
          errorMessage(response.data.message)
      }
    })
      .catch((error: any) => {
        errorMessage(error.message)

        console.log(error);
      });

  }
  useEffect(()=>{
        getChallenges()
  },[currentPageChallenges])

  console.log(challenges)
  return (
    <section
      className="upcoming-match__area section-pt-120 section-pb-85"
      style={{ backgroundImage: `url(${match_bg.src})` }}
      data-background="assets/img/bg/match_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            {/* <div className="section__title text-center mb-60"> */}
              {/* <TextAnimation title="MATCHES list" /> */}
              {/* <h3 className="title">upcoming MATCHES</h3> */}
            {/* </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="upcoming-match__lists">
              {challengesData.length>0?challengesData.map((item:any)=>(
              <UpcomingMatchItem
              id1={item.team_1._id}
              id2={item.team_2._id}
              date={item.created_at}
              team_1={item.team_1.image}
              team_2={item.team_2.image}
              winner={item.winner&&item.winner._id}
              game_name_1={item.winner?item.winner._id==item.team_1._id?"Winner":"Loser":"???"}
              style1={item.winner?item.winner._id==item.team_1._id?'gold':"":""}
              style2={item.winner?item.winner._id==item.team_2._id?'gold':"":""}
              match_name={item.team_1.name}
              match_name_2={item.team_2.name}
              game_name_2={item.winner?item.winner._id==item.team_2._id?"Winner":"Loser":"???"}
              delay=".2"
            />

              )):<center><h1>No Data Found</h1></center>}
            </div>
          </div>
        </div>
      </div>
      <Pagination
      setCurrentPage={setcurrentPageChallenges}
      totalPage={totalPageChallenges}
      currentPage={currentPageChallenges}
      />
    </section>
  );
};

export default MatchSection;
