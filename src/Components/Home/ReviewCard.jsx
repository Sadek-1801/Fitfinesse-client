import PropTypes from 'prop-types'
const ReviewCard = ({ title, para, subTitle }) => {
    return (
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                <p className="relative px-6 text-white py-1 text-lg italic text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>{para}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 ">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg ">
                <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                <p className="text-xl text-white font-semibold leading-tight">{title}</p>
                <p className="text-sm text-gray-300 uppercase">{subTitle}</p>
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    title: PropTypes.string,
    para: PropTypes.string,
    subTitle: PropTypes.string
}

export default ReviewCard;