import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/types/card";


const ClanCard = ({ item }: { item:  any}) => {
  
  console.log(item)
  return (
    <Link href={`/clan/${item._id}`}>
    <div style={{    
        maxWidth: '330px',
        minHeight:'340px',
        height: 'auto'}} className="trendingNft__item">
    <div style={{}} className="trendingNft__item-top">
        <div className="trendingNft__item-avatar">
            <div className="image">
            <Link href={item.owner_id&&`/profile/${item.owner_id._id}`}>
                  <img src={item.owner_id&&item.owner_id.avatare} alt="img"/>
                </Link>
            </div>
            <div style={{textOverflow: "ellipsis",
whiteSpace: 'nowrap',
overflow: 'hidden'
}} className="info">
                <h6 className="name">{item.owner_id&&item.owner_id.activigion_name}</h6>
                <Link href="/shop-details" className="userName">@{item.owner_id&&item.owner_id.global_name}</Link>
            </div>
        </div>
    </div>
    <div className="trendingNft__item-image">
    <Link href={`/clan/${item._id}`}>
          <img src={item.image} alt="img" style={{width:'100%',height:'auto'}} />
        </Link>
    </div>
    <div style={{marginTop:'10px'}} className="trendingNft__item-bottom">
        <div className="trendingNft__item-price">
            <span style={{textOverflow: "ellipsis",
whiteSpace: 'nowrap',
overflow: 'hidden',
maxWidth:'200px'
}} className="bid">{item.short_name}</span>
            <h6 style={{wordBreak:'break-all'}} className="eth"><i className="fab fa-ethereum"></i><span>{item.name}</span></h6>
        </div>
    </div>
</div>
</Link>
  );
};

export default ClanCard;
