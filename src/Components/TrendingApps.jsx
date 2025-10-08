import React from 'react';
import AppCard from './AppCard';

const TrendingApps = ({trendingApps}) => {
    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='text-[48px] font-bold'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
             {
               trendingApps.map((App)=> <AppCard key={App.id} App={App}></AppCard>)
             }
                
            </div>
            <div className='flex justify-center mt-6 mb-12'>
                <button className='btn btn-primary  w-28 h-9'>See All</button>
            </div>
        </div>
    );
};

export default TrendingApps;