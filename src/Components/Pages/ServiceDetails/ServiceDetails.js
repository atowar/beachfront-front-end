import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";



const ServiceDetails = () => {

    const { serviceId } = useParams();
 
    const [services, setServices] = useState([])

    useEffect(() => {
          fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
        }, []);
  
        console.log(services);
    return (
        <div>
            <h2>service details ID: {serviceId} </h2>
           
            <div id="services" className=" md:w-2/3 lg:w-2/3 my-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                {
                    services.filter(service => service.id === serviceId).map((service) => (
                        <div key={service.id}>
                            <h2> {service.drName} </h2>
                        </div>
                    ))
                }
                </div>
            </div>
            <Link to={`/apointment`}>
                <button className="p-3 text-xl text-white rounded-md">Make and apointment</button>
            </Link>

        </div>
    );
};

export default ServiceDetails;