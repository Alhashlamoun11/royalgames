import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import team_data from "@/data/team-data";
import bg from '@/assets/img/bg/team_bg.jpg';
import TextAnimation from "../common/text-animation";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "@/context/pagination";

const BlackListArea = () => {
    const [players,setPlayers]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [ totalPage, setTotalPage ] = useState(1);

    const getBlackListPlayers = () => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.BACKEND_URL}/get_black_list?page=${currentPage}`,
            headers: {}
        };

        axios.request(config)
            .then((response: any) => {
                if (response.data.success) {
                    setPlayers(response.data.data)
                    setTotalPage(Math.ceil(response.data.data.length/9))
                // console.log(players)
        
                }else{
                    Swal.fire({
                        title:"Error!",
                        text:response.data.message,
                        icon:'error'
                    })
                }
                console.log(JSON.stringify(response.data));
            })
            .catch((error: any) => {
                Swal.fire({
                title:"error",
                text:error.message,
                icon:'error'
            })
                console.log(error);
            });

    }

    useEffect(()=>{
        getBlackListPlayers()
    },[currentPage])
    return (
    <section
      className="team__area team-bg section-pt-130 section-pb-100"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="Black List" />
              <h3 className="title">Black List Players</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {players.map((t:any, i) => (
            <div
              key={t._id}
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay={`.${i + 1}s`}
            >
              <div className="team__item">
                <div className="team__thumb">
                  <Link href="/team-details">
                    <img src={t.avatare} alt="img" style={{width:'100%',height:'auto'}} />
                  </Link>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <Link href="/team-details">{t.global_name}</Link>
                  </h4>
                  <span className="designation">{t.activigion_name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
            <Pagination
            setCurrentPage={setCurrentPage}
             totalPage={totalPage}
              currentPage={currentPage}
            />
      </div>

      </div>
    </section>
  );
};
  

export default BlackListArea;
