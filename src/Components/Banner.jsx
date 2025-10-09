import React from 'react';
import playstore from './../assets/fi_16076057.svg'
import appstore from './../assets/fi_5977575.svg'

const Banner = () => {
    return (
       <div className='mt-5 md:mt-10 px-4'>
         <div className='text-center my-5'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center py-1 text-[#001931]'>We Build <br />
            <span className='text-[#632EE3]'>Productive </span>Apps</h1>
            <p className='text-base sm:text-lg md:text-xl text-[#627382] w-[95%] sm:w-[90%] md:w-[75%] mx-auto mt-6'>At HERO, we're passionate about creating innovative digital solutions that drive success and growth for our clients. With a focus on user-centric design and cutting-edge technology</p>
        </div>
        
        <div className='mt-8 mb-10'>
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 items-center'>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline bg-[#D2D2D2] border-none px-4 sm:px-6 py-3 hover:bg-[#00BFFC] rounded-[4px] w-full sm:w-auto min-w-[140px]"><img className='w-5' src={playstore} alt="" /> Play Store</button>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline bg-[#D2D2D2] border-none px-4 sm:px-6 py-3 hover:bg-[#00BFFC] rounded-[4px] w-full sm:w-auto min-w-[140px]"><img className='w-5' src={appstore} alt="" /> App Store</button>
                </a>
            </div>
        </div>
       </div>
    );
};

export default Banner;