
import useService from '../../../../Hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useService();
  
    return (
        <div id="services" className="grid justify-items-center">
             <h2 className="pt-5 text-xl">We offer a wide range of tests</h2>
            <h2 className="p-5 text-5xl font-bold">Our Services</h2>
            <div id="services" className=" md:w-2/3 lg:w-2/3 my-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                    {
                        services.filter(selectedService => selectedService.id<=6).map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;