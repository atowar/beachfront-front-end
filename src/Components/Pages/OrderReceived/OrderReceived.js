import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";



const OrderReceived = () => {

    const { serviceId } = useParams();

    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`https://mysterious-shelf-06800.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    console.log(service);
    return (
        <div>

            <div className="service mr-2 grid justify-items-center">

                <div className="grid items-center md:w-6/12 ">

                    <h2 className="md:text-7xl text-2xl my-5 text-pink-600">Thanks for your order</h2>
                    <h2 className="text-2xl my-5 border-b-4">Your Order Details</h2>
                    <div className="py-5">
                        <h2 className="underline text-4xl font-bold p-2">{service.package}</h2>
                        <p className="border-b-2 text-md font-medium p-2">{service.features}</p>
                        <p className="border-b-2 text-md font-medium p-2">{service.capacity}</p>
                        <p className="border-b-2 text-md font-medium p-2">{service.frontview}</p>
                        <p className="border-b-2 text-md font-medium p-2">{service.bath}</p>
                        <p className="border-b-2 text-md font-medium p-2 font-bold">Cost: ${service.price} per night*</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReceived;