import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const FeaturedClasses = () => {
    // ToDo: try to minimize the code and use query to sort in dsc
    // const [featured, setFeatured] =useState('dsc')

    const axiosCommon = useAxiosCommon()
    const { data: featuredClasses = [], isLoading } = useQuery({
        queryKey: ['featuredClasses'],
        queryFn: async () => {
            const { data } = await axiosCommon(`/featured-classes`)
            return data
        }
    })
    if (isLoading) return <div>Loading...........</div>
    return (
        <section className="bg-black py-10">
            <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
            <h1 className="text-3xl text-white font-bold text-center mb-4">Featured Classes</h1>
            <p className="text-center text-gray-300 mb-12">
            Explore our most popular and exciting classes to help you reach your fitness goals.
            </p>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredClasses.map(item => (
                        <div key={item._id} className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl uppercase font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 mb-4">{item.description}</p>
                            <p className="text-yellow-400 font-bold">Booking Number: {item.numberOfBookings}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedClasses;