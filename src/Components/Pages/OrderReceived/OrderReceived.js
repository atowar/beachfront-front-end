import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import './OrderReceived.css';


const OrderReceived = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState([])
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://mysterious-shelf-06800.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    const onSubmit = data => {
        
        data.booking = service;
        data.status = "Pending";
        console.log(data)

        fetch('https://mysterious-shelf-06800.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then (res => res.json())
        .then (result => {
            if(result.insertedId){
                alert('Thanks for booking')
                reset();
            };
        })
    };

   return (
        <div className="grid justify-items-center">
            <div className="md:w-8/12">
                <div className="grid md:grid-cols-2 gap-4">

                    <div className="service mr-2 items-center grid justify-items-center">
                        <h2 className="text-2xl border-b-4">Your Order Details</h2>
                        <div className="py-2">
                            <h2 className="underline text-4xl font-bold p-2">{service.package}</h2>
                            <p className="border-b-2 text-md font-medium p-2">{service.features}</p>
                            <p className="border-b-2 text-md font-medium p-2">{service.capacity}</p>
                            <p className="border-b-2 text-md font-medium p-2">{service.frontview}</p>
                            <p className="border-b-2 text-md font-medium p-2">{service.bath}</p>
                            <p className="border-b-2 text-md font-medium p-2 font-bold">Cost: ${service.price} per night*</p>
                        </div>
                    </div>
                    <div className="grid justify-items-center">
                        <h2 className="text-2xl border-b-4">CheckOut</h2>
                        <form className="order-received-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input className="submit" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReceived;