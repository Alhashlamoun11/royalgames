import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/types/card";


const PlayerCard = ({ item }: { item:  any}) => {
  
  console.log(item)
  return (
    <Link href={`/profile/${item._id}`}>
    <div style={{    
        maxWidth: '330px',
        height: 'auto'}} className="trendingNft__item">
    <div style={{}} className="trendingNft__item-top">
        <div className="trendingNft__item-avatar">
            <div className="image">
            <Link href={item.clan_id&&`/clan/${item.clan_id._id}`}>
                  <img src={item.clan_id&&item.clan_id.image} style={{height:"35px",width:'auto'}} alt="img"/>
                </Link>
            </div>
            <div style={{
                display:"flex",
                alignItems:'center'
            }} className="info">
            <Link className="userName" href={item.clan_id&&`/clan/${item.clan_id._id}`}>
                <h4 className="name">{item.clan_id&&item.clan_id.name}</h4>
            </Link>
            </div>
        </div>
    </div>
    <div className="trendingNft__item-image">
    <Link href={`/profile/${item._id}`}>
          <img src={item.avatare} alt="img" style={{width:'100%',height:'150px'}} />
        </Link>
    </div>
    <div style={{marginTop:'10px'}} className="trendingNft__item-bottom">
        <div className="trendingNft__item-price">
            <span className="bid">{item.activigion_name}</span>
            <h6 style={{wordBreak:'break-all'}} className="eth"><i className="fab fa-ethereum"></i><span>{item.global_name}</span></h6>
        </div>
    </div>
</div>
</Link>
  );
};

export default PlayerCard;
