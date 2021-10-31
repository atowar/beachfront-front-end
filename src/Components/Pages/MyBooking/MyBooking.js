import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MyBooking = () => {
    const { user } = useAuth();
    const [bookedServices, setbookedServices] = useState([])
    console.log(bookedServices);
    
    useEffect(() => {
          fetch('https://mysterious-shelf-06800.herokuapp.com/booked-services')
            .then(res => res.json())
            .then(data => setbookedServices(data))
        }, []);


        const handleCancelBooking = id => {
            const proceed = window.confirm('Are you sure you want to Cancel Order?');
            if (proceed) {
                const url = `https://mysterious-shelf-06800.herokuapp.com/services/${id}`;
                fetch(url,
                    {
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('Order Cancelled');
                            const remainingBooking = bookedServices.filter(booking => booking._id !== id)
                            setbookedServices(remainingBooking);
                        }
                    })
            }
        }


    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
        <div id="services" className="md:w-8/12 grid justify-items-stretch">
             
            <h2 className="underline p-5 text-2xl md:text-5xl">Hello, {user.displayName} here is your<span className="font-bold"> Booking Details</span> </h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {
                        
                        bookedServices.filter(selectedService => selectedService.email === user.email).map(service => <div key={service._id} className="service mr-2">

                        <div className="grid items-center ">
                            <div className="py-5">
                                <h2 className="underline text-4xl font-bold p-2">{service.booking.package}</h2>
                                <p className="border-b-2 text-md font-medium p-2">{service.booking.features}</p>
                                <p className="border-b-2 text-md font-medium p-2">{service.booking.roomsize}</p>
                                <p className="border-b-2 text-md font-medium p-2">{service.booking.capacity}</p>
                                <p className="border-b-2 text-md font-medium p-2">{service.booking.bath}</p>
                                <p className="border-b-2 text-md font-medium p-2 font-bold">${service.booking.price} per night*</p>
                                <button onClick={() => handleCancelBooking(service._id)} className="p-2 text-white">Cancel Booking</button>
            
            
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyBooking;