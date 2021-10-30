import React, { useEffect, useState } from 'react';
import BookingData from '../BookingData/BookingData';

const AllBooking = () => {

    const [bookedServices, setbookedServices] = useState([])

    useEffect(() => {
          fetch('https://mysterious-shelf-06800.herokuapp.com/booked-services')
            .then(res => res.json())
            .then(data => setbookedServices(data))
        }, []);
    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
        <div id="services" className="md:w-8/12 grid justify-items-stretch">
             
            <h2 className="underline p-5 text-2xl md:text-5xl">CURRENT<span className="font-bold"> BOOKING</span> </h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {
                        bookedServices.map(service => <BookingData
                            key={service._id}
                            service={service}
                        >
                        </BookingData>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllBooking;