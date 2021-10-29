import React from 'react';
import { Link } from 'react-router-dom';
import './Consultant.css'

const Consultant = ({ service }) => {
    const { id, drName, drCat, imgDr } = service;
    return (

        <div className="service">

            <div><img className="w-full" src={imgDr} alt="" /></div>
            <div className="flex justify-center ">
                <div className="py-5">
                    <h2 className="text-2xl font-medium p-2">{drName}</h2>
                    <p className="text-base font-medium p-2">{drCat}</p>
                    <Link to={`/service/${id}`}>
                        <button className="p-3 text-xl text-white rounded-md">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
     
    );
};

export default Consultant;