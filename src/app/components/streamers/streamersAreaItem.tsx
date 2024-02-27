import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import PlayerSideBar from '../players/players-side-bar';
import PlayerCard from '../players/player-card';
import Pagination from '@/context/pagination';
import StreamersSideBar from './StreamersSideBar';


const StreamersAreaItem = ({ data }: any) => {
    const [players, setPlayers] = useState([])
    const [topplayers,setTopPlayers]=useState([])
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [ totalPage, setTotalPage ] = useState(1);

    const getAllStreamers = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.BACKEND_URL}/getStreamers?page=${currentPage}`,
            headers: {}
        };

        axios.request(config)
            .then((response: any) => {
                if (response.data.success) {
                    setPlayers(response.data.data)
                    setTotalPage(Math.ceil(response.data.data.length/9))
                    setTopPlayers(response.data.data.slice(0,3))
                console.log(players)
        
                }
                console.log(JSON.stringify(response.data));
            })
            .catch((error: any) => {
                console.log(error);
            });

    }

    const handleSearchPlayers = (e: any, win_num?: any) => {
        let url = `${process.env.BACKEND_URL}/getStreamers/`
        if (e == '' && win_num[0] == 0, win_num == 380)
        // getAllStreamers()

        if (e != '') {
            url += `${e}/${win_num[0]}/${win_num[1]}`
        }else{
            url += `${win_num[0]}/${win_num[1]}`
        }
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: {}
        };

        axios.request(config)
            .then((response: any) => {
                // console.log(JSON.stringify(response.data));
                // setPlayers(response.data.data)
            })
            .catch((error: any) => {
                console.log(error);
            });

    }

    useEffect(() => {
        getAllStreamers()
    }, [currentPage])

    return (
        <section className="shop-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-11 order-2 order-lg-0">
                        {/* sidebar start */}
                        <StreamersSideBar topplayers={topplayers} serachFunction={handleSearchPlayers} />
                        {/* sidebar end */}
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-11">
                        <div className="shop__top-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-sm-6">
                                    <div className="shop__showing-result">
                                        <p>Showing {from} - {to} of {players&&players.length} results</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section style={{ paddingTop: '50px' }} className="trendingNft-area section-pt-50 section-pb-90">
                            <div className="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1">
                            {players&&players.map((item:any,i) => item.user_id ? (
                                    <div key={i} className='col'>
                <div className="streamers__item">
                    <div className="streamers__thumb">
                        <Link href={`/profile/${item.user_id._id}`}>
                          <img src={item.user_id.avatare} alt="img" style={{height:'auto',width:'100%'}} />
                        </Link>
                    </div>
                    <div style={{bottom:"5px"}} className="streamers__content">
                    <h4 className="name">{item.user_id.global_name}</h4>
                    <span className="name">{item.job}</span>
                    </div>
                </div>
                                    </div>
                                ) : null)}
                            </div>
                        </section>
                        <Pagination
            setCurrentPage={setCurrentPage}
             totalPage={totalPage}
              currentPage={currentPage}
            />

                        {/* <div className="pagination__wrap">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center">
                                <li><Link href="#" className="page-numbers">01</Link></li>
                                <li><span className="page-numbers current">02</span></li>
                                <li><Link href="#" className="page-numbers">03</Link></li>
                                <li><Link href="#" className="page-numbers">....</Link></li>
                                <li>
                                    <Link href="#" className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StreamersAreaItem;