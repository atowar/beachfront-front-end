import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, title, description, imgFeatured } = service;
    return (
        <div className="service">

            <div><img className="w-full" src={imgFeatured} alt="" /></div>
            <div className="flex items-center ">
                <div className="py-5">
                    <h2 className="text-2xl font-medium p-2">{title}</h2>
                    <p className="text-base font-medium p-2">{description}</p>
                    <Link to={`/service/${id}`}>
                        <button className="p-3 text-xl text-white rounded-md">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;