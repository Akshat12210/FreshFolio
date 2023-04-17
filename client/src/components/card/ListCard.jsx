import React from "react";

import { FaEthereum } from "react-icons/fa";
import Card from "./index";

const ListCard = ({ heading, CardData }) => {
  return (
    <Card extra={" !z-5 overflow-hidden"}>
      {/* HistoryCard Header */}
      <div className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-lg font-bold text-navy-700 ">{heading}</div>
        {CardData && CardData.length > 0 ? (
          <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200    ">
            See all
          </button>
        ) : (
          <></>
        )}
      </div>

      {/* History CardData */}
      {CardData && CardData.length ? (
        CardData.map((data, index) => (
          <div className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl  ">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center">
                <img
                  className="h-full w-full rounded-xl"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-base font-bold text-navy-700 ">
                  {" "}
                  {data.title}
                </h5>
                <p className="mt-1 text-sm font-normal text-gray-600">
                  {" "}
                  {data.owner}{" "}
                </p>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-center text-navy-700 ">
              <div>
                <FaEthereum />
              </div>
              <div className="ml-1 flex items-center text-sm font-bold text-navy-700 ">
                <p> {} </p>
                {data.price} <p className="ml-1">ETH</p>
              </div>
              <div className="ml-2 flex items-center text-sm font-normal text-gray-600 ">
                <p>{data.time}</p>
                <p className="ml-1">ago</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-base text-center mb-5 font-bold text-navy-700 ">
          {" "}
          No {heading}
        </h5>
      )}
    </Card>
  );
};

export default ListCard;
