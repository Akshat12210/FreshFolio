import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NftCard from './card/NftCard'
import NFt2 from "../assets/img/nfts/Nft2.png";
import NFt4 from "../assets/img/nfts/Nft4.png";
import NFt3 from "../assets/img/nfts/Nft3.png";
import NFt5 from "../assets/img/nfts/Nft5.png";
import NFt6 from "../assets/img/nfts/Nft6.png";
import avatar1 from "../assets/img/avatars/avatar1.png";
import avatar2 from "../assets/img/avatars/avatar2.png";
import avatar3 from "../assets/img/avatars/avatar3.png";
import Loader from '../components/Loader';

const Jobs_Section = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('http://localhost:3001/api/jobs')
      .then(response => {
        console.log("res", response);
        const data = response.data;
        console.log(data.slice(0,5));
        setJobData(data.slice(0,5));
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);
  return (
    <>
      <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
        <h4 className="ml-1 text-2xl font-bold text-navy-700">
          Jobs based on your skillset
        </h4>
      </div>
      {loading ?
        <Loader />
        :
        <div className=" mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {jobData.map((item) => (
            <>
              <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title={item.title}
                status={item.status}
                author={item.category}
                id={item._id}
                price="500"
                image={NFt3}
              />
            </>
          ))}
        </div>}

    </>
  )
}

export default Jobs_Section