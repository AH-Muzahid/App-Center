import React from 'react';
import Banner from '../Components/Banner';
import States from '../Components/States';
import TrendingApps from '../Components/TrendingApps';
import { useLoaderData } from 'react-router';
const Home = () => {
    const trendingApps =useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <States></States>
            <TrendingApps trendingApps={trendingApps} ></TrendingApps>

        </div>
    );
};

export default Home;