'use client'
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "@/app/components/breadcrumb/breadcrumb-area";
import brd_bg from "@/assets/img/bg/breadcrumb_bg01.jpg";
import brd_img from "@/assets/img/team/breadcrumb_team.png";
import TeamInfoArea from "@/app/components/team/team-info-area";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { getUserData } from "@/hooks/userData";
import { auth } from "@/hooks/auth";
import Swal from "sweetalert2";
import BreadcrumbAreaThree from "@/app/components/breadcrumb/breadcrumb-area-3";
import PlayerInfoArea from "@/app/components/players/player-info-area";

// export const metadata: Metadata = {
//   title: "Team Details Page",
// };


export default function TeamDetailsPage({params}:{params: { id: string }}) {
  const [user,setUser]= useState(Object)
  const [invites,setInvites]= useState([])

  useEffect(()=>{
    const getUserData=()=>{

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `${process.env.BACKEND_URL}/get_user/${params.id}`,
  headers: { }
};

axios.request(config)
.then((response:any) => {
  setUser(response.data)
})
.catch((error:any) => {
  console.log(error);
});

    }
    getUserData()
  },[])
  
  return user?(
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
      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  ):(
    <Wrapper>
    {/* header start */}
    <Header />
    {/* header end */}
    <main className="main--area">
    <BreadcrumbAreaThree title='Loading...' subtitle='Profile' />

</main>
    {/* main area start */}
    <Footer/>
</Wrapper>
  );
}
