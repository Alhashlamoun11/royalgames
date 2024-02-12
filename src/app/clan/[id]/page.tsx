'use client'
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "@/app/components/breadcrumb/breadcrumb-area-3";
import product_data from "@/data/product-data";
import TeamDetails from "@/app/components/team/team_details_c";
import ErrorMsg from "@/app/components/common/err-message";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { File } from "buffer";
import { useEffect, useState } from "react";
import getClanData from "@/hooks/clanData";


// export const metadata: Metadata = {
//     title: "Shop Details Page",
// };

interface IFormInput {
    name: string;
    short_name: string;
    image:File;
    description: string;
  }
  
export default function Clan({params}:{params: { id: string }}) {
    const [image,setImage]=useState()
    const [clan,setClan]=useState(null);
    const [players,setPlayers]=useState({});
    const [challenges,setChallenges]=useState({});
    const [status,setStatus]=useState(0);

    useEffect(()=>{
      const axios = require('axios');

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BACKEND_URL}/get_clan_data/${params.id}`,
        headers: { }
      };
      
      axios.request(config)
      .then((response:any) => {
        setClan(response.data.data.clan[0])
        setChallenges(response.data.data.challenge)
        setPlayers(response.data.data.players)
        setStatus(1)
      })
      .catch((error:string) => {
        console.log(error);
      });
          },[status])

    return status==0?(
      <Wrapper>
        {/* header start */}
        <Header />
        <main className="main--area">
        <BreadcrumbAreaThree title='Loading...' subtitle='Team' />

        </main>
        <Footer />

        </Wrapper>
    ):(
        <Wrapper>
            {/* header start */}
            <Header />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">
                {/* breadcrumb area start */}
                <BreadcrumbAreaThree title={clan.name} subtitle='Team' />
                {/* breadcrumb area end */}

                {/* shop details area start */}
                <TeamDetails team={clan} challenges={challenges} players={players}/>
                {/* shop details area end */}

            </main>
            {/* main area end */}

            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    )}
