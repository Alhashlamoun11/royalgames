import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo/royal_logo.png';
import icon_1 from '@/assets/img/icons/social_icon01.png';
import icon_2 from '@/assets/img/icons/social_icon02.png';
import icon_3 from '@/assets/img/icons/social_icon03.png';
import icon_4 from '@/assets/img/icons/social_icon04.png';
import payment from '@/assets/img/others/payment_card.png';

const Footer = () => {
  return (
    <footer className="footer-style-one">
      <div className="footer__top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <div className="footer-logo logo">
                  <Link href="/contact">
                    <Image src={logo} alt="Logo" width={177} height={40} />
                  </Link>
                </div>
                <div className="footer-text">
                        <p className="desc">رويال جيمز جهة تنظيمية مختصة في تنظيم البطولات في مجال الرياضات الإلكترونية
بشتى أنواعها.
اختصت رويال جيمز مجال تنظيم البطولات من عام 2010 وقامت بتنظيم العديد من البطولات</p>
                  <p className="social-title">Active <span>With Us <i className="fas fa-angle-double-right"></i></span></p>
                  <div className="footer-social">
                    <Link href="#"><Image src={icon_1} alt="iocn" width={30} height={30} /></Link>
                    <Link href="#"><Image src={icon_2} alt="iocn" width={30} height={30} /></Link>
                    <Link href="#"><Image src={icon_3} alt="iocn" width={30} height={30} /></Link>
                    <Link href="#"><Image src={icon_4} alt="iocn" width={30} height={30} /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">quick link</h4>
                <ul className="list-wrap menu">
                  <li><Link href="/cheat-app">OUR APP</Link></li>
                  <li><Link href="/tutorials">TUTORIALS</Link></li>
                  <li><Link href="/tornament">TOURNAMENT</Link></li>
                  <li><Link href="/my-team">My TEAM</Link></li>
                  <li><Link href="/profile">PROFILE</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                {/* <h4 className="fw-title">Supports</h4> */}
                <ul className="list-wrap menu">
                  <li><Link href="/players">Players</Link></li>
                  <li><Link href="/streamers">Streamers</Link></li>
                  <li><Link href="/clans">CLANS</Link></li>
                  <li><Link href="black-list">BLACK LIST</Link></li>
                  <li><Link href="#">ABOUT</Link></li>
                  <li><Link href="#">HOME</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copyright__text">
                <p>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span>ROYAL GAMES</span></p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="copyright__card text-center text-md-end">
                <Image src={payment} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;