"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from 'next/image';
import nft_data from '@/data/nft-data';
import gold from '@/assets/img/icons/download (2).jpeg';
import silver from '@/assets/img/icons/download (3).jpeg';
import pronze from '@/assets/img/icons/download (4).jpeg';
import Swal from 'sweetalert2';
import axios from 'axios';
import errorMessage from '@/hooks/messageError';


// slider setting 
const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    '1500': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  }
}
const CardsArea = ({players,id}:any) => {
  const user = JSON.parse(localStorage.getItem('user')!)
console.log(id)
  const[clanMembers,setclanMembers]=useState([])
  const [popUpMenu, setPopUpMenu] = React.useState(false);
  const [player_id, setPlayerId] = React.useState("");
  const [popUpEditeMenu, setPopUpEditeMenu] = React.useState(false);
  const [members, setMembers] = useState([]);
  const [totatlplayers, setTotalPlayers] = useState(0)

  const [currentPagePlayers, setCurrentPagePlayers] = useState(1);
  const [ totalPagePlayers, setTotalPagePlayers ] = useState(1);

  const getPlayers=()=>{
    const axios = require('axios');

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.BACKEND_URL}/get_clan_players/${id}?pageplayers=${currentPagePlayers}`,
      headers: {}
    };

    axios.request(config)
      .then((response: any) => {
        if(response.data.success){
          
        console.log(JSON.stringify(response.data));
        setTotalPagePlayers(Math.ceil(response.data.length/9))
        setTotalPlayers((response.data.length))
        setclanMembers(response.data.data)
        }else{
          errorMessage(response.data.message)
      }
    })
      .catch((error: any) => {
        errorMessage(error.message)

        console.log(error);
      });

  }

  const handlSendInvite = (id: any) => {
    let data = JSON.stringify({
      "user_id": id,
      "clan_id": user.clan_id._id,
      "clan_user": user._id
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BACKEND_URL}/send_invite`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response: any) => {
        if (response.data.success)
          Swal.fire({
            title: "SUCCESS",
            text: response.data.message,
            icon: 'success'
          })
        else
        errorMessage(response.data.message)
        console.log(JSON.stringify(response.data));
      })
      .catch((error: any) => {
        errorMessage(error.message)

        console.log(error);
      });
  }
  const handleSearchMembers = (e: any) => {
    if (e.target.value == '')
      setMembers([])
    const axios = require('axios');

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.BACKEND_URL}/search_user/${e.target.value}`,
      headers: {}
    };

    axios.request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
        setMembers(response.data.data)
      })
      .catch((error: any) => {
        console.log(error);
      });

  }

  const handleAddMemberMenue = () => {
    return (
      <div style={{maxHeight:"350px",overflowY:"scroll", background: "#070a0c", position: 'absolute', zIndex: '3', padding: '20px' }}>
        <input onChange={e => { handleSearchMembers(e) }} style={{ border: '1.5px solid #45f882', borderRadius: '5px' }} placeholder='name' />
        <ul style={{ listStyleType: 'none', background: "#070a0c", padding: '5px', borderRadius: '5px' }} id="members">
          {members.length > 0 ? members.map((item: any) => item._id!=user._id?(
            <li>
              <Link href={'/profile/' + item._id}>
                <img style={{ margin: '0 10px 0 0', borderRadius: '50px' }} width={'50px'} src={item.avatare} />{item.global_name}
                <button
                  onClick={(e) => handlSendInvite(item._id)}
                  style={{
                    marginLeft: '10px',
                    background: '#0f161b',
                    border: 'none',
                    borderRadius: '5px',
                    color: 'white',
                    padding: '5px'
                  }}>Invite</button>
              </Link>
            </li>
          ):null) : "No data found"}

        </ul>
      </div>
    )
  }
  const handelUserLevel = (player_id: string, level: number) => {
    const axios = require('axios');
    let data = JSON.stringify({
      "user_id": player_id,
      "role": level,
      "clan_user": user._id
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BACKEND_URL}/change_user_role`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response: any) => {
        if(response.data.success){
          Swal.fire({
            title:"Success",
            text:response.data.message,
            icon:"success"
          })
        }else{
          errorMessage(response.data.message)

        }
        console.log(JSON.stringify(response.data));
      })
      .catch((error: any) => {
        errorMessage(error.message)
        console.log(error);
      });

  }
  const handleRemovePlayer = (player_id: string) => {
    const axios = require('axios');
    let data = JSON.stringify({
      "id": player_id,
      'clan_user': user._id
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.BACKEND_URL}/leave_clan`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response: any) => {

        if(response.data.success){
          window.location.reload()
          console.log(JSON.stringify(response.data));
        }else{
          errorMessage(response.data.message)
        }
      })
      .catch((error: any) => {
        console.log(error);
        errorMessage(error.message)

      });

  }

  const handleEditeChange=(e,id,item)=>{
    const val=e.target.value
    if(val=="upgrade")
      handelUserLevel(id,1)
    else if(val=="downgrade")
      handelUserLevel(id,0)
  else if(val=="remove")
    handleRemovePlayer(id)
  
    e.target.value="Edite ->"

  }

  function PopUpEditMenu() {
    return (
      <ul style={{

      }} className="poupup_menue">
        <li onClick={e => handelUserLevel(player_id, 0)}>Upgrade</li>
        <li onClick={e => handelUserLevel(player_id, 1)}>Downgrade</li>
        <li onClick={e => handleRemovePlayer(player_id)}>Remove</li>
      </ul>
    );
  }


  useEffect(()=>{
    getPlayers()
    console.log
  },[currentPagePlayers])


  return (
    <section style={{ paddingTop: '50px' }} className="trendingNft-area section-pt-50 section-pb-90">
      <div className="container">
        <div className="trendingNft__title-wrap">
          <div className="row">
            <div className="col-md-6">
              <button
                onClick={(e) => setPopUpMenu(!popUpMenu)}
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  borderRadius: '10px',
                  background: '#0f161b'
                }} className="nav-link active left">Add Member</button>
              {popUpMenu && handleAddMemberMenue()}
            </div>

            <div className="col-md-3">
              
            Members: {totatlplayers}
</div>
            <div className="col-md-3">
              <div className="trendingNft__nav">
                <button disabled={currentPagePlayers-1<1} onClick={()=>setCurrentPagePlayers(currentPagePlayers-1)} className="slider-button-prev"><i className="fas fa-angle-left"></i></button>
                <button disabled={currentPagePlayers + 1>totalPagePlayers} onClick={()=>setCurrentPagePlayers(currentPagePlayers+1)} className="slider-button-next"><i className="fas fa-angle-right"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-container trendingNft-active row" style={{ gap: '0 60px' }}>
          {clanMembers.map((item: any) => (
            // <SwiperSlide key={item._id}>
            <div style={{
              maxWidth: '350px',
              maxHeight: '350px'
            }} className="trendingNft__item">
              <div className="trendingNft__item-top">
                <div className="trendingNft__item-avatar">
                  <div className="image">
                    <Link href={`/players/${item._id}`}>
                      <Image style={{ height: '50px' }} src={item.role == 2 ? gold : item.role == 1 ? silver : pronze} alt="img" />
                    </Link>
                  </div>
                  <div className="info">
                    <h6 title={item.global_name} className="name">{item.global_name}</h6>
                    <Link href={`/players/${item._id}`} className="userName">{item.role == 2 ? "Owner" : item.role == 1 ? "Co-Owner" : "Player"}</Link>
                  </div>
                </div>
              </div>
              <div className="trendingNft__item-image">
                <Link href={`/players/${item._id}`}>
                  <img src={item.avatare} alt="img" style={{ width: '100%', maxHeight: '180px' }} />
                </Link>
              </div>
              <div className="trendingNft__item-bottom">
                <div title={item.activigion_name} className="trendingNft__item-price">
                  <h6 className="eth"><i className="fab fa-ethereum"></i> <span  style={{
                    maxWidth:"130px",
                    textOverflow: "ellipsis",
whiteSpace: 'nowrap',
overflow: 'hidden'
}}>{item.activigion_name} </span></h6>
                </div>
                {/* <a onClick={()=> {setPlayerId(item._id); setPopUpEditeMenu(!popUpEditeMenu)}} className="bid-btn">Edite */}
                {user._id!=item._id?(<select onChange={e=>handleEditeChange(e,item._id,this)} style={{fontSize:'16px',padding:"10px 10px"}} className="bid-btn">
                <option style={{color:'white',background:'#0f161b'}} selected disabled className='poupup_menue' value="Edite ->">Edite</option>
                <option style={{color:'white',background:'#0f161b'}} className='poupup_menue' value="upgrade">Upgrade</option>
        <option style={{color:'white',background:'#0f161b'}} className='poupup_menue' value="downgrade">Downgrade</option>
        <option style={{color:'white',background:'#0f161b'}} className='poupup_menue' value="remove">Remove</option>
                </select>):null}
                
                {/* <i className="fas fa-long-arrow-alt-right"></i></a> */}
              </div>

            </div>

            // </SwiperSlide>
          ))}


        </div>
      </div>
    </section>
  );
};

export default CardsArea;