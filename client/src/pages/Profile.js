import React, { useContext } from 'react'
import Project from '../components/Project'
import Info from '../components/card/Info'
import Card from '../components/card/index'
import avatar from "../assets/img/avatars/avatar11.png";
import banner from "../assets/img/profile/banner.png";
import { ProfileContext } from '../context/ProfileContext';
import { BsArrowBarUp, BsFillPersonFill } from "react-icons/bs";

const Profile = () => {
  const { profile } = useContext(ProfileContext);
  console.log(profile)
  return (
    <>
      <div className="flex w-full flex-col gap-5">
        <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
          <div className="col-span-4 lg:!mb-0">
            <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
              {/* Background and profile */}
              <div
                className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                style={{ backgroundImage: `url(${banner})` }}
              >
                <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-white">
                  <BsFillPersonFill className="h-10 w-10 rounded-full" />
                </div>
              </div>

              {/* Name and position */}
              <div className="mt-16 flex flex-col items-center">
                <h4 className="text-xl font-bold text-navy-700 break-all ">
                  {profile.first_name + profile.last_name}
                </h4>
                <p className="text-base font-normal text-gray-600">{profile.username}</p>
              </div>
            </Card>
          </div>

          <div className="col-span-3 lg:!mb-0">
            <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
            </Card>

          </div>

          <div className="z-0 col-span-5 lg:!mb-0">
          <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
            </Card>

          </div>
        </div>
        <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
          <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
            <Info profileData={profile}/>
          </div>
          <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
            <Project profileData={profile}/>
          </div>

          {/* <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div> */}
        </div>
      </div>
    </>
  )
}

export default Profile