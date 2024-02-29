'use client'
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import product_data from "@/data/product-data";
import TeamDetails from "../components/team/team_details_c";
import ErrorMsg from "../components/common/err-message";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { File } from "buffer";
import { useEffect, useState } from "react";
import getClanData from "@/hooks/clanData";
import Swal from "sweetalert2";
import axios from "axios";
import { getUserData } from "@/hooks/userData";
import { useRouter } from "next/navigation";
import { get } from "local-storage";


// export const metadata: Metadata = {
//     title: "Shop Details Page",
// };

interface IFormInput {
    name: string;
    short_name: string;
    image:File;
    description: string;
  }
  
export default function MyTeam() {
    const [image,setImage]=useState(null)
    const [clan,setClan]=useState(null);
    const [players,setPlayers]=useState({});
    const [challenges,setChallenges]=useState({});
    const [status,setStatus]=useState(0);
    const [user,setUser]=useState(Object);
  
    const router=useRouter();
    if (user == null) {
        // Access localStorage here
        router.push('/')
  
    }
    const team = user.clan_id
    useEffect(()=>{
      const getClan_data=()=>{

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: process.env.BACKEND_URL+'/get_clan_data/'+user.clan_id._id,
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
  
      }
      if(user.clan_id&&user.clan_id._id!=null){
        getClan_data();
      }else{
        setStatus(1)

      }
        // Access localStorage here
        setUser((get('user')!))

      console.log(players)
          },[status])
    const handleSubmiteForm= (data:any)=>{
        if (!image){
          Swal.fire({
            title:"ERROR!",
            text:"choose clan image please",
            icon:'error'
          })
          return}
        const FormData = require('form-data');
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('short_name', data.short_name);
        formData.append('owner_id', user._id);
        formData.append('image', image);
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.BACKEND_URL}/create_clan`,
          headers: { 
            'Content-Type': 'multipart/form-data',
          },
          data : formData
        };
        
        axios.request(config)
        .then((response) => {
          getUserData()
            router.refresh()
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
        
    
        reset()
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

    return status==0?(
      <Wrapper>
        {/* header start */}
        <Header style_2={true}/>
        <main className="main--area">
        <BreadcrumbAreaThree title="Loading..." subtitle='Team' />
        </main>
        </Wrapper>
    ):user.clan_id != null ? (
        <Wrapper>
            {/* header start */}
            <Header style_2={true}/>
            {/* header end */}

            {/* main area start */}
            <main className="main--area">
                {/* breadcrumb area start */}
                <BreadcrumbAreaThree title={team.name} subtitle='Team' />
                {/* breadcrumb area end */}

                {/* shop details area start */}
                <TeamDetails team={user.clan_id} challenges={challenges} players={players}/>
                {/* shop details area end */}

            </main>
            {/* main area end */}

            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    ) : <Wrapper>
        {/* header start */}
<Header />
        {/* header end */}

        {/* main area start */}
        <main className="main--area">
            {/* breadcrumb area start */}
            <BreadcrumbAreaThree title={team ? team.name : "Create Clan"} subtitle='Clan' />
            {/* breadcrumb area end */}

    <section className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="contact__content">
              <h2 className="overlay-title">
                <span>join us</span>
              </h2>
              <h2 className="title">CONTACT US AND FIND YOUR mykd</h2>
              <p>
                Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor
              </p>
              <div className="footer-el-widget">
                <h4 className="title">information</h4>
                <ul className="list-wrap">
                  <li>
                    <Link href="tel:123">+971 333 222 557</Link>
                  </li>
                  <li>
                    <Link href="mailto:info@exemple.com">info@exemple.com</Link>
                  </li>
                  <li>New Central Park W7 Street, New York</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="contact__form-wrap">
            <section className="shop-area shop-details-area">
                <div className="container">
                    <center>
                        <h1>You Didn't Joined Team Yet</h1>
                    </center>
                    <form encType="multipart/form-data" onSubmit={handleSubmit(handleSubmiteForm)} id="contact-form">
      <div className="row">
        <div className="col-sm-6">
          <ErrorMsg msg={errors.name?.message as string} />
          <div className="input-grp">
            <input {...register("name", { required: `Name is required!` })} name="name" id="name" type="text" placeholder="Team Name *" />
          </div>
        </div>
        <div className="col-sm-6">
          <ErrorMsg msg={errors.short_name?.message as string} />
          <div className="input-grp">
            <input {...register("short_name")} name="short_name" id="short_name" type="text" placeholder="Team Short Description *" />
          </div>
        </div>
        <div className="col-sm-6">
          <ErrorMsg msg={errors.image?.message as string} />
          <div className="input-grp">
            <input {...register("image")} name="image" id="image" 
                    onChange={(e:any) => setImage(e.target!=null?e.target.files[0]:null)}
            type="file"/>
          </div>
        </div>
        <div className="col-sm-9">
          <ErrorMsg msg={errors.description?.message as string} />
          <div className="input-grp">
            <textarea placeholder="Clan Description" {...register("description")} name="description" id="description"></textarea>
          </div>
        </div>

      </div>
      <button type="submit" className="submit-btn">Submit Now</button>
    </form>

                </div>
            </section>
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </main>
        {/* main area end */}

        {/* footer start */}
        <Footer />
        {/* footer end */}
    </Wrapper>;
}
