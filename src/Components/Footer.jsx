import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <footer className="bg-black text-white py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        {/* Logo and Name */}
                        <Link to={"/"} className="flex items-start -mx-1" >
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
                        {/* Contact Info */}
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
                            <p>Email: contact@example.com</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Address: 123 Main St, City, Country</p>
                        </div>
                        {/* Social Media Links */}
                        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
                            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E01717]">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E01717]">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E01717]">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E01717]">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-700" />
                    <div className="text-center">
                        <p>&copy; 2024 Website Name. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;