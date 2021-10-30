
import useService from '../../../../Hooks/useService';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services] = useService();
  
    return (
        <div className="my-5 py-5 services-container grid justify-items-center">
        <div className="md:w-8/12 grid justify-items-stretch">
             <h2 className="pt-5 text-xl">We offer a wide range of tests</h2>
            <h2 className="p-5 text-2xl md:text-5xl"><span className="underline font-bold">RESERVE</span> ONE YOU LIKE</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;