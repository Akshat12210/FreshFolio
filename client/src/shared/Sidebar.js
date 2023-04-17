import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Sidebar = (props) => {
  const {open, setOpen, routes } = props;
  const { pathname } = useLocation();
  
  return (
    <section className="flex gap-6">
      <div
        className={`bg-main min-h-screen ${open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-between">
          <div className={`${open ? 'font-semibold text-xl' : 'hidden'}`}>FreshFolio</div>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {routes?.map((menu, i) =>{
           return (
              <Link
                to={menu?.link}
                key={i}
                className={` ${menu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#e45858]  rounded-md  ${pathname === menu?.link ? "bg-[#e45858]" : ""}`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre z-50 duration-500 ${!open && "z-40 opacity-0 translate-x-28 overflow-hidden"
                    }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${open && "hidden"
                    } absolute  left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 z-30 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            )
          }
           )}
        </div>
      </div>
    </section>
  )
}

export default Sidebar