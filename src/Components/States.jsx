import React from 'react';
import heroImg from '../assets/hero.png'

const States = () => {
    return (
        <div className='px-4'>
            <div className='flex justify-center items-center'>
                <img className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto' src={heroImg} alt="Hero" />
            </div>
            <div className="stats flex flex-col shadow w-full bg-[#632EE3] text-white rounded-lg py-6 md:py-10 mx-auto">
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 px-4'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row justify-center'>
                    <div className="stat place-items-center py-4">
                        <div className="stat-title text-gray-200">Total Downloads</div>
                        <div className="stat-value text-2xl sm:text-3xl md:text-4xl">29.6M</div>
                        <div className="stat-desc text-gray-300">21% more than last month</div>
                    </div>

                    <div className="stat place-items-center py-4">
                        <div className="stat-title text-gray-200">Total Reviews</div>
                        <div className="stat-value text-2xl sm:text-3xl md:text-4xl">906K</div>
                        <div className="stat-desc text-gray-300">46% more than last month</div>
                    </div>

                    <div className="stat place-items-center py-4">
                        <div className="stat-title text-gray-200">Active Apps</div>
                        <div className="stat-value text-2xl sm:text-3xl md:text-4xl">132+</div>
                        <div className="stat-desc text-gray-300">31 more will Launch</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;