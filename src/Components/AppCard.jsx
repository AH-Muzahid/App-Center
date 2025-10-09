import React from 'react';
import Downicon from '../assets/icon-downloads.png'
import Ratingicon from '../assets/icon-ratings.png';
import { Link } from 'react-router';

const AppCard = ({ App }) => {
    const { image, title, ratingAvg, downloads } = App

    return (
        <Link to={`/app/${App.id}`}>
            <div className="card w-full sm:max-w-[275px] shadow-sm hover:shadow-md transition-shadow">
                <figure className='rounded-sm bg-gray-50 flex justify-center items-center h-[220px] sm:h-[200px]'>
                    <img className='w-[160px] h-[160px] sm:w-[140px] sm:h-[140px] object-contain'
                        src={image}
                        alt={title} />
                </figure>
                <div className=" ">
                    <h2 className="card-title px-4">{title}</h2>

                    <div className=" flex items-center justify-between px-4 pb-5 mt-3">
                        <p className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] px-1 rounded-sm"><img src={Downicon} alt="downloads" className="w-4 h-4" /> {downloads}</p>
                        <p className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] px-1 rounded-sm"><img src={Ratingicon} alt="downloads" className="w-4 h-4" />{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;