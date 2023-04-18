import React, { useEffect, useState, useContext } from 'react'
import Widget from '../components/widget/Widget'
import { IoMdHome, IoMdStar } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";
import ListCard from '../components/card/ListCard';
import Jobs_Section from '../components/Jobs_Section';
import Modal from '../components/Modal';
import Nft2 from "../assets/img/nfts/Nft1.png";
import Nft1 from "../assets/img/nfts/Nft1.png";
import Nft3 from "../assets/img/nfts/Nft3.png";
import Nft4 from "../assets/img/nfts/Nft4.png";
import Nft5 from "../assets/img/nfts/Nft5.png";
import Nft6 from "../assets/img/nfts/Nft6.png";
import { ProfileContext } from '../context/ProfileContext';
import axios from "axios";
const Loader = () => {
  return (
    <ImSpinner2 className='animate-spin w-12 h-12 text-main mx-auto'/>
  );
};
const Dashboard = () => {
  const account_type = localStorage.getItem("account_type");
  const user_id = localStorage.getItem("user_id");
  console.log(account_type, user_id)
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(true);
  const { profile } = useContext(ProfileContext);
  console.log(profile)
  useEffect(() => {
   setLoading(false);
  }, []);




  const CardData = [
    {
      image: Nft1,
      title: "Logo Designing",
      owner: "Mark Benjamin",
      price: 400,
      time: "30s",
    },
    {
      image: Nft2,
      title: "UI Design for Social Media App",
      owner: "Esthera Jackson",
      price: 2000,
      time: "50m",
    },
    {
      image: Nft3,
      title: "Train a ML Model",
      owner: "Ayush Ranwa",
      price: 1000,
      time: "20s",
    },
    {
      image: Nft4,
      title: "Swipe Circles",
      owner: " Peter Will",
      price: 0.4,
      time: "4h",
    },
    {
      image: Nft5,
      title: "Mesh Gradients",
      owner: "Will Smith",
      price: 0.4,
      time: "30s",
    },
    {
      image: Nft6,
      title: "3D Cubes Art",
      owner: " Manny Gates",
      price: 0.4,
      time: "2m",
    },
  ];
  return (
    <>
      {loading ?
        <>
          <Loader />
        </> :
        <>
          <div className="mt-3  grid  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"Active Projects"}
              subtitle={"2"}
            />
            <Widget
              icon={<IoDocuments className="h-6 w-6" />}
              title={"Completed Projects"}
              subtitle={"6"}
            />
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={account_type === "freelancer" ? "Avg. Earning per project" : "Avg. Spending per project"}
              subtitle={"$574.34"}
            />
            <Widget
              icon={<IoMdStar className="h-6 w-6" />}
              title={"Rating"}
              subtitle={"🌟🌟🌟"}
            />
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"New Tasks"}
              subtitle={"145"}
            />
            <Widget
              icon={<IoMdHome className="h-6 w-6" />}
              title={account_type === "freelancer" ? "Total Earning" : "Total Spending"}
              subtitle={"14"}
            />
          </div>
          <div className="mt-3  grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
              {account_type === "freelancer" ? <Jobs_Section /> : "Total Spending"}
            </div>
            <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
              <ListCard heading="Active Projects" CardData={CardData} />
            </div>
          </div>

          <Modal />
        </>
      }
    </>
  )
}

export default Dashboard