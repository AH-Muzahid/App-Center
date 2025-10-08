import React from 'react';
import heroImg from '../assets/hero.png'

const States = () => {
    return (
        <div>
            <div className='flex items-center mx-auto'>
                <img className='w-[70%] flex items-center mx-auto' src={heroImg} alt="" />
            </div>
            <div className="stats flex flex-col shadow w-[100%] bg-[#632EE3] text-[#FFF] rounded-none py-4 md:py-10">
                <h1 className='text-[30px] font-bold text-center md:m-5 p-5 md:p-0' >Trusted by Millions, Built for You</h1>
                <div className='md:flex'>
                    <div className="stat place-items-center">
                    <div className="stat-title ">Total Downloads</div>
                    <div className="stat-value">29.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Total Reviews</div>
                    <div className="stat-value ">906K</div>
                    <div className="stat-desc ">46% more than last month</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Active Apps</div>
                    <div className="stat-value">132+</div>
                    <div className="stat-desc">31 more will Launch</div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default States;