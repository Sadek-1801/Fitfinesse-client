import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useContext } from "react";
import { TrainerBookingContext } from "../../Providers/TrainerBookingProvider";

const TrainerDetails = () => {
    const { id } = useParams()
    const { setTrainer} = useContext(TrainerBookingContext)
    const navigate = useNavigate()
    const axiosCommon = useAxiosCommon()
    const { data: trainer, isLoading } = useQuery({
        queryKey: ["trainerDetails"],
        queryFn: async () => {
            const { data } = await axiosCommon(`/trainer/${id}`)
            return data
        }
    })
    const handleBooking = (slot, trainer) => {
        const trainerInfo = {
            trainerId: trainer._id,
            trainerName: trainer.name,
            classes: trainer.skills,
            selectedSlot: slot,
            session: trainer.availableTime.label
        }
        setTrainer(trainerInfo)
        navigate("/trainerBooking")
    }

    
    if (isLoading) return <p>Loading..........</p>
    return (
        <div className="container mx-auto p-6 bg-gray-900 text-white">
            <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">All You Need To Know About Mr: {trainer.name}</h2>
            </div>
            <div className="lg:flex lg:space-x-8">
                {/* Trainer Info Section */}
                <div className="lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                        <div className="flex gap-4 w-full flex-col md:flex-row">
                            <div className="w-full h-auto lg:h-auto lg:w-1/2  bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        `url(${trainer.profileImage})`
                                }}></div>

                            {/* todo: why image does not show in the small screen */}
                            <div className="w-full lg:w-1/2 ">
                                <h1 className="text-3xl font-bold mb-2">{trainer.name}</h1>
                                <p className="text-lg font-bold mb-4">Experience: <span className="text-btn">{trainer.experience}</span> years</p>
                                <h3 className="font-semibold text-lg mb-2">Classes:</h3>
                                <ul className="list-disc list-inside">
                                    {trainer.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="my-6">
                        <p className="mb-4"><span className="text-xl font-semibold text-red-400">Short Background:</span> {trainer.bio}</p>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="text-lg">Follow Me on: </span>
                        <a href="https://www.facebook.com" target="_blank" className="rounded-full transform transition-transform duration-300 hover:scale-110 w-12 h-12 flex items-center">
                            <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="rounded-full transform transition-transform duration-300 hover:scale-110 w-12 h-12 flex items-center">
                            <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" className="rounded-full transform transition-transform duration-300 hover:scale-110 w-12 h-12 flex items-center">
                            <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="Twitter" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Availability Section */}
                <div className="lg:w-1/2">
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg mb-2">Available Days:</h3>
                        <ul className="list-disc list-inside">
                            {trainer.availableDays.map(day => (
                                <li key={day.value}>{day.label}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-6">
                        <div className="mb-6 text-center text-red-400 text-2xl font-medium"><p>Available Time - <span>{trainer.availableTime.label}</span></p></div>
                        <h3 className="font-semibold text-lg mb-2 text-center ">Available Slots:</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {trainer.availableTime.slots.map((slot, index) => (
                                <button onClick={() => handleBooking(slot, trainer)} key={index} className="bg-gray-800 text-white py-1 px-2 rounded hover:bg-red-400 transition text-lg">
                                    {slot.slotName} : ({slot.duration})
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-12 border-t border-gray-700">
                <div className="flex justify-center -mt-3">
                    <div className="bg-gray-900 px-4 py-2 rounded-full text-white font-semibold">
                        ***
                    </div>
                </div>
            </div>
            <section className="relative bg-black text-white py-20">
                <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(https://i.ibb.co/nCpbmF9/3d-gym-equipment.jpg)' }}></div>
                <div className="container mx-auto lg:w-1/2 relative z-10 px-6 lg:px-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Become a Trainer</h2>
                        <p className="text-lg mb-8">Join our team of expert trainers and help others achieve their fitness goals. Enjoy a rewarding career with flexible hours and a supportive community.</p>
                        <Link to={"/beATrainer"} className="inline-block bg-[#E01717] text-white py-3 px-6 rounded hover:bg-red-700 transition duration-300">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrainerDetails;