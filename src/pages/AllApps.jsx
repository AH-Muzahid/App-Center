import React from 'react';
import { useLoaderData } from 'react-router';
import AllAppCard from '../Components/AllAppCard';

const AllApps = () => {
    const allApps = useLoaderData();
    
    return (
        <div className="container mx-auto px-5 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">All Apps</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {allApps.map((allApps) => (
                    <AllAppCard key={allApps.id} allApps={allApps} />
                ))}
            </div>
        </div>
    );
};

export default AllApps;