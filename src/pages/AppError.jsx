import React from 'react';
import { Link } from 'react-router-dom';
import Apperror from '../assets/App-Error.png'

const AppError = () => {
    return (
        <div className='max-w-full mx-auto text-center my-20'>
            <div className='flex items-center justify-center'>
                <img src={Apperror} alt="" />
            </div>
            <div>
                <h1 className='text-5xl font-semibold text-[#001931] mt-3'>App not found!</h1>
                <p className='text-[#627382] my-3'>The app you are looking for does not exist.</p>
                <Link to="/apps"><button className='btn btn-primary'>Browse Apps</button></Link>
            </div>
        </div>
    );
};

export default AppError;