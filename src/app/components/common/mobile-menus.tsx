import Link from "next/link";
import React, { useState } from "react";
import menu_data from "@/data/menu-data";
import { signout } from "@/hooks/auth";
import SvgIconCom from "./svg-icon-anim";
import shape from '@/assets/img/icons/shape02.svg'
import { useRouter } from "next/navigation";

const MobileMenus = (user) => {
  const [navTitle, setNavTitle] = useState<string>("");
  const router=useRouter()
  //openMobileMenu
  const clientId = "1202268878965571604";
  const redirectUri = "http://localhost:3000/api/auth/callback";
  const handleDiscordSignIn = () => {
    const path = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify`;
    router.push(path)
  };

  const openMobileMenu = (menu: string,audioPath:string) => {
    const audio = new Audio(audioPath);
    audio.play();
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  const handleLogOut=()=>{
    signout()
  }
console.log(user)
  return (
    <ul className="navigation">
      {menu_data.map((menu, i) => (
        <React.Fragment key={i}>
          {menu.sub_menu && (
            <li className="menu-item-has-children">
              <Link href={menu.link}>{menu.title}</Link>
              <ul
                className="sub-menu"
                style={{
                  display: navTitle === menu.title ? "block" : "none",
                }}
              >
                {menu.sub_menu.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
              <div
                onClick={() => openMobileMenu(menu.title,'/assets/audio/click.wav')}
                className={`dropdown-btn ${
                  navTitle === menu.title ? "open" : ""
                }`}
              >
                <span className="plus-line"></span>
              </div>
            </li>
          )}

          {!menu.sub_menu && (
            <li>
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
                                               {user.user!=null?(           <li>
                                                    <a onClick={handleLogOut} href='#'>تسجيل خروج</a>
                                                    </li>):                       
                       <a onClick={(handleDiscordSignIn)} className={`${false?'tg-btn-3 tg-svg':'tg-border-btn'}`}>
                          {false && <SvgIconCom icon={shape} id="svg-2" />}
                          <i className="flaticon-edit"></i> ~تسجيل دخول
                        </a>
}

    </ul>
  );
};

export default MobileMenus;
