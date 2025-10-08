import Navber from './../Components/Navber';
import Footer from './../Components/Footer';
import React from 'react';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div className='max-w-[1240px] mx-auto '>
        <Navber></Navber>
        <Outlet>
        </Outlet>  
        <Footer></Footer> 
    </div>
    );
};

export default Root;