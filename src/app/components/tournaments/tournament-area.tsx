'use client'
import React, { useEffect, useState } from 'react';
import tournament_data from '@/data/tournament-data';
import TournamentBox from './tournament-box';
import TextAnimation from '../common/text-animation';
import Link from 'next/link';
import Pagination from '@/context/pagination';

const TournamentArea = () => {
  const [matches,setMatches]=useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [ totalPage, setTotalPage ] = useState(1);

  useEffect(()=>{
    const getMatches=()=>{
      const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `${process.env.BACKEND_URL}/get_matches?page=${currentPage}`,
  headers: { }
};

axios.request(config)
.then((response:any) => {
  setMatches(response.data.data);
  setTotalPage(Math.ceil(response.data.data.length/9))
})
.catch((error:any) => {
  console.log(error);
});

    }
    getMatches()
  },[])
  return (
    <section className="tournament-area section-pt-120 section-pb-90">
    <div className="container">
        <div className="tournament__wrapper">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                    <div className="section__title text-center mb-60">
                        <TextAnimation title='our tournament' />
                        <h3 className="title">play to earn games</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center gutter-25">
              {matches!=null&&matches.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                  <Link itemProp={item} href={`/tournament/${item.match._id}`} >
                    <TournamentBox item={item} />
                    </Link>
                </div>
              ))}
            </div>
        </div>
        <Pagination
            setCurrentPage={setCurrentPage}
             totalPage={totalPage}
              currentPage={currentPage}
            />

    </div>
  </section>
  );
};

export default TournamentArea;