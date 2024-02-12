import React from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

const ClanItem = ({ item }: { item: any }) => {
    console.log("clans")
  return (
    <div className="nft-item__box">
      <div className="nft-item__thumb">
        <Link href="/shop-details">
          <img style={{maxWidth:'180px',height:"190px"}} src={item.clan_id.image} alt="img" />
        </Link>
      </div>
      <div title={item.clan_id.name} className="nft-item__content">
        <h4 className="title">
          <Link href="/shop-details">{item.clan_id.name}</Link>
        </h4>
        <div className="nft-item__avatar">
          <div className="avatar-img">
            <Link href="/shop-details">
            <img style={{maxWidth:'40px',maxHeight:"40px"}} src={item.owner.avatare} alt="img" />
            </Link>
          </div>
          <div className="avatar-name">
            <h5 title={item.owner.global_name} className="name">
              <Link href="/shop-details">{item.owner.global_name}</Link>
            </h5>
          </div>
        </div>
        <div className="nft-item__bid">
          <div className="nft-item__price">
            <p>
              {item.length}
              {/* <span className="currency">Eth</span> */}
            </p>
            <Link onClick={()=>{
                Swal.fire({
                    title:"Reasone",
                    text:item.reasone,
                    icon:'info'
                })
            }} href="#" className="bid-btn">
              Reason <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClanItem;
