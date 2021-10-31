import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, } = service;
    console.log(_id);
    return (
        <div className="service mr-2">

            <div className="grid items-center ">
                <div className="py-5">
                    <div><img src={service.svcimg} alt="" /></div>
                    <h2 className="underline text-4xl font-bold p-2">{service.package}</h2>
                    <p className="border-b-2 text-md font-medium p-2">{service.features}</p>
                    <p className="border-b-2 text-md font-medium p-2">{service.roomsize}</p>
                    <p className="border-b-2 text-md font-medium p-2">{service.capacity}</p>
                    <p className="border-b-2 text-md font-medium p-2">{service.frontview}</p>
                    <p className="border-b-2 text-md font-medium p-2">{service.bath}</p>
                    <p className="border-b-2 text-md font-medium p-2 font-bold">${service.price} per night*</p>
                    
                    <Link to={`/order-received/${_id}`}>
                        <button className="p-3 mt-5 text-xl text-white rounded-md">RESERVE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;