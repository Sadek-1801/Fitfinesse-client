import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const FeaturedTrainers = () => {
    const axiosCommon = useAxiosCommon()
    const {data: trainers = []} = useQuery({
        queryKey: ['featuredTrainers'],
        queryFn: async() => {
            const {data} = await axiosCommon("/featured-trainers")
            return data
        }
    })
    console.log(trainers);
    return (
        <section className="bg-black py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8">Our Featured Trainers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainers.map((trainer) => (
                        <div key={trainer.name} className="rounded-lg overflow-hidden shadow-md">
                            <img src={trainer.profileImage} alt={trainer.name} className="w-full h-64 object-cover" />
                            <div className="p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                                <p className="text-sm mb-2">
                                    <span className="text-4xl font-bold text-btn">
                                    {trainer.experience}</span> Years of Experience</p>
                                <p className="mb-4">{trainer.bio.length > 150 ? `${trainer.bio.slice(0, 150)}...` : trainer.bio}</p>
                                <div className="flex flex-wrap gap-2">
                                    {trainer.skills.map((expertise) => (
                                        <span key={expertise} className="px-2 py-1 bg-gray-700 rounded-full text-white text-xs">
                                            {expertise}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTrainers;