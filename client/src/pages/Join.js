import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid'
import { BanknotesIcon } from '@heroicons/react/24/outline';
import joinPage from '../assets/JoinPage.svg';
import { useNavigate } from 'react-router-dom';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]
const Join = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const nextLogin = (value) => {
    navigate('/SignUp', {state: {type:value}});
  }
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2 className='text-bold text-2xl m-5'>FreshFolio</h2>
      <div className="bg-white py-20 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join as a Client or Freelancer
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:max-w-none justify-center text-center">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-4 cursor-pointer focus:border-red-400"  onClick={() => setSelectedOption('Client')}>
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5">
                <p className='text-2xl tracking-tight text-gray-900'>I'm a Client, hiring for a project</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4 cursor-pointer"  onClick={() => setSelectedOption('Freelancer')}>
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5">
                <p className='text-2xl tracking-tight text-gray-900'>I'm a freelancer looking for work</p>
                </div>
              </div>
            </div>
            { selectedOption !== '' ? (
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white mb-2  font-semibold py-2 px-4 rounded mt-4" onClick={() => nextLogin(selectedOption)}>
              {selectedOption === 'Client' ? 'Join as a Client' : 'Apply as a freelancer'}
            </button>
            ) : (<></>)
              
              }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Join;
