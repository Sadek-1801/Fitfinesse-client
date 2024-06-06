import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user} = useAuth()
    const handleToggle = () => {
        setIsOpen(!isOpen)
      }
      console.log(user);
    return (
        <div>
            <div className='bg-gray-800 text-gray-100 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/' className="flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="man-running-in-gym 1">
                                <g id="Group">
                                    <g id="_x31_7_51_">
                                        <g id="Group_2">
                                            <path id="Vector" d="M24.4319 9.34162C22.4587 9.34162 20.8593 7.74223 20.8593 5.7694C20.8593 3.79666 22.4587 2.19727 24.4319 2.19727C26.4045 2.19727 28.0039 3.79666 28.0039 5.7694C28.0039 7.74223 26.4046 9.34162 24.4319 9.34162Z" fill="#E01717" />
                                            <path id="Vector_2" d="M23.2642 14.0092C22.0512 16.0926 20.8994 18.2128 19.793 20.3557C21.4283 21.1916 23.3633 22.6569 24.3497 23.4568C25.3362 24.2568 27.1753 28.3458 28.121 30.3008C29.1368 32.4004 25.8684 33.9233 24.8562 31.8326C24.0221 30.1095 22.6172 26.6801 21.7995 26.0069C20.9818 25.3337 18.2974 23.434 16.2495 22.7207C16.1487 22.6854 16.057 22.6436 15.97 22.597C13.4632 25.7786 8.55315 27.2815 4.36516 24.8341C2.15847 23.5445 4.15448 20.3647 6.36764 21.6583C9.43517 23.4522 12.6277 21.1584 14.0733 18.2864C15.519 15.4144 16.5433 13.3929 17.7152 11.359C15.4267 10.6291 13.3343 11.2958 11.6888 13.6002C10.3506 15.4751 7.22034 13.6773 8.57383 11.7802C11.7587 7.32005 16.5077 6.21313 21.2622 9.03575C21.4598 9.15314 22.3524 9.64495 22.5535 9.76433C25.509 11.5189 28.2556 11.1863 30.3067 8.31315C31.6459 6.43811 34.7755 8.23597 33.421 10.1328C30.8042 13.7985 27.13 15.1937 23.2642 14.0092Z" fill="#E01717" />
                                            <path id="Vector_3" d="M1.61942 34.5638H33.9436L36.4918 19.9992H30.0759C29.1814 19.9992 28.4564 19.2741 28.4564 18.3797C28.4564 17.4853 29.1815 16.7603 30.0759 16.7603H38.3806C39.275 16.7603 40 17.4853 40 18.3797V18.6004C40 18.6939 39.9919 18.7873 39.9758 18.8795L36.8997 36.4623C36.764 37.2373 36.0912 37.8027 35.3044 37.8027H1.61942C0.72501 37.8027 0 37.0776 0 36.1833C0 35.2888 0.72501 34.5638 1.61942 34.5638Z" fill="white" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="mx-1 text-white">
                            <h3 className="uppercase tracking-[0.15em] font-bold text-2xl font-body italic">FitFinesse</h3>
                        </div>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-800'
                >
                    <AiOutlineBars className='h-5 w-5 text-white' />
                </button>
            </div>
            <div className={`z-10 md:fixed flex flex-col overflow-x-hidden bg-gray-800 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform text-white ${isOpen && '-translate-x-full '
                }  md:translate-x-0  transition duration-200 ease-in-out`}>

                <div className="flex items-center p-2 space-x-4">
                    <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full" />
                    <div>
                        <h2 className="text-lg font-semibold text-white">{user?.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">View profile</a>
                        </span>
                    </div>
                </div>
                <div className="divide-y">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {/* Navigation items */}
                        <li>
                            <Link to={"allSubscriber"} rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>All Subscribers</span>
                            </Link>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        {/* More navigation items */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;