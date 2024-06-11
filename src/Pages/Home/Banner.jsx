import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const slides = [
        {
            header: "Welcome to FitFinesse",
            subheader: "Your journey to fitness starts here",
            buttonText: "Get Started",
            imageUrl: "https://i.ibb.co/nCpbmF9/3d-gym-equipment.jpg"
        },
        {
            header: "Achieve Your Goals",
            subheader: "Join our community today",
            buttonText: "Join Now",
            imageUrl: "https://i.ibb.co/nCpbmF9/3d-gym-equipment.jpg"
        },
        {
            header: "Stay Fit, Stay Healthy",
            subheader: "Discover our programs and services",
            buttonText: "Learn More",
            imageUrl: "https://i.ibb.co/nCpbmF9/3d-gym-equipment.jpg"
        }
    ];

    return (
        <div className="relative w-full overflow-hidden">
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className="w-full">
                    <div 
                        className="min-h-screen flex items-center justify-center bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                    >
                        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl text-white font-bold mb-4">{slide.header}</h2>
                            <p className="text-xl md:text-2xl text-gray-300 mb-6">{slide.subheader}</p>
                                <Link className="px-6 py-2 bg-[#E01717] text-white font-bold rounded hover:bg-red-600 transition-colors">
                                    {slide.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;