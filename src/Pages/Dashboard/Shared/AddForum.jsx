import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { uploadImage } from "../../../Components/Utility/uploadImage";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useRole from "../../../Hooks/useRole";

const AddForum = () => {
    const axiosSecure = useAxiosSecure()
    const [role, ] = useRole()
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        postImage: null,
        post: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            postImage: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const profileImageURL = await uploadImage(formData.profileImage)
        const forumData = {
            ...formData,
            role: role,
            postImage: profileImageURL,
        }
        try {
            const { data } = await axiosSecure.post("/addForum", forumData);
            toast.success(data.message);
        } catch (err) {
            console.log(err?.message);
            toast.error("Failed to apply. Please try again.");
        }

    };
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
            <Helmet>
                <title>FitFinesse | Add Forum</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-6">Add Forum Post</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="postImage" className="block text-sm font-medium text-gray-300">Post Image</label>
                    <input
                        type="file"
                        id="postImage"
                        name="postImage"
                        onChange={handleFileChange}
                        className="mt-1 p-2 block w-full text-gray-400 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="post" className="block text-sm font-medium text-gray-300">Post</label>
                    <textarea
                        id="post"
                        name="post"
                        value={formData.post}
                        onChange={handleChange}
                        rows="5"
                        className="mt-1 p-2 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddForum;