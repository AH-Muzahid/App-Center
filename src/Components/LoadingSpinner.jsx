import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <p className="mt-3 text-gray-600">Loading apps...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;