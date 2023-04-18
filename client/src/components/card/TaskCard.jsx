import CardMenu from "./CardMenu";
import React from "react";
import Checkbox from "../checkbox";
import { MdDragIndicator, MdCheckCircle } from "react-icons/md";
import Card from "./index";

const TaskCard = ({ tasks }) => {
  return (
    <Card extra="pb-7 p-[20px]">
      {/* task header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100  ">
            <MdCheckCircle className="h-6 w-6 text-brand-500 " />
          </div>
          <h4 className="ml-4 text-xl font-bold text-navy-700 ">Tasks</h4>
        </div>
        <CardMenu />
      </div>

      {/* task content */}
      {tasks.length < 1 ? (
        <>
          <h1 className="text-center mt-4 font-bold">No tasks</h1>
        </>
      ) : (
        <div className="h-full w-full">
          <div className="mt-5 flex items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 ">
                Landing Page Design
              </p>
            </div>
            <div>
              <MdDragIndicator className="h-6 w-6 text-navy-700 " />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 ">
                Mobile App Design
              </p>
            </div>
            <div>
              <MdDragIndicator className="h-6 w-6 text-navy-700 " />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 ">
                Dashboard Builder
              </p>
            </div>
            <div>
              <MdDragIndicator className="h-6 w-6 text-navy-700 " />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 ">
                Landing Page Design
              </p>
            </div>
            <div>
              <MdDragIndicator className="h-6 w-6 text-navy-700 " />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 ">
                Dashboard Builder
              </p>
            </div>
            <div>
              <MdDragIndicator className="h-6 w-6 text-navy-700 " />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TaskCard;
