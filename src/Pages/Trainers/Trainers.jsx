import { Link } from "react-router-dom";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const Trainers = () => {
    const axiosCommon = useAxiosCommon();
    const { data: trainers = [], isLoading } = useQuery({
        queryKey: ["trainers"],
        queryFn: async () => {
            const { data } = await axiosCommon("/trainers")
            return data
        }
    })
    if (isLoading) return <p className="min-h-screen flex items-center justify-center text-6xl text-white bg-black">Loading........</p>
    return (
        <div className="bg-black min-h-screen p-8">
            <Helmet>
                <title>FitFinesse | All Trainers</title>
            </Helmet>
            <h1 className="text-3xl text-white text-center mb-8">Meet Our Trainers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* {trainers.map((trainer, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-400 rounded-lg shadow-lg text-white flex flex-col lg:flex-row overflow-hidden">
                        <img
                            src={trainer.profileImage}
                            alt={`${trainer.name}'s profile`}
                            className="w-full lg:w-1/2 h-48 lg:h-auto object-cover"
                        />
                        <div className="p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">{trainer.name}</h2>
                                <p className="text-lg text-[#E01717] font-bold mb-2">Experience: {trainer.experience} years</p>
                                <div className="mb-4">
                                    <h3 className="font-semibold">Available Slots:</h3>
                                    <ul className="list-disc list-inside">
                                        {trainer.availableDays.map(day => (
                                            <li key={day.value}>{day.label}</li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="mb-4">{trainer.bio.length > 150 ? `${trainer.bio.slice(0, 150)}...` : trainer.bio}</p>
                            </div>

                            <button className="bg-[#E01717] text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                                Know More
                            </button>
                        </div>
                    </div>
                ))} */}
                {trainers.map((trainer, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-400 rounded-lg shadow-lg text-white flex flex-col lg:flex-row overflow-hidden">
                        <div className="w-full lg:w-1/2 h-48 lg:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${trainer.profileImage})` }}></div>
                        <div className="p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">{trainer.name}</h2>
                                <p className="text-lg text-[#E01717] font-bold mb-2">Experience: {trainer.experience} years</p>
                                <div className="mb-4">
                                    <h3 className="font-semibold">Available Days:</h3>
                                    <ul className="list-disc list-inside">
                                        {trainer.availableDays.map(day => (
                                            <li key={day.value}>{day.label}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-semibold">Available Slots:</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {trainer.availableTime.slots.map((slot, index) => (
                                            <button key={index} className="bg-gray-800 text-white py-1 px-2 rounded hover:bg-gray-700 transition">
                                                {slot.slotName} ({slot.duration})
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <p className="mb-4">{trainer.bio.length > 150 ? `${trainer.bio.slice(0, 150)}...` : trainer.bio}</p>
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
                            <Link to={`/trainer/${trainer._id}`} className="bg-[#E01717] text-white py-2 px-4 rounded text-center hover:bg-red-700 transition duration-300">
                                Know More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
{/* <div className="flex items-center space-x-4 mb-4">
    <p className="rounded-full transform transition-transform duration-300 hover:scale-110 w-12 h-12 flex items-center">
        <img src="https://img.icons8.com/color/48/facebook-new.png" alt="" />
    </p>
    <p className="rounded-full transform transition-transform duration-300 hover:scale-105 w-12 h-12 flex items-center">
        <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="" />
    </p>
    <p className="rounded-full transform transition-transform duration-300 hover:scale-105 w-12 h-12 flex items-center">
        <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="" />
    </p>
</div> */}

export default Trainers;