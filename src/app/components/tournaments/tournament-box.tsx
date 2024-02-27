'use client'
import React from "react";
import Image from "next/image";
import { ITournament } from "@/types/tournament-type";
import CountdownTimer from "../timer/countdown-timer";
import TournamentBoxBgPatch from "../svg/t-box-bg";

const TournamentBox = ({ item }: { item: any }) => {
  console.log(item)
  function formatDateString(dateString:any) {
    const date = new Date(dateString);
    
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      };
  
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate.replace(/,/g, '');

  }
  
  return (
    <div className={`tournament__box-wrap `}>
      <TournamentBoxBgPatch />
      <div className="tournament__box-price">
        <i className="fas fa-trophy"></i>
        {/* <span>{item.box_price}</span> */}
      </div>
      <div className="tournament__box-countdown">
        <div className="coming-time" data-countdown={item.match.created_at}>
          {/* <CountdownTimer expiryTimestamp={new Date("2023/5/16")} /> */}
          <span>{formatDateString(item.match.created_at)}</span>
        </div>
      </div>
      <div className="tournament__box-caption">
        {/* <span className="sub">{item.match.name}</span> */}
        <h4 className="title">{item.match.name}</h4>
      </div>
      {/* <div className="tournament__box-prize">
        <i className="fas fa-trophy"></i>
        <span>{"item.places"} prize Places</span>
      </div> */}
      <ul className="tournament__box-list list-wrap">
        {item.clan.length>0&&item.clan.map((l:any,i:number) => i<8?(
          <li key={l.id}>
            <div className="tournament__box-list-item">
              <div className="tournament__player-thumb">
                {/* {l.clan_id!=null?<img src={l.clan_id.image} alt="img"/>:<span></span>} */}
                <img src={l.clan_id.image} alt="img" />
              </div>
              <h6 className="tournament__player-name">{l.clan_id.name}</h6>
              <span className="tournament__player-price">
                {l.points} <i className="fas fa-bolt"></i>
              </span>
            </div>
          </li>
        ):<></>)}
      </ul>
    </div>
  );
};

export default TournamentBox;
