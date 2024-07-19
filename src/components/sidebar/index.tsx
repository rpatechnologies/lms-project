import React, { useState, useEffect } from "react";
import s from "./sidebar.module.css";
import Link from "next/link";
import getAxiosInstance from "@/utils/axiosInstance";
import { getRefreshToken, getToken, removeTokenCookie } from "@/utils/authUtils";
import { useRouter } from "next/router";

function Sidebar() {


  const router = useRouter();
  const token = getToken()
  useEffect(() => {

    if (!token) {
       router.push('/login')
    }
  }, [router, token])

  const [activeLink, setActiveLink] = useState("Dashboard");
  const handleNavLinkClick = (link: any) => {
    setActiveLink(link);
  };
  const handleLogout = () => {
    const refreshToken = getRefreshToken();
    getAxiosInstance().post('/auth/logout', {
      refreshToken
    }).then((res) => {
      removeTokenCookie()
      router.push('/login')
      console.log({ res });

    })
  }
  const navItems = [
    {
      id: "Dashboard",
      text: "Dashboard",
      activeImg: "activeHome.png",
      inactiveImg: "inactiveHome.png",
    },
    {
      id: "Courses",
      text: "Courses",
      activeImg: "activeCourses.png",
      inactiveImg: "inactivecourse.png",
    },
    {
      id: "Reminders",
      text: "Reminders",
      activeImg: "activeReminders.png",
      inactiveImg: "inactiveReminders.png",
    },
    {
      id: "Settings",
      text: "Settings",
      activeImg: "activeSettings.png",
      inactiveImg: "inactiveSettings.png",
    },
    {
      id: "Log out",
      text: "Log out",
      activeImg: "activeSettings.png",
      inactiveImg: "inactiveSettings.png",
      action: handleLogout
    },
  ];

  // useEffect to set initial active state when component mounts
  useEffect(() => {
    // Set initial active link here if needed
    setActiveLink("Dashboard");
  }, []);


  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 py-5 bg-light ${s.sidebar}`}
      style={{ width: "280px", height: "100vh" }}
    >
      <Link
        href="/"
        className="d-flex align-items-center  justify-content-center mb-4 link-dark text-decoration-none"
      >
        <span className="fs-4">
          <img src="assets/images/AP4-logo_.png" alt="" />
        </span>
      </Link>
      <ul className="nav nav-pills flex-column mb-auto">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item mt-3" onClick={item.action}>
            <Link
              href="#"
              className={`nav-link ${s.navLink} ${activeLink === item.id ? s.active : ""
                }`}
              onClick={() => handleNavLinkClick(item.id)}
            >
              {activeLink === item.id ? (
                <img src={`assets/images/${item.activeImg}`} alt="" />
              ) : (
                <img src={`assets/images/${item.inactiveImg}`} alt="" />
              )}
              <span style={{ marginLeft: "15px" }} >{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;


