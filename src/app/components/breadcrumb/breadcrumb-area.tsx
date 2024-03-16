import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import default_bg from '@/assets/img/bg/breadcrumb_bg01.jpg';
import background from '@/assets/img/bg/backgroun22.png';
import default_brd_img from '@/assets/img/others/breadcrumb_img01.png';

// props type
type IProps = {
    bg?:string,
    brd_img?:string,
    title:string;
    prevSuptitle?:string;
    subtitle:string;
}
const BreadcrumbArea = ({prevSuptitle="home",bg=default_bg.src,brd_img=default_brd_img,title,subtitle}:any) => {
  return (
    <section className="breadcrumb-area" style={{backgroundImage:`url(${bg})`}}>
    <div className="container">
        <div className="breadcrumb__wrapper">
            <div className="row">
                <div className="col-xl-6 col-lg-7">
                    <div className="breadcrumb__content">
                        <h2 className="title">{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="#">{prevSuptitle}</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{subtitle}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
                    <div style={{
                            /* min-width: 300px; */
    backgroundSize: 'contain',
    /* min-height: 200px; */
                            minWidth: '300px',
                            minHeight: '200px',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }} className="breadcrumb__img">
                        <img height={"auto"} src={typeof brd_img=='string'?brd_img:brd_img.src} alt="img" style={{minWidth:'200px',minHeight:'200px',borderRadius:'100px',marginTop:'7px',marginLeft:'50px',height:'auto',width:'auto'}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default BreadcrumbArea;