"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ITournament } from "@/types/tournament-type";
import TournamentBgPath from "../svg/t-list-bg";
import { useTimer } from "react-timer-hook";
import Achievments from "../achievements/achievements";
import Swal from "sweetalert2";

// prop type
type IProp = {
  item: any;
  index: number;
  data:any,
  handleAnswer:Function
};
const TournamentListItem = ({ item, index,data,handleAnswer }: IProp) => {
  function formatDateString(dateString:string) {
    const date = new Date(dateString);
    
    const options:any = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
  
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate;
  }
  
  console.log(item)

  const expiryTimestamp = new Date(item.coming_time);
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <div
      className="tournament__list-item wow fadeInUp"
      data-wow-delay={`.${index + 2}s`}
    >
      <TournamentBgPath />
      <div className="tournament__list-content">
        <div className="tournament__list-thumb">
          <Link href="/tournament-details">
            <img
              src={"item.clan_id.image"}
              alt="thumb"
              style={{minWidth:'150px', width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="tournament__list-name">
          <h5 className="team-name">{"item.clan_id.name"}</h5>
          <span className="status">{"item.clan_id.status"}</span>
        </div>
        {/* <div className="tournament__list-prize">
          <h6 className="title">Achievment</h6> */}
          {/* <i className="fas fa-trophy"></i> */}
          {/* <Achievments data={data} iconWidth={20}/>
        </div> */}
        {/* <div className="tournament__list-time">
          <h6 className="title">Time</h6>
          <i className="fas fa-clock"></i>
          <span suppressHydrationWarning={true}>{hours}h : {minutes}m : {seconds}s</span>
        </div> */}
        <div style={{display:"flex",flexDirection:'column',alignItems:'center'}} className="tournament__list-live">
          <a href="#" onClick={(e)=>handleAnswer(item._id,item.clan_id._id)}>
            Answer <i className="far fa-play-circle"></i>
          </a>
          <span suppressHydrationWarning={true}>{"formatDateString(item.created_at)"}</span>

        </div>
      </div>
    </div>
  );
};

export default TournamentListItem;
