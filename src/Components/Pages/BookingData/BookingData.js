import React from 'react';


const BookingData = ({ service }) => {
    console.log(service);
    return (
        <div className="service mr-2">

            <div className="grid items-center ">
                <div className="py-5">
                    <h2 className="underline text-4xl font-bold p-2">{service.booking.package}</h2>
                    <p className="border-b-2 text-md font-medium p-2">{service.booking.features}</p>
                    <p className="border-b-2 text-md font-medium p-2">{service.booking.capacity}</p>
                    <p className="border-b-2 text-md font-medium p-2">{service.booking.frontview}</p>
                    <p className="border-b-2 text-md font-medium p-2">{service.booking.bath}</p>
                    <p className="border-b-2 text-md font-medium p-2 font-bold">${service.booking.price} per night*</p>
                    <p className=" text-xl border-b-2 text-md font-medium p-2">Booked by: <span className="italic text-gray-400">{service.name} </span></p>
                   

                </div>
            </div>
        </div>
    );
};

export default BookingData;