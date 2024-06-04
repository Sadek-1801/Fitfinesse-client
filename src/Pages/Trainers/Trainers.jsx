import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const Trainers = () => {
    const axiosCommon = useAxiosCommon();
    const {data:trainers = [], isLoading } = useQuery({
        queryKey: ["trainers"],
        queryFn: async() => {
            const {data} = await axiosCommon("/trainers")
            return data
        }
    })
    if(isLoading) return <p className="min-h-screen flex items-center justify-center text-6xl text-white bg-black">Loading........</p>
    return (
        <div className="bg-black min-h-screen p-8">
            <h1 className="text-3xl text-white text-center mb-8">Meet Our Trainers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {trainers.map((trainer, index) => (
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
                            <div className="flex items-center space-x-4 mb-4">
                                <p className="rounded-full transform transition-transform duration-300 hover:scale-105 w-10 h-10 flex items-center">
                                    <img src="https://img.icons8.com/color/48/facebook-new.png" alt="" />
                                </p>
                                <p className="rounded-full transform transition-transform duration-300 hover:scale-105 w-10 h-10 flex items-center">
                                    <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="" />
                                </p>
                                <p className="rounded-full transform transition-transform duration-300 hover:scale-105 w-10 h-10 flex items-center">
                                    <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="" />
                                </p>
                            </div>
                            <button className="bg-[#E01717] text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                                Know More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainers;