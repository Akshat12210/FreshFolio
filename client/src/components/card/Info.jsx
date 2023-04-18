import Card from "./index";
import React from "react";

const Info = ({profileData}) => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 ">
          General Information
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
         Email: {profileData.email}
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <p className="text-sm text-gray-600">Certifications</p>
          <p className="text-base font-medium text-navy-700 ">
            {profileData.certifications}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <p className="text-sm text-gray-600">Languages</p>
          <p className="text-base font-medium text-navy-700 ">
            English, Spanish, Italian
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <p className="text-sm text-gray-600">Department</p>
          <p className="text-base font-medium text-navy-700 ">
            Product Design
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <p className="text-sm text-gray-600">Work History</p>
          <p className="text-base font-medium text-navy-700 ">
            English, Spanish, Italian
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <p className="text-sm text-gray-600">Organization</p>
          <p className="text-base font-medium text-navy-700 ">
            Simmmple Web LLC
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <p className="text-sm text-gray-600">Birthday</p>
          <p className="text-base font-medium text-navy-700 ">
            20 July 1986
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Info;
