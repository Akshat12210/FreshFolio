import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BiTask } from 'react-icons/bi';
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from 'react'

const Layout = () => {
  const account_type=localStorage.getItem("account_type");
  const routes = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    account_type === "freelancer" ? { name: "Projects", link: "/projects", icon: BiTask } : { name: "Jobs", link: "/jobs", icon: MdOutlineDashboard },
    { name: "Profile", link: "/profile", icon: AiOutlineUser },
    { name: "Messages", link: "/messages", icon: FiMessageSquare },
    { name: "Analytics", link: "/analysis", icon: TbReportAnalytics },
    { name: "Accounting", link: "/accounting", icon: FiFolder },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);
  const [activeRoute, setActiveRoute] = useState("Main Dashboard");

  useEffect(() => {
    getActiveRoute(routes);
  }, [pathname]);

  const getActiveRoute = (routes) => {
    let val=false;
    for (let i = 0; i < routes.length; i++) {
      if(routes[i].link === pathname) {
        val=true;
        setActiveRoute(routes[i].name);
        break;
      }
    }
    if(!val){
      let str=pathname.substring(1);
      setActiveRoute(str.substring(0,str.indexOf('/')));    
    }
  };

  return (
    <div className='flex'>
      <div className="bg-sky-200 sticky h-screen top-0">
        <Sidebar open={open} setOpen={setOpen} routes={routes}/>
      </div>
      <div className="p-4 w-full bg-lightPrimary">
        <Navbar onOpenSidenav={() => setOpen(true)} brandText={activeRoute}/>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout