import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { getStoredApps, removeFromDb } from '../Utility/install';
import Downicon from '../assets/icon-downloads.png'
import Ratingicon from '../assets/icon-ratings.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const Installation = () => {
    const allApps = useLoaderData();
    const [installedAppIds, setInstalledAppIds] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    let installedApps = allApps.filter(app => installedAppIds.includes(app.id));

    // Sort apps 
    if (sortOrder === 'lowToHigh') {
        installedApps = installedApps.sort((a, b) => a.size - b.size);
    } else if (sortOrder === 'highToLow') {
        installedApps = installedApps.sort((a, b) => b.size - a.size);
    }

    useEffect(() => {
        setInstalledAppIds(getStoredApps());
    }, []);

    const handleUninstall = (id) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "This app will be uninstalled!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, uninstall it!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromDb(id);
                setInstalledAppIds(getStoredApps());
                MySwal.fire({
                    title: "Uninstalled!",
                    text: "Your app has been uninstalled.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                });
            }
            else {
                MySwal.fire({
                    title: "Cancelled",
                    text: "Your app is safe <3",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        });
    };


    return (
        <div className="container mx-auto px-5 py-8 ">
            <div>
                <h1 className="text-3xl font-bold text-center mt-8 mb-3">Your Installed Apps</h1>
                <p className='text-[#627382] text-center mb-10'>Explore All Trending Apps on the Market developed by us </p>
            </div>
            <div>
                <div className='flex justify-between items-center mt-4 '>
                    <p className='text-[24px] font-semibold'>{installedApps.length} Apps Found</p>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn border-[#D2D2D2] text-[#627382] bg-white shadow-sm m-1 h-8 px-5">Sort by Size<IoMdArrowDropdown /></div>
                        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1000] w-52 p-2 shadow-sm bg-white">
                            <li><a onClick={() => setSortOrder('lowToHigh')}>Low to High</a></li>
                            <li><a onClick={() => setSortOrder('highToLow')}>High to Low</a></li>
                        </ul>
                    </div>
                </div>

                {installedApps.length > 0 ? (
                    installedApps.map((app) => (
                        <div key={app.id} className="flex items-center gap-2 md:gap-4 bg-white p-4 rounded-lg shadow-sm mb-4">
                            <img className="w-16 h-16 object-contain" src={app.image} alt={app.title} />
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{app.title}</h2>
                                <div className="flex items-center gap-1 md:gap-3 mt-2">
                                    <p className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] px-2 py-0.5 rounded-sm text-sm">
                                        <img src={Downicon} alt="downloads" className="w-3 h-3" /> {app.downloads}
                                    </p>
                                    <p className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] px-2 py-0.5 rounded-sm text-sm">
                                        <img src={Ratingicon} alt="rating" className="w-3 h-3" /> {app.ratingAvg}
                                    </p>
                                    <p className="text-[#00D390] bg-[#F1F5E8] px-2 py-0.5 rounded-sm text-sm">{app.size} MB</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className='text-white bg-red-500 hover:bg-red-600 px-2 md:px-6 py-2 rounded-sm'
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-xl text-gray-500">No apps installed yet</h2>
                        <p className="text-gray-400 mt-2">Install some apps to see them here</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Installation;