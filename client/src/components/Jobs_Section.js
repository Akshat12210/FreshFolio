import React from 'react'
import NftCard from './card/NftCard'
import NFt2 from "../assets/img/nfts/Nft2.png";
import NFt4 from "../assets/img/nfts/Nft4.png";
import NFt3 from "../assets/img/nfts/Nft3.png";
import NFt5 from "../assets/img/nfts/Nft5.png";
import NFt6 from "../assets/img/nfts/Nft6.png";
import avatar1 from "../assets/img/avatars/avatar1.png";
import avatar2 from "../assets/img/avatars/avatar2.png";
import avatar3 from "../assets/img/avatars/avatar3.png";
const Jobs_Section = () => {
  return (
    <>
    <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700">
            Jobs based on your skillset
          </h4>
        </div>
      {/* NFTs trending card */}
      <div className=" mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt3}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt2}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt4}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt3}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt2}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt4}
          />
        </div>
    </>
)
}

export default Jobs_Section