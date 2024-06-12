import { useContext, useState } from "react";
import { TrainerBookingContext } from "../../Providers/TrainerBookingProvider";
import PlanCard from "../../Components/TrainerBooking/PlanCard";
import { useNavigate } from "react-router-dom";

const TrainerBooking = () => {
    const { trainer, setTrainer } = useContext(TrainerBookingContext)
    const navigate = useNavigate()

    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            id: 'basic',
            name: 'Basic',
            description: 'Access to basic training sessions with limited features.',
            price: 10.00,
            features: ['Access to basic training sessions', 'Group chat support'],
        },
        {
            id: 'standard',
            name: 'Standard',
            description: 'Access to all training sessions with standard features.',
            price: 20.00,
            features: ['Access to all training sessions', 'Analytics platform', 'Group chat support', '3-month personalized training plan'],
        },
        {
            id: 'premium',
            name: 'Premium',
            description: 'Access to all training sessions with advanced features.',
            price: 30.00,
            features: ['Access to all training sessions', 'Advanced analytics platform', 'Group chat support', 'Personalized training plan updated monthly', 'Weekly 1-on-1 training sessions'],
        },
    ];

    const handleSelect = (id) => {
        setSelectedPlan(id);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const packageData = plans.find(plan => selectedPlan === plan.id);
        const {price, name} = packageData;
        const traineingSession = {
            ...trainer, 
            price: parseFloat(price),
            packageName: name
        }
        setTrainer(traineingSession);
        navigate("/payment")
    };

    return (
        <div>
            <div className="bg-black">
                <div className="container px-6 py-8 mx-auto">
                    <div className="">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl font-medium text-white capitalize lg:text-3xl">Our Pricing Plan</h1>

                            <div className="mt-4">
                                <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-red-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                            </div>

                            <p className="mt-4 font-medium text-white">
                                You can get All Access by selecting your plan!
                            </p>

                            <a href="#" className="flex items-center mt-4 -mx-1 text-sm text-gray-100 capitalize hover:underline hover:text-red-600">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>

                        <div className="flex-1 ">
                            <form onSubmit={handleSubmit} className="">
                                <div className="mt-8 flex gap-4 space-y-8 md:-mx-4 md:space-y-0 ">
                                    {plans.map((plan) => (
                                        <PlanCard
                                            key={plan.id}
                                            {...plan}
                                            selected={selectedPlan === plan.id}
                                            onSelect={handleSelect}
                                        />
                                    ))}
                                </div>
                                <div className="text-center w-full mt-10">
                                    <button type="submit" className=" px-4 w-1/4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80">
                                        Join Now
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default TrainerBooking;