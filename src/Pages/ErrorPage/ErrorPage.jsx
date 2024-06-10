import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-2xl text-gray-400 mb-8">Oops! The page you are looking for does not exist.</p>
            <Link to={"/"}
                className="px-6 py-3 bg-[#E01717] text-white text-lg font-bold rounded hover:bg-red-600 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    </div>
    );
};

export default ErrorPage;