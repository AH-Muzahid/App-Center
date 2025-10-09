import Navber from './../Components/Navber';
import Footer from './../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div className='max-w-[1240px] mx-auto '>
        <Navber></Navber>
        <Suspense fallback={<LoadingSpinner />}>
            <Outlet></Outlet>
        </Suspense>
        <Footer></Footer> 
    </div>
    );
};

export default Root;