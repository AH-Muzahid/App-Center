import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllAppCard from '../Components/AllAppCard';
import LoadingSpinner from '../Components/LoadingSpinner';

const AllApps = () => {
    const allApps = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    
    // Filter apps based on search
    const filteredApps = allApps.filter(app => 
        app.title.toLowerCase().includes(searchTerm.toLowerCase()),        
        // app.description.toLowerCase().includes(searchTerm.toLowerCase()),        
    );
    
    useEffect(() => {
        if (searchTerm) {
            setIsSearching(true);
            const timer = setTimeout(() => {
                setIsSearching(false);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setIsSearching(false);
        }
    }, [searchTerm]);
    

    return (
        <div className="container mx-auto px-5 py-8 ">
            <div>
                <h1 className="text-3xl font-bold text-center mt-8 mb-3">Our All Applications</h1>
                <p className='text-[#627382] text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions </p>
            </div>
            <div className='flex justify-between items-center my-4 '>
                <p className='text-[24px] font-semibold'>({filteredApps.length}) Apps Found</p>
                <div>
                    <label className="input bg-[#D9D9D9] w-[175px] md:w-[350px]">
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
                        <input 
                            type="search" 
                            placeholder="Search apps..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </label>
                </div>
            </div>

            {isSearching ? (
                <LoadingSpinner />
            ) : filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filteredApps.map((app) => (
                        <AllAppCard key={app.id} allApps={app} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl text-gray-500">No App Found</h2>
                    <p className="text-gray-400 mt-2">Try searching with different keywords</p>
                </div>
            )}
        </div>
    );
};

export default AllApps;