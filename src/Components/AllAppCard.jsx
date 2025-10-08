import React from 'react';
import { Link } from 'react-router-dom';
import downlodicon from "../assets/icon-downloads.png"
import ratingicon from "../assets/icon-ratings.png"
const AllAppCard = ({allApps}) => {
     const { image, title, ratingAvg, downloads } = allApps
        
        return (
            <Link to={`/app/${allApps.id}`}>
                <div className="card maax-w-[2750px] shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                    <figure className='rounded-sm'>
                        <img className='w-[300px] h-[300px] p-4 '
                            src="https://via.placeholder.com/300x300?text=App+Image"
                            alt={title} />
                    </figure>
                    <div className="c ">
                        <h2 className="card-title px-4">{title}</h2>
        
                        <div className=" flex items-center justify-between px-4 pb-5 mt-3">
                            <p className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] px-2 rounded-sm"><img src={downlodicon} alt="downloads" className="w-4 h-4" /> {downloads}</p>
                            <p className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] px-2 rounded-sm"><img src={ratingicon} alt="downloads" className="w-4 h-4"/>{ratingAvg}</p>  
                        </div>
                    </div>
                </div>
            </Link>
        );
};

export default AllAppCard;