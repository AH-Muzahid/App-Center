import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center">
                <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200"></div>
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent absolute top-0 left-0"></div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <p className="mt-3 text-gray-600 font-medium">Loading amazing apps...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;