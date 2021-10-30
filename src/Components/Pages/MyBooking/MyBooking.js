import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyBookingData from '../MyBookingData/MyBookingData';

const MyBooking = () => {
    const { user } = useAuth();
    const [bookedServices, setbookedServices] = useState([])
    console.log(bookedServices);

    useEffect(() => {
          fetch('https://mysterious-shelf-06800.herokuapp.com/booked-services')
            .then(res => res.json())
            .then(data => setbookedServices(data))
        }, []);
    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
        <div id="services" className="md:w-8/12 grid justify-items-stretch">
             
            <h2 className="underline p-5 text-2xl md:text-5xl">Hello, {user.displayName} here is your<span className="font-bold"> Booking Details</span> </h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {
                       
                        bookedServices.filter(selectedService => selectedService.email === user.email).map(service => <MyBookingData
                            key={service._id}
                            service={service}
                        >
                        </MyBookingData>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyBooking;