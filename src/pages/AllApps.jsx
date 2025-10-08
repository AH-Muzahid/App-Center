import React from 'react';
import { useLoaderData } from 'react-router';
import AllAppCard from '../Components/AllAppCard';

const AllApps = () => {
    const allApps = useLoaderData();

    return (
        <div className="container mx-auto px-5 py-8 ">
            <div>
                <h1 className="text-3xl font-bold text-center mt-8 mb-3">Our All Applications</h1>
                <p className='text-[#627382] text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions </p>
            </div>
            <div className='flex justify-between items-center my-4 '>
                <p className='text-[24px] font-semibold'>({allApps.length}) Apps Found</p>
                <div>
                    <label className="input bg-[#D9D9D9] w-[350px]">
                        <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {allApps.map((allApps) => (
                    <AllAppCard key={allApps.id} allApps={allApps} />
                ))}
            </div>
        </div>
    );
};

export default AllApps;