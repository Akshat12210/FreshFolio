import Card from "./index";
import React from "react";

const General = ({data}) => {
  // console.log(typeof data.skills_required)
  console.log(data)
  const deadline = new Date(data.deadline).toDateString();
  console.log(deadline)
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}

      <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-6 lg:!mb-0">
          <div className="mt-2  mb-8">
            <h4 className="px-2 text-xl font-bold text-navy-700 ">
              General Information
            </h4>
            <p className="mt-2 px-2 text-base text-gray-600">
             Title : {data.title}
            </p>
            <p className="mt-2 px-2 text-base text-gray-600">
             Description : {data.description}
            </p>
          </div>
        </div>

        <div className="col-span-6 lg:!mb-0">
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 px-2">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Budget</p>
              <p className="text-base font-medium text-navy-700 ">
                ₹{data.budget}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Skills</p>
              <p className="text-base font-medium text-navy-700 ">
                {data.skills_required}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Deadline</p>
              <p className="text-base font-medium text-navy-700 ">
                {deadline}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Status</p>
              <p className="text-base font-medium text-navy-700 ">
                {data.status}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Bids</p>
              <p className="text-base font-medium text-navy-700 ">
                {data.bids && data.bids.length}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Category</p>
              <p className="text-base font-medium text-navy-700 ">
                {data.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default General;
