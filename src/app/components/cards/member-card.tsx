import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/types/card";


const CardItem = ({ item }: { item:  any}) => {
  
  console.log(item)
  return (
    <div className="nft-item__box">
      <div className="nft-item__thumb">
        <Link href="/shop-details">
          <img src={item.avatare} alt="img" />
        </Link>
      </div>
      <div className="nft-item__content">
        <h4 className="title">
          <Link href="/shop-details">{item.global_name}</Link>
        </h4>
        <div className="nft-item__avatar">
          <div className="avatar-img">
            <Link href="/shop-details">
              <Image src={item.secondry_image} alt="img" />
            </Link>
          </div>
          <div className="avatar-name">
            <span className="designation">{item.role==0?"player":item.role==2?"Owner":"Co-Ownere"}</span>
          </div>
        </div>
        <div className="nft-item__bid">
          <div className="nft-item__price">
            <p>
              {item.activigion_name}
            </p>
            <Link href="/shop-details" className="bid-btn">
              Edite <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
