import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <Helmet>
                <title>FitFinesse | Dashboard</title>
            </Helmet>
            <div className="bg-gray-900">
                <Sidebar />
            </div>

            <div className='flex-1'>
                <div className='p-5 bg-black md:ml-64 min-h-screen'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;