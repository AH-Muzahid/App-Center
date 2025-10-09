import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error-404.png'

const RootError = () => {
    return (
        <div className='max-w-full mx-auto text-center my-20'>
            <div className='flex items-center justify-center'>
                <img src={error} alt="" />
            </div>
            <div>
                <h1 className='text-5xl font-semibold text-[#001931] mt-3'>Oops, page not found!</h1>
                <p className='text-[#627382] my-3'>The page you are looking for is not available.</p>
                <Link to="/"><button className='btn btn-primary' >Go Back!</button></Link>
            </div>
        </div>
    );
};

export default RootError;