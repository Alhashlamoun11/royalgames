'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import product_data from '@/data/product-data';

const StreamersSideBar = ({topplayers,serachFunction,filterByWiningFunction}:any) => {
  const related__products = product_data.slice(0,3);
  const [priceValue,setPriceValue] = useState([0,380]);
  const [name,setName] = useState('');
  // handleChanges
  const handleChanges = (val: number[]) => {
    setPriceValue(val);
    // console.log(val)
  };

  useEffect(()=>{
    serachFunction(name,priceValue)
  },[name,priceValue])
  return (
    <aside className="shop-sidebar">
    <div className="shop__widget">
        {/* <h4 className="shop__widget-title">search</h4>
        <div style={{background:'#1d152a'}} className="shop__widget-inner">
            <div className="shop__search">
                <input onChange={e=>setName(e.target.value)} type="text" placeholder="Search here"/>
                <button className="p-0 border-0"><i className="flaticon-search"></i></button>
            </div>
        </div> */}
    </div>
    <div style={{background:'#1d152a'}} className="shop__widget">
        <h4 className="shop__widget-title">Top Streamers</h4>
        <div style={{background:'#1d152a'}} className="shop__widget-inner">
            {topplayers.map((item:any) => (
            <div key={item._id} className="related__products-item">
                <div className="related__products-thumb">
                    <Link href={`/profile/${item.user_id._id}`}>
                        <Image src={item.user_id.avatare} alt="img" width={78} height={80} />
                    </Link>
                </div>
                <div className="related__products-content">
                    <h4 className="product-name">
                        <Link href={`/profile/${item.user_id._id}`}>{item.user_id.global_name}</Link>
                    </h4>
                    <span className="amount">{item.user_id.win_num}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
</aside>
  );
};

export default StreamersSideBar;