import Navber from './../Components/Navber';
import Footer from './../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div>
        <div className='max-w-[1220px] mx-auto'>
            <Navber></Navber>
        </div>
        <div className='max-w-[1220px] mx-auto px-4'>
            <Suspense fallback={<LoadingSpinner />}>
                <Outlet></Outlet>
            </Suspense>
        </div>
        <div className='max-w-[1220px] mx-auto'>
            <Footer></Footer>
        </div> 
    </div>
    );
};

export default Root;