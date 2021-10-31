import React, { useEffect, useState } from 'react';


const ManageBooking = () => {

    const [bookedServices, setbookedServices] = useState([])

    useEffect(() => {
        fetch('https://mysterious-shelf-06800.herokuapp.com/booked-services')
            .then(res => res.json())
            .then(data => {
                setbookedServices(data)
                console.log(data)
            })
    }, []);


    //delete booking
    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://mysterious-shelf-06800.herokuapp.com/services/${id}`;
            fetch(url,
                {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingBooking = bookedServices.filter(serviceDeleted => serviceDeleted._id !== id)
                        setbookedServices(remainingBooking);
                    }
                })
        }
    }
    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
            <div id="services" className="md:w-8/12 grid">

                <h2 className="underline p-5 text-2xl md:text-5xl my-5">MANAGE<span className="font-bold"> BOOKING</span> </h2>
                <div>
                    <div className="grid gap-4">
                        {
                            bookedServices.map(service =>
                                <div className="service mr-2">

                                    <table class="table-auto md:w-full">

                                        <thead>
                                            <tr className="border-b-2 text-md">
                                                <th className="w-1/3 text-left p-">Package Name: {service.booking.package}</th>
                                                <th className="w-1/3 text-left">Price: ${service.booking.price} per night*</th>
                                                <th className="w-1/3 text-left">Booked By: <span className="italic text-gray-400">{service.name}</span></th>
                                                <th className="w-1/3 text-left"><button onClick={() => handleDeleteBooking(service._id)} className="bg-white font-bold border">X</button></th>
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

export default ManageBooking;