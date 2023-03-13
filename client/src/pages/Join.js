import React, { useState } from 'react';

const Join = () => {
  const [selectedOption, setSelectedOption] = useState('freelancer');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className='bg-blue-100 rounded-lg mx-auto my-8 w-full md:w-1/2' style={{ height: '500px' }}>
        <h2 className="text-xl font-bold pl-6 pt-2 pb-6">Join as a freelancer or Client</h2>
        <div className=" ml-48 space-x-4 ">
          <div>
            <input type="radio" id="freelancer" name="join-option" value="freelancer" checked={selectedOption === 'freelancer'} onChange={handleOptionChange} />
            <label htmlFor="freelancer">Freelancer</label>
          </div>
          <div>
            <input type="radio" id="client" name="join-option" value="client" checked={selectedOption === 'client'} onChange={handleOptionChange} />
            <label htmlFor="client">Client</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join;
