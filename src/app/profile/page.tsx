'use client'
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import brd_bg from "@/assets/img/bg/breadcrumb_bg01.jpg";
import { useEffect, useState } from "react";
import { getUserData } from "@/hooks/userData";
import { auth } from "@/hooks/auth";
import Swal from "sweetalert2";
import AllInvites from "../components/invites/all-invites";
import PlayerInfoArea from "../components/players/player-info-area";

// export const metadata: Metadata = {
//   title: "Team Details Page",
// };

export default function TeamDetailsPage() {
  const [user,setUser]= useState(Object)
  const [invites,setInvites]= useState([])

  const answer=({status,invite_id,clan_id}:any)=>{
    const axios = require('axios');
    let data = JSON.stringify({
      "id": invite_id,
      "user_id": user._id,
      "clan_id": clan_id,
      "status": status
    });
    
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `${process.env.BACKEND_URL}/answer_invite`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response:any) => {
  if(status==1)
    Swal.fire("Success", response.data.message, "success");
  else
    Swal.fire("Declined", response.data.message, "info");

    window.location.reload();
})
.catch((error:any) => {
  Swal.fire("something went wrong", "", "error");
});

  }
  const handleAnswer=(id:string,clan_id:string)=>{
    Swal.fire({
      title: "Do you want to Accepte the Invite ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Accepte",
      denyButtonText: `Decline`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        answer({
          status:1,invite_id:id,clan_id:clan_id
        })
      } else if (result.isDenied) {
        answer({
          status:0,invite_id:id,clan_id:clan_id
        })

        Swal.fire("Declined", "", "info");
      }
    });
      }
  useEffect(()=>{
    getUserData(user,setUser)

    if(!auth()){
      window.location.href='/'

    }else{
    }
    // console.log(user)
  },[])

  useEffect(()=>{
    const getInvites=()=>{
      const axios = require('axios');

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BACKEND_URL}/get_invites/${user._id}`,
        headers: { }
      };
      
      axios.request(config)
      .then((response:any) => {
        setInvites(response.data.data)
        // console.log(JSON.stringify(response.data));
      })
      .catch((error:any) => {
        // console.log(error);
      });
      
    }
  

    if(!auth()){
      window.location.href='/'

    }else{
      getInvites()
    }

  },[user])
  if(user==null){
    window.location.href='/'
  }

  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbArea
        prevSuptitle="Activigion Name: "
          title={user.username}
          subtitle={user.activigion_name}
          bg={brd_bg.src}
          
          brd_img={user.avatare}
        />
        {/* breadcrumb area end */}

        {/* team info start */}
        <PlayerInfoArea user={user}/>
        {/* team info end */}
          <div className="container">
        <div className="row">
                  <div className="col-12">
                      <div className="product__desc-wrap">
                          <ul className="nav nav-tabs" id="descriptionTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="invites-tab" data-bs-toggle="tab" data-bs-target="#invites" type="button" role="tab" aria-controls="invites" aria-selected="true" tabIndex={-1}>Invites</button>
                              </li>
                              {/* <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false" tabIndex={-1}>Additional Information</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false" tabIndex={-1}>Reviews (0)</button>
                              </li> */}
                          </ul>
                          <div className="tab-content" id="descriptionTabContent">
                              <div className="tab-pane animation-none fade show active" id="invites" role="tabpanel" aria-labelledby="invites-tab">
                              <div className="row">
            <div className="col-12">
              <div className="tournament__list-item-wrapper">
                {invites!=null?invites.map((item:any, i) => (
                  <AllInvites key={i} handleAnswer={handleAnswer} item={item} data={item.clan_id} index={i} />
                )):(<h5>No Data Found</h5>)}
              </div>
            </div>
          </div>

                              </div>
                              {/* <div className="tab-pane animation-none fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                  <table className="table table-sm">
                                      <tbody>
                                          <tr>
                                              <th scope="row">General</th>
                                              <td>PS5 Digital Platform</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">Technical Information</th>
                                              <td>Qualcomm Snapdragon XR2</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">Display</th>
                                              <td>3664 x 1920</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">RAM & Storage</th>
                                              <td>8GB/256GB</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">Included</th>
                                              <td>PS5 VR Streaming Assistant</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              <div className="tab-pane animation-none fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                  <div className="product__desc-review">
                                      <div className="product__desc-review-title mb-15">
                                          <h5 className="title">Customer Reviews (0)</h5>
                                      </div>
                                      <div className="left-rc">
                                          <p>No reviews yet</p>
                                      </div>
                                      <div className="right-rc">
                                          <Link href="#">Write a review</Link>
                                      </div>
                                  </div>
                              </div> */}
                          </div>
                      </div>
                  </div>
              </div>
              </div>
        {/* team details area start */}
        {/* <TeamDetailsArea /> */}
        {/* team details area end */}


        {/*  */}
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
