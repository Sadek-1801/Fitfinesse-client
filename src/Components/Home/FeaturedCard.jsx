import PropTypes from 'prop-types'
const FeaturedCard = ({ title, description, icon }) => {
    return (
        <div className="bg-black border-2 border-gray-700 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
                <div className='relative p-2 bg-gray-200 rounded-full'>
                    <img src={icon} alt={`${title} icon`} className="w-14 h-14 border-2 rounded-full p-1 shadow-lg" />
                </div>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};
FeaturedCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.any
}

export default FeaturedCard;