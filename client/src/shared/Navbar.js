import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import Dropdown from "./dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link, useNavigate  } from "react-router-dom";
// import navbarimage from "assets/img/layout/Navbar.png";
import { BsArrowBarUp, BsFillPersonFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
// import avatar from "assets/img/avatars/avatar4.png";
const Navbar = (props) => {
  const { profile } = useContext(ProfileContext);
  const { onOpenSidenav, brandText } = props;
  const navigate = useNavigate();
  function handleLogout() {
    navigate('/', { replace: true });
  }
  return (
    <nav className="sticky top-4 z-10 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl  ">
    <div className="ml-[6px]">
      {/* <div className="h-6 w-[224px] pt-1">
        <a
          className="text-sm font-normal text-blue-700 hover:underline"
          href=" "
        >
          Pages
          <span className="mx-1 text-sm text-blue-700 hover:text-blue-700 ">
            {" "}
            /{" "}
          </span>
        </a>
        <Link
          className="text-sm font-normal capitalize text-blue-700 hover:underline"
          to="#"
        >
          {brandText}
        </Link>
      </div> */}
      <p className="shrink text-[33px] capitalize text-blue-700 ">
        <Link
          to="#"
          className="font-bold capitalize hover:text-blue-700 "
        >
          {brandText}
        </Link>
      </p>
    </div>

    <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500  md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
      <div className="flex h-full items-center rounded-full bg-[#F4F7FE] text-blue-700  xl:w-[225px]">
        <p className="pl-3 pr-2 text-xl">
          <FiSearch className="h-4 w-4 text-gray-400 " />
        </p>
        <input
          type="text"
          placeholder="Search..."
          class="block h-full w-full rounded-full bg-[#F4F7FE] text-sm font-medium text-blue-700 outline-none placeholder:!text-gray-400 sm:w-fit"
        />
      </div>
      <span
        className="flex cursor-pointer text-xl text-gray-600  xl:hidden"
        onClick={onOpenSidenav}
      >
        <FiAlignJustify className="h-5 w-5" />
      </span>
      {/* start Notification */}
      <Dropdown
        button={
          <p className="cursor-pointer">
            <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 " />
          </p>
        }
        animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        children={
          <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500   sm:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-blue-700 ">
                Notification
              </p>
              <p className="text-sm font-bold text-blue-700 ">
                Mark all read
              </p>
            </div>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="font-base text-left text-xs text-gray-900 ">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="font-base text-left text-xs text-gray-900 ">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>
          </div>
        }
        classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
      />
      {/* start Horizon PRO */}
      <Dropdown
        button={
          <p className="cursor-pointer">
            <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 " />
          </p>
        }
        children={
          <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500  ">
            <div
              style={{
                backgroundImage: ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="mb-2 aspect-video w-full rounded-lg"
            />
            <a
              target="blank"
              href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700  "
            >
              Buy Horizon UI PRO
            </a>
            <a
              target="blank"
              href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-blue-700 transition duration-200 hover:bg-gray-200 hover:text-blue-700 "
            >
              See Documentation
            </a>
            <a
              target="blank"
              href="https://horizon-ui.com/?ref=live-free-tailwind-react"
              className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-blue-700 transition duration-200 hover:text-blue-700  "
            >
              Try Horizon Free
            </a>
          </div>
        }
        classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
        animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
      />
      <div
        className="cursor-pointer text-gray-600"
        // onClick={() => {
        //   if (darkmode) {
        //     document.body.classList.remove("dark");
        //     setDarkmode(false);
        //   } else {
        //     document.body.classList.add("dark");
        //     setDarkmode(true);
        //   }
        // }}
      >
        {true ? (
          <RiSunFill className="h-4 w-4 text-gray-600 " />
        ) : (
          <RiMoonFill className="h-4 w-4 text-gray-600 " />
        )}
      </div>
      {/* Profile & Dropdown */}
      <Dropdown
        button={
          // <img
          //   className="h-10 w-10 rounded-full"
          //   src=""
          //   alt="Elon Musk"
          // />
          <BsFillPersonFill className="h-10 w-10 rounded-full" />
        }
        children={
          <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500  ">
            <div className="mt-3 ml-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-blue-700 ">
                  👋 Hey, {profile.username}
                </p>{" "}
              </div>
            </div>
            <div className="mt-3 h-px w-full bg-gray-200" />

            <div className="mt-3 ml-4 flex flex-col">
              <a
                href=" "
                className="text-sm text-gray-800  hover:"
              >
                Profile Settings
              </a>
              <a
                href=" "
                className="mt-3 text-sm text-gray-800  hover:"
              >
                Newsletter Settings
              </a>
              <p
                onClick={() => handleLogout()}
                className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 cursor-pointer"
              >
                Log Out
              </p>
            </div>
          </div>
        }
        classNames={"py-2 top-8 -left-[180px] w-max"}
      />
    </div>
  </nav>
  )
}

export default Navbar