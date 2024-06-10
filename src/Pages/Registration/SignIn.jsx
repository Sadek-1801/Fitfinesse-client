import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
    const { googleLogin, signIn } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        try {
            await signIn(formData.email, formData.password);
            navigate("/");
            toast.success("You've Successfully Logged In");
        } catch (err) {
            toast.error(err?.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const { user } = await googleLogin();
            console.log(user);
            toast.success("Successfully Logged in");
            navigate("/");
        } catch (err) {
            console.log(err?.message);
        }
    };

    const imageURL = 'https://i.ibb.co/nCpbmF9/3d-gym-equipment.jpg';

    return (
        <section className="bg-black py-10 min-h-screen flex items-center justify-center">
            <Helmet>
                <title>FitFinesse | SignIn</title>
            </Helmet>
            <div className="container mx-auto px-6">
                <div className="flex md:items-stretch md:flex-row-reverse md:justify-between gap-6">
                    <div
                        className=" w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 bg-cover bg-center rounded-lg shadow-lg"
                        style={{ backgroundImage: `url(${imageURL})` }}
                    ></div>
                    <div className="w-full md:w-1/2 lg:w-1/2 flex items-center">
                        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full">
                            <h2 className="text-white text-3xl font-bold mb-8 text-center">Sign In</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
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
                                    <label className="block text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-800 text-white border border-[#E01717] rounded"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm text-white">Password</label>
                                    <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full p-2 bg-[#E01717] text-white font-bold rounded hover:bg-red-600 transition-colors"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
                                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                                    or login with Social Media
                                </a>
                                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                            </div>
                            <div className="flex items-center mt-6 -mx-2">
                                <button
                                    onClick={handleGoogleSignIn}
                                    type="button"
                                    className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                                >
                                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                        </path>
                                    </svg>
                                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                                </button>
                            </div>
                            <p className="mt-8 text-xs font-light text-center text-gray-400">
                                Do not have an account? <Link to={"/signup"} className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
