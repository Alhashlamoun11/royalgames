'use client'
import React,{useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/img/logo/royal_logo.png';

const FooterTwo = () => {
  useEffect(() => {
    if (!!window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-footer");
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: "0px 0px -100px 0px"
      });

      document.querySelectorAll('.has-footer-animation').forEach(block => {
        observer.observe(block);
      });
    } else {
      document.querySelectorAll('.has-footer-animation').forEach(block => {
        block.classList.remove('has-footer-animation');
      });
    }
  }, []);
  return (
    <footer  className="has-footer-animation">
        <div className="footer__country">
            <div className="container custom-container">
                <div className="row">
                    {/* <div className="col-6">
                        <div className="footer__country-name">
                            <h2 className="text">.</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="footer__country-name text-center text-sm-end">
                            <h2 className="text">.</h2>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="footer__two-widgets">
            <div className="container custom-container">
                <div className="row">
                <div className="col-md-4 col-sm-5 order-0 order-md-2">
                        <div className="footer-el-widget text-start text-md-center widget_nav_menu">
                            <div className="footer-el-logo mb-35">
                            <Link href="/">
                                    <h5>روابط سريعة </h5>
                                </Link>
                            </div>
                            <div className="footer-el-menu">
                            <ul className="list-wrap">
                                    <li><Link href="/">الرئيسية</Link></li>
                                    <li><Link href="/about">من نحن</Link></li>
                                    <li><Link href="/tournament">المنافسات</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-5 order-0 order-md-2">
                        <div className="footer-el-widget text-start text-md-center widget_nav_menu">
                            <div className="footer-el-logo mb-35">
                                <Link href="/">
                                  <Image src={logo} alt="Mykd" style={{height:'auto'}}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-5 order-0 order-md-2">
                        <div className="footer-el-widget text-start text-md-center widget_nav_menu">
                            <div className="footer-el-logo mb-35">
                                <Link href="/">
                                    <h5>روابط سريعة </h5>
                                </Link>
                            </div>
                            <div className="footer-el-menu">
                                <ul className="list-wrap">
                                <li><Link href="/players">اللاعبين</Link></li>
                                    <li><Link href="/clans">الفرق</Link></li>
                                    <li><Link href="/streamers">صناع المحتوى</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className="copyright__wrap -style-two">
            <div className="container custom-container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="copyright__text text-center text-lg-start">
                <p>حقوق النسخ © {new Date().getFullYear()} - جميع الحقوق محفوظة <span>Royal Games</span></p>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright__menu">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                {/* <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/contact">Join our team</Link></li>
                                <li><Link href="/contact">Privacy Policy</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default FooterTwo;