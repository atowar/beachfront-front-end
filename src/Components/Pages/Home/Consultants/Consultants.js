import useService from '../../../../Hooks/useService';
import Consultant from '../Consultant/Consultant';

const Consultants = () => {
    const [services] = useService();
    
    return (
        <div id="services" className="grid justify-items-center">
             
            <h2 className="p-5 text-5xl font-bold">Meet Our Counsultants</h2>
            <div id="services" className=" md:w-2/3 lg:w-2/3 my-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                    {
                        services.filter(selectedService => selectedService.id<=4).map(service => <Consultant
                            key={service.id}
                            service={service}
                        >
                        </Consultant>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Consultants;