import React from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

const ClanItem = ({ item }: { item: any }) => {
  return (
    <div className="nft-item__box">
      <div className="nft-item__thumb">
        <Link href="/shop-details">
          <img style={{maxWidth:'190px',maxHeight:"190px"}} src={item.player.avatare} alt="img" />
        </Link>
      </div>
      <div title={item.global_name} className="nft-item__content">
        <h4 style={{
            textOverflow: "ellipsis",
whiteSpace: 'nowrap',
overflow: 'hidden'
}} className="title">
          <Link href="/shop-details">{item.player&&item.player.global_name}</Link>
        </h4>
        {/* <div className="nft-item__avatar">
          <div className="avatar-img">
            <Link href="/shop-details">
            <img style={{maxWidth:'40px',maxHeight:"40px"}} src={item.player&&item.player.avatare} alt="img" />
            </Link>
          </div>
          <div title={item.player&&item.player.name} className="avatar-name">
            <h5 className="name">
              <Link href="/shop-details">{item.player&&item.player.name}</Link>
            </h5>
          </div>
        </div> */}
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
              السبب <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClanItem;
