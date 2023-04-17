import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/img_1.svg';
import Navbar from './Navbar/HomeNavbar';
import Card from './Card';

export default function Display() {
    return (
        <div className="bg-[#fffffe]">
            <Navbar
                isSticky={false}
                isInvisibleOnTop={false}
                showSocial={false}
                showRegisterBtn={true}
            />
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-10 px-4 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 style={{ lineHeight: 1.3  }}  className="text-5xl font-semibold tracking-tight text-[#2b2c34] sm:text-5xl">Join Forces with Experienced Freelancers and Boost Your Skills on Freshfolio</h2>
                    <Link
                        to="/join"
                        type='button'
                        className='mt-5 py-2.5 px-3.5  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
                    >
                        Get Started
                    </Link>
                    <a href="#about" className="text-sm ml-5 font-semibold leading-6 text-[#2b2c34]">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
                <div className="grid gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src={img1}
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
            <div className="bg-[#fffffe]" id='about'>
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className=" text-black ">
                        <span className="font-extrabold text-3xl block sm:text-5xl">
                            About Us
                        </span>
                        <span className="mt-5 px-48 text-xl font-semibold block text-[#2b2c34]">
                            Freshfolio's team-based approach to freelancing offers new and aspiring freelancers a supportive environment to gain valuable experience and build skills. You don't need to be an expert to get started - join a team and work with experienced freelancers to complete projects and learn from their expertise. Build your portfolio, network, and jumpstart your freelancing career with Freshfolio.
                        </span>
                    </h2>
                </div>
            </div>
            <Card />
        </div>
    )
}
