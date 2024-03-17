'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import product_data from '@/data/product-data';
import InputRange from '../ui/input-range';

const PlayerSideBar = ({topplayers,serachFunction,filterByWiningFunction}:any) => {
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
        <h4 className="shop__widget-title">بحث</h4>
        <div className="shop__widget-inner">
            <div className="shop__search">
                <input onChange={e=>setName(e.target.value)} type="text" placeholder="ابحث هنا"/>
                <button className="p-0 border-0"><i className="flaticon-search"></i></button>
            </div>
        </div>
    </div>
    <div className="shop__widget">
        <h4 className="shop__widget-title">تصفية حسب المتصدرين</h4>
        <div className="shop__widget-inner">
            <div className="shop__price-filter">
                <div id="slider-range">
                <InputRange
                    MAX={380}
                    MIN={0}
                    STEP={1}
                    values={priceValue}
                    handleChanges={handleChanges}
                />
                </div>
                <div className="shop__price-slider-amount">
                    <input type="submit" className="p-0 border-0" value="تصفية"/>
                    {/* <input type="text" id="amount" name="price" placeholder="Add Your Price" /> */}
                    <span className=''>{priceValue[0]} - {priceValue[1]}</span>
                </div>
            </div>
        </div>
    </div>
    <div className="shop__widget">
        <h4 className="shop__widget-title">افضل لاعبين</h4>
        <div className="shop__widget-inner">
            {topplayers.map((item:any) => (
            <div key={item._id} className="related__products-item">
                <div className="related__products-thumb">
                    <Link href={`/shop-details/${item._id}`}>
                        <img src={item.avatare} alt="img" width={78} height={80} />
                    </Link>
                </div>
                <div className="related__products-content">
                    <h4 className="product-name">
                        <Link href={`/shop-details/${item._id}`}>{item.global_name}</Link>
                    </h4>
                    <span className="amount">{item.win_num}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
</aside>
  );
};

export default PlayerSideBar;