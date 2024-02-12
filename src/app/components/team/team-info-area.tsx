import React from 'react';
import Image from 'next/image';
import team_img from '@/assets/img/others/team_vs02.png';
import Achievments from '../achievements/achievements';


const TeamInfoArea = ({ user }: any) => {
    return (
        <section style={{    paddingTop: "8px",
            height: "auto",
            background:'none'
            }} className="team__info-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                            <div className="team__info-list">
                                <ul style={{gap:0}} className="list-wrap">
                                    <li>
                                        <div className="team__info-item">
                                            <div className="team__info-icon">
                                                <Image src={team_img} alt="img" width={67} height={75} style={{ height: 'auto', width: 'auto' }} />
                                            </div>
                                            <div className="team__info-content">
                                                <span className="sub">Lost Number</span>
                                                <h5 className="title">{user.lost_num}</h5>
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
                                </ul>
                            </div>
                                <Achievments iconWidth={50} data={user}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamInfoArea;