import { useState } from "react";
import { uploadImage } from "../../../../Components/Utility/uploadImage";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
    const axiosSecure = useAxiosSecure()
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageURL = await uploadImage(image)
        const classData = {
            title,
            image: imageURL,
            description,
            numberOfBookings: 0
        }
        try {
            const { data } = await axiosSecure.post("/addClass", classData)
            if (data.insertedId) {
                toast.success("You've Successfully added a Class to DB")
            }
        } catch (err) {
            toast.error(err?.message)
        }
        // Reset the form fields
        setTitle('');
        setImage('');
        setDescription('');
    };
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
            <Helmet>
                <title>FitFinesse | Add Classes</title>
            </Helmet>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Add New Class</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-300">Image</label>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add Class
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;