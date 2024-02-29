import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types/product-type";
import { useRouter } from "next/navigation";




const ClanMember = ({ item }: any) => {
  const router=useRouter()
  const handelUserLevel=(player_id:string,level:number)=>{
    const axios = require('axios');
let data = JSON.stringify({
  "user_id": player_id,
  "level": level
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `${process.env.BACKEND_URL}/change_user_role`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response:any) => {
  console.log(JSON.stringify(response.data));
})
.catch((error:any) => {
  console.log(error);
});

  }
  const handleRemovePlayer=(player_id:string)=>{
    const axios = require('axios');
  let data = JSON.stringify({
    "id": player_id
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${process.env.BACKEND_URL}/leave_clan`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response:any) => {
    router.refresh()
    console.log(JSON.stringify(response.data));
  })
  .catch((error:any) => {
    console.log(error);
  });
  
  }
   
  function PopUpMenu(player_id:string) {
    return (
      <ul style={{
        
      }} className="poupup_menue">
        <li onClick={e=>handelUserLevel(player_id,0)}>Upgrade</li>
        <li onClick={e=>handelUserLevel(player_id,1)}>Downgrade</li>
        <li onClick={e=>handleRemovePlayer(player_id)}>Remove</li>
      </ul>
    );
  }
  
  const [popUpMenu, setPopUpMenu] = React.useState(false);

  return (
    <div className="shop__item">
      <div className="shop__item-thumb">
        <Link href={`/shop-details/${item.id}`}>
          <img src={item.avatare} alt="img" style={{width:'auto',height:'auto'}} />
        </Link>
        <Link href="#" className="wishlist-button" onClick={() => setPopUpMenu(!popUpMenu)}>
          <i className="fa fa-ellipsis-v"></i>
          {popUpMenu && PopUpMenu(item.id)}

        </Link>

      </div>
      <div className="shop__item-line"></div>
      <div className="shop__item-content">
        <div style={{flexDirection:'column'}} className="shop__item-content-top">
          <h4 className="title">
            <Link href={`/shop-details/${item._id}`}>{item.global_name}</Link>
          </h4>
          <div className="shop__item-price">{item.activigion_name}</div>
        </div>
        <div className="shop__item-cat">
          <Link href="/shop">{item.category}</Link>
        </div>
      </div>
    </div>
  );
};

export default ClanMember;
