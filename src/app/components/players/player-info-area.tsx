import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import firstplace from '@/assets/img/includes/firstplace.png';
import secondplace from '@/assets/img/includes/secondplace.png';
import goldcup from '@/assets/img/includes/1st-prize.png';
import troghy from '@/assets/img/includes/trophy.png';
import silvercup from '@/assets/img/includes/silver-cup.png';
import thirdplace from '@/assets/img/includes/3rd-place.png';
import team_img from '@/assets/img/others/team_vs02.png';
import swords from '@/assets/img/includes/swords (1).png';
import riskSkull from '@/assets/img/includes/sign.png';
import Achievments from '../achievements/achievements';
import PlayerAchevments from '../achievements/PlayerAchevments';
import died from '@/assets/img/includes/die.png';


const PlayerInfoArea = ({ user }: any) => {
    return (
        <section style={{    paddingTop: "8px",
            height: "auto",
            minHeight:'195px'}} className="team__info-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div style={{}} className="team__info-wrap">
                            <PlayerAchevments iconWidth={50} data={user}/>

                            <div className="team__info-list">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="team__info-item">
                                            <div className="team__info-icon">
                                                <Image src={team_img} alt="img" width={50} height={75} style={{ height: 'auto', width: 'auto' }} />
                                            </div>
                                            <div className="team__info-content">
                                                <span className="sub">{user.role==1?"member":user.role==0?"owner":"co-owner"}</span>
                                                <h5 className="title">{user.clan_id==null?"solo":user.clan_id.name}</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="team__info-item">
                                            <div className="team__info-icon">
                                                <i className="flaticon-swords-1"></i>
                                            </div>
                                            <div className="team__info-content">
                                                <span className="sub">Matches Number</span>
                                                <h5 className="title">{Number(user.lost_num)+Number(user.win_num)}</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="team__info-item">
                                            <div className="team__info-icon">
                                                <i className="flaticon-diamond"></i>
                                            </div>
                                            <div className="team__info-content">
                                                <span className="sub">Win Time</span>
                                                <h5 className="title">{user.win_num}</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                    <div className="team__info-item">
                            <div className="team__info-icon">
                                <img style={{ maxWidth: "63px" }} src={died.src} />
                            </div>
                            <div className="team__info-content">
                                <span className="sub">Lost Number</span>
                                <h5 className="title">{user.lost_num}</h5>
                            </div>
                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlayerInfoArea;