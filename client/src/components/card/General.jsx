import Card from "./index";
import React from "react";

const General = () => {
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
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes
              harder for us to give others a hand. We get our heart broken by
              people we love, even that we give them all...
            </p>
          </div>
        </div>

        <div className="col-span-6 lg:!mb-0">
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 px-2">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Education</p>
              <p className="text-base font-medium text-navy-700 ">
                Stanford University
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Languages</p>
              <p className="text-base font-medium text-navy-700 ">
                English, Spanish, Italian
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Department</p>
              <p className="text-base font-medium text-navy-700 ">
                Product Design
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Work History</p>
              <p className="text-base font-medium text-navy-700 ">
                English, Spanish, Italian
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Organization</p>
              <p className="text-base font-medium text-navy-700 ">
                Simmmple Web LLC
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  ">
              <p className="text-sm text-gray-600">Birthday</p>
              <p className="text-base font-medium text-navy-700 ">
                20 July 1986
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default General;
