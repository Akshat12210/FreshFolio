import React, {useState, useEffect} from 'react'
import General from '../components/card/General';
import Form from '../components/Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Apply = () => {
  const applied = true;
  const { id } = useParams();

  const [appliedData, setAppliedData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/jobs/' + id)
      .then(response => {
        console.log("res", response);
        const data = response.data;
        setAppliedData(data);
      })
      .catch(error => {
        console.log(error)
      });
    // setLoading(false);
  }, []);
  return (
    <>
      <General data={appliedData}/>
      <Form />
    </>
    )
}

export default Apply