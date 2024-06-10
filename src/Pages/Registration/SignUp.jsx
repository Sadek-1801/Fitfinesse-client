import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
    const imageURL = 'https://i.ibb.co/nCpbmF9/3d-gym-equipment.jpg'
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useAuth()
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photo: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setFormData({ ...formData, [name]: files ? files[0] : value });
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission logic here
        try{
            await createUser(formData.email, formData.password)
            await updateUserProfile(formData.name, formData.photo)
            navigate("/")
            toast.success("You've Succefully Logged In")
        }catch(err) {
            toast.error(err?.message)
        }

    };
    return (
        <section className="bg-black py-10 min-h-screen flex items-center justify-center">
            <Helmet>
                <title>FitFinesse | SignUp</title>
            </Helmet>
            <div className="container mx-auto px-6">
                <div className="flex md:items-stretch md:justify-between gap-6">
                    <div
                        className=" w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 bg-cover bg-center rounded-lg shadow-lg"
                        style={{ backgroundImage: `url(${imageURL})` }}
                    ></div>
                    <div className="w-full md:w-1/2 lg:w-1/2 flex items-center">
                        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full">
                            <h2 className="text-white text-3xl font-bold mb-8 text-center">Sign Up</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-white">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white">Photo</label>
                                    <input
                                        type="url"
                                        name="photo"
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full p-2 bg-[#E01717] text-white font-bold rounded hover:bg-red-600 transition-colors"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;