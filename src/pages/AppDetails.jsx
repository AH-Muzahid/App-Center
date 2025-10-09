import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import d from "../assets/icon-downloads.png"
import r from "../assets/icon-ratings.png"
import rev from '../assets/icon-review.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, } from 'recharts';
import { addToDb, isInstalled } from '../Utility/install';

const MySwal = withReactContent(Swal)

const AppDetails = () => {
    const app = useLoaderData();
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings, id } = app;
    const [Install, setInstall] = useState(false)

    useEffect(() => {
        setInstall(isInstalled(id))
    }, [id])

    const handleInstall = () => {
        addToDb(id)
        MySwal.fire({
            title: 'Installing...',
            didOpen: () => {
                MySwal.showLoading()
                setTimeout(() => {
                    setInstall(true)
                    MySwal.fire({
                        title: 'App Installed Successfully ',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false
                    })
                }, 2000)
            },
            showConfirmButton: false,
            allowOutsideClick: false
        })
    }

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-8 border-b-2 border-gray-100 px-5">
                <img className="w-64 h-64" src={image} alt={title} />
                <div className='mx-5'>
                    <div className='border-b-2 border-gray-100'>
                        <h1 className="text-2 xl font-bold">{title}</h1>
                        <p className="text-gray-600 mb-2">Developed by <span className='text-blue-600'>{companyName}</span></p>
                    </div>
                    <div className="my-4 flex items-center gap-5 md:gap-9">
                        <div>
                            <img className='w-[25px]' src={d} alt="" />
                            <p className='text-[#00193194]'>Downloads </p>
                            <p className='text-[25px] font-bold'>{downloads}</p>
                        </div>
                        <div>
                            <img className='w-[25px]' src={r} alt="" />
                            <p className='text-[#00193194]'>Rating</p>
                            <p className='text-[25px] font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img className='w-[25px]' src={rev} alt="" />
                            <p className='text-[#00193194]'>Total Reviews</p>
                            <p className='text-[25px] font-bold'>{reviews}</p>
                        </div>
                    </div>
                    <button onClick={() => handleInstall()} disabled={Install} className={`px-[20px] py-[8px] text-white font-medium rounded-sm ${Install ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00B87A]'}`}>{Install ? 'Installed' : `Install Now (${size} MB)`}</button>
                </div>
            </div>

            <div className="px-5 mt-8 border-b-2 border-gray-100 ">
                <h1 className='text-[24px] font-medium mb-4'>Ratings</h1>
                <div style={{ width: '100%', height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            layout="vertical"
                            data={ratings.slice().reverse()}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 10,
                            }}
                        >
                            {/* <CartesianGrid stroke="#f5f5f5" /> */}
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" scale="band" axisLine={true} tickLine={false} />
                            <Tooltip />
                            <Bar dataKey="count" barSize={30} fill="#FF8811" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='p-5'>
                <h1 className='text-[24px] font-medium mb-4'>Description    </h1>
                <p className='text-[#627382]'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;