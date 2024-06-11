import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const Classes = () => {
    const axiosCommon = useAxiosCommon();
    const [page, setPage] = useState(1);
    const limit = 6;

    const { data, isLoading } = useQuery({
        queryKey: ['allClasses', page],
        queryFn: async () => {
            const { data } = await axiosCommon(`/allClasses?page=${page}&limit=${limit}`);
            return data;
        },
        keepPreviousData: true
    });

    if (isLoading) return <div>Loading...........</div>;

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <section className="bg-black py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
                    <h1 className="text-3xl text-white font-bold text-center mb-4">Discover Our Full Range of Fitness Classes</h1>
                    <p className="text-center text-gray-300 mb-12">
                    Explore our extensive selection of fitness classes designed to help you achieve your health and wellness goals. Whether you&apos;re looking to build strength, improve flexibility, or simply stay active, we have a class that&apos;s perfect for you. Browse through our offerings and find the ideal workout to suit your needs and preferences. Join us and take the first step towards a healthier, fitter you.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.classes.map(item => (
                        <div key={item._id} className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl uppercase font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 mb-4">{item.description}</p>
                            <p className="text-yellow-400 font-bold">Booking Number: {item.numberOfBookings}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    {Array.from({ length: data.totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 mx-1 rounded ${page === index + 1 ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-600'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;
