import firstplace from '@/assets/img/includes/34.png';
import secondplace from '@/assets/img/includes/35.png';
import goldcup from '@/assets/img/includes/1st-prize.png';
import troghy from '@/assets/img/includes/trophy.png';
import silvercup from '@/assets/img/includes/silver-cup.png';
import thirdplace from '@/assets/img/includes/36.png';
import swords from '@/assets/img/includes/swords (1).png';
import riskSkull from '@/assets/img/includes/sign.png';
import died from '@/assets/img/includes/die.png';

export default function PlayerAchevments({ data, iconWidth, background = "rgb(13 17 22)" }: any) {
    console.log(data)
    return (
        <div className="team__info-list">
            <ul style={{gap:'0'}} className="list-wrap">
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <li>
                        <div className="team__info-item">
                            <div className="team__info-icon">
                                <img style={{ maxWidth: "60px" }} width={iconWidth + 20} src={firstplace.src} />
                            </div>
                            <div className="team__info-content">
                                <span className="sub">Gold Medals</span>
                                <h5 className="title">{data.gold_medals_num}</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="team__info-item">
                            <div className="team__info-icon">
                                <img style={{ maxWidth: "60px" }} width={iconWidth + 10} src={goldcup.src} />
                            </div>
                            <div className="team__info-content">
                                <span className="sub">Gold Cup</span>
                                <h5 className="title">{data.gold_cups_num}</h5>
                            </div>
                        </div>
                    </li>



                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <li>
                        <div className="team__info-item">
                            <div className="team__info-icon">
                                <img style={{ maxWidth: "60px" }} width={iconWidth} src={secondplace.src} />
                            </div>
                            <div className="team__info-content">
                                <span className="sub">Silver Medals</span>
                                <h5 className="title">{data.silver_medals_num}</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="team__info-item">
                            <div className="team__info-icon">
                                <img style={{ maxWidth: "63px" }} src={silvercup.src} />
                            </div>
                            <div className="team__info-content">
                                <span className="sub">Silver Cup</span>
                                <h5 className="title">{data.silver_cups_num}</h5>
                            </div>
                        </div>
                    </li>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <li>
                        <div className="team__info-item">
                            <div className="team__info-icon">
                                <img style={{ maxWidth: "60px" }} width={iconWidth} src={thirdplace.src} />
                            </div>
                            <div className="team__info-content">
                                <span className="sub">Pronze Medals</span>
                                <h5 className="title">{data.pronze_medals_num}</h5>
                            </div>
                        </div>
                    </li>
                    <li>

                    </li>
                </div>

            </ul>
        </div>
        //     <div style={{background:background}} className="team__info-discord">
        //     <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-evenly',width:'100%' }}>
        //         <div style={{ display: 'flex', flexDirection: 'row'}}>
        //             <img width={iconWidth+20} src={firstplace.src} />
        //             <div style={{ display: 'flex', flexDirection: 'column'}}>
        //             <span>Gold Medals</span>
        //             <span>{data.gold_medals_num}</span>

        //             </div>
        //         </div>
        //         <div style={{ display: 'flex', flexDirection: 'row'}}>
        //             <img width={iconWidth} src={secondplace.src} />
        //             <div style={{ display: 'flex', flexDirection: 'column'}}>
        //             <span>Gold Medals</span>
        //             <span>{data.silver_medals_num}</span>
        //             </div>
        //         </div>
        //         <div style={{ display: 'flex', flexDirection: 'row'}}>
        //             <img width={iconWidth} src={thirdplace.src} />
        //             <div style={{ display: 'flex', flexDirection: 'column'}}>
        //             <span>Silver Medals</span>
        //             <span>{data.pronze_medals_num}</span>
        //             </div>
        //         </div>
        //         {/* <div>
        //             <img width={iconWidth} src={swords.src} />
        //             <span>{data.win_num}</span>
        //         </div> */}
        //     </div>
        //     {/* <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-evenly',width:'100%' }}>
        //     <div>
        //         <img width={iconWidth} src={goldcup.src} />
        //         <span>{data.gold_cups_num}</span>
        //     </div>
        //     <div>
        //         <img width={iconWidth} src={silvercup.src} />
        //         <span>{data.silver_cups_num}</span>
        //     </div>
        //     <div>
        //         <img width={iconWidth} src={troghy.src} />
        //         <span>{data.pronze_cups_num}</span>
        //     </div> */}
        //     {/* <div>
        //             <img width={iconWidth} src={riskSkull.src} />
        //             <span>{data.lost_num}</span>
        //         </div> */}

        // {/* </div> */}
        // </div>

    )
}