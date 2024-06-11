import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
const Reviews = () => {
    const axiosCommon = useAxiosCommon()
    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosCommon.get("/reviews")
            return data
        }
    })

    // console.log(reviews);
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    if (isLoading) return <div>Loading......</div>
    return (
        <section className="my-8 bg-black w-full overflow-hidden">
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                <h1 className="p-4 text-white text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
            </div>
            <div className="slider-container mx-auto">
                <Slider {...settings}>
                    {
                        reviews.map(review =>
                            <div
                                key={review._id} className="flex flex-col justify-between max-w-sm mx-4 my-6 shadow-lg border border-gray-400 rounded-lg">
                                <div className="flex-1 px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                                    <p className="relative px-6 text-white py-1 text-lg italic text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
                                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                        </svg>{review.review.slice(0, 200) + "..."}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 ">
                                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                        </svg>
                                    </p>
                                </div>
                                <div className="flex bg-btn flex-col items-center justify-center p-8 rounded-b-lg ">
                                    <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                                    <p className="text-xl text-white font-semibold leading-tight">{review.name}</p>
                                    <p className="text-sm text-gray-300 uppercase">{review.designation}</p>
                                </div>
                            </div>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;