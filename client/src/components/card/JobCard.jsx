import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "./index";
import { Link } from "react-router-dom";
const JobCard = ({ title, description, price, link, extra, status, id }) => {
  return (
    <div 
      className={`!z-5 relative flex  rounded-[20px] bg-lightPrimary bg-clip-border shadow-3xl shadow-shadow-500 flex-col border border-indigo-600 mb-2  w-full h-full !p-4 3xl:p-![18px] ${extra}`}
    >
      <div className="h-full w-full ">
        <div className="relative w-full">
          {/* <img
            src=""
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          /> */}
          <Link
            to={`/details/${id}`}
            className="absolute right-3 linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700   "
          >
            Details
          </Link>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 ">
              {" "}
              {title}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-navy-600 md:mt-2">
              Category: {description}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-navy-600 md:mt-2">
              Status: {status}{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 px-1 text-sm font-bold text-brand-500 ">
              Budget: {price} <span>INR</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
