import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { TiDelete } from "react-icons/ti";

const Classes = () => {
    const axiosCommon = useAxiosCommon();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchText, setSearchText] = useState('');

    const { data, isLoading } = useQuery({
        queryKey: ['allClasses', page, limit, searchTerm],
        queryFn: async () => {
            const { data } = await axiosCommon(`/allClasses?page=${page}&limit=${limit}&search=${searchTerm}`);
            return data;
        },
        keepPreviousData: true
    });

    if (isLoading) return <div>Loading...........</div>;

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value));
        setPage(1); // Reset to the first page
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(searchText);
        setPage(1); // Reset to the first page
    };

    const handleReset = () => {
        setSearchTerm('');
        setSearchText('');
        setPage(1);
    };

    const numberOfPages = data.totalPages;
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);

    return (
        <section className="bg-black py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mx-auto sm:w-3/5">
                    <h1 className="text-3xl text-white font-bold text-center mb-4">Discover Our Full Range of Fitness Classes</h1>
                    <p className="text-center text-gray-300 mb-12">
                        Explore our extensive selection of fitness classes designed to help you achieve your health and wellness goals. Whether you&apos;re looking to build strength, improve flexibility, or simply stay active, we have a class that&apos;s perfect for you. Browse through our offerings and find the ideal workout to suit your needs and preferences. Join us and take the first step towards a healthier, fitter you.
                    </p>
                </div>
                <div className="flex justify-center mb-6 space-x-4">
                    <form onSubmit={handleSearchSubmit} className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-red-400 focus-within:ring-red-300">
                        <input
                            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                            type='text'
                            onChange={handleSearchChange}
                            value={searchText}
                            placeholder='Search Classes'
                            aria-label='Search Classes'
                        />
                        <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-btn rounded-md hover:bg-red-600 focus:bg-gray-600 focus:outline-none">
                            Search
                        </button>
                    </form>
                    <button onClick={handleReset} className="px-2 text-white bg-red-600 rounded hover:bg-red-700 transition duration-300">
                        <TiDelete className="w-8 h-8" />
                    </button>
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
                    {/* Previous Button */}
                    <button
                        disabled={page === 1}
                        onClick={() => handlePageChange(page - 1)}
                        className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-red-500 hover:text-white"
                    >
                        Prev
                    </button>
                    {/* Page Numbers */}
                    {pages.map(btnNum => (
                        <button
                            key={btnNum}
                            onClick={() => handlePageChange(btnNum)}
                            className={`px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md ${page === btnNum ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-600'}`}
                        >
                            {btnNum}
                        </button>
                    ))}
                    {/* Next Button */}
                    <button
                        disabled={page === numberOfPages}
                        onClick={() => handlePageChange(page + 1)}
                        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-red-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
                    >
                        Next
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    <label className="text-white mr-2">Items per page:</label>
                    <select value={limit} onChange={handleLimitChange} className="px-4 py-2 rounded-md bg-gray-800 text-white">
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default Classes;
