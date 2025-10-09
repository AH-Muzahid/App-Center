import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from './AppCard';

const TrendingApps = ({trendingApps}) => {
    return (
        <div>
            <div className='text-center my-8'>
                <h1 className='text-4xl sm:text-4xl md:text-[40px] font-bold my-2'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 mx-auto max-w-7xl'>
             {
               trendingApps.map((App)=> <AppCard key={App.id} App={App}></AppCard>)
             }
                
            </div>
            <div className='flex justify-center mt-8 mb-12'>
                <Link to="/apps">
                    <button className='btn btn-primary w-28 h-9'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;