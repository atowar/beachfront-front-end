import React, { useEffect, useState } from 'react';


const AllBooking = () => {

    const [bookedServices, setbookedServices] = useState([])
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        fetch('https://mysterious-shelf-06800.herokuapp.com/booked-services')
            .then(res => res.json())
            .then(data => setbookedServices(data))
    }, [bookedServices, refresh]);


    
    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
            <div id="services" className="md:w-8/12 grid">

                <h2 className="underline p-5 text-2xl md:text-5xl my-5">ALL BOOKING TILL TODAY BY OUR CLIENTS</h2>
                <div>
                    <div className="grid gap-4">
                        {
                            bookedServices.map(service =>
                                <div key = {service._id} className="service mr-2">

                                    <table class="table-auto md:w-full">

                                        <thead>
                                            <tr className="border-b-2 text-md">
                                                <th className="w-3/12 text-left p-">Package Name: {service.booking.package}</th>
                                                <th className="w-2/12 text-left">Price: ${service.booking.price} per night*</th>
                                                <th className="w-2/12 text-left">Booked By: <span className="italic text-gray-400">{service.name}</span></th>
                                                
                                               
                                               
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default AllBooking;