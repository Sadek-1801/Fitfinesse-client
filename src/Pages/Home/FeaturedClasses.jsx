import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FeaturedClasses = () => {
    // ToDo: try to minimize the code and use query to sort in dsc
    // const [featured, setFeatured] =useState('dsc')

    // const axiosCommon = useAxiosCommon()
    const { data: classes = [], isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/featured-classes`)
            return data.slice(0, 6)
        }
    })
    console.log(classes);
    if(isLoading) return <div>Loading</div>
    return (
        <section className="bg-black py-10">
        <div className="container mx-auto">
          <h2 className="text-white text-3xl font-bold mb-8 text-center">Featured Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map(item => (
              <div key={item.id} className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
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