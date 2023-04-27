import React, { useEffect, useState } from 'react'
import General from './card/General'
import TopCreatorTable from './TableTopCreators'
import TaskCard from './card/TaskCard'
import ListCard from './card/ListCard'
import { useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import Loader from './Loader'

const Details = () => {
  const location = useLocation();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  const [jobData, setJobData] = useState([]);
  console.log(id)
  useEffect(() => {
    axios.get('http://localhost:3001/api/jobs/' + id)
      .then(response => {
        console.log("res", response);
        const data = response.data;
        setJobData(data);
      })
      .catch(error => {
        console.log(error)
      });
    setLoading(false);
  }, []);
  const team = true;
  const tasksList = [];
  const tableDataTopCreators = [
    {
      "name": [
        "@maddison_c21",
        "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80"
      ],
      "artworks": "9821",
      "rating": 30
    },
    {
      "name": [
        "@karl.will02",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
      ],
      "artworks": "7032",
      "rating": 30
    },
    {
      "name": [
        "@andreea.1z",
        "https://images.unsplash.com/photo-1573766064535-6d5d4e62bf9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80"
      ],
      "artworks": "5204",
      "rating": 30
    },
    {
      "name": [
        "@abraham47.y",
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
      ],
      "artworks": "4309",
      "rating": 30
    },
    {
      "name": ["@simmmple.web", "https://i.ibb.co/7p0d1Cd/Frame-24.png"],
      "artworks": "3871",
      "rating": 30
    },
  ]

  const tableColumnsTopCreators = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Rating",
      accessor: "rating",
    },
  ];


  return (
    <>
      {loading ?
        <Loader /> : (
          <>
            <General data={jobData}/>
            <div className={`grid grid-cols-1 gap-5 rounded-[20px] ${team ? "md:grid-cols-3" : "md:grid-cols-2"} mt-5`}>
              <div className="grid grid-cols-1 rounded-[20px]">
                <ListCard heading="Files" />
              </div>
              <div className="grid grid-cols-1 rounded-[20px]">
                <TaskCard tasks={tasksList}/>
              </div>
              <div className="grid grid-cols-1 rounded-[20px]">
                {team ?
                  <TopCreatorTable
                    extra="mb-5"
                    tableData={tableDataTopCreators}
                    columnsData={tableColumnsTopCreators}
                  /> : <></>}
              </div>
            </div>
            {/* <Card extra={"w-full h-1/2 p-3 mt-5"}>

    </Card> */}
          </>
        )}
    </>
  )
}

export default Details