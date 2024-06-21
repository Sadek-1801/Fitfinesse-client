import PropTypes from 'prop-types';

const Star = ({ filled, onClick }) => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={filled ? "yellow" : "gray"}
        className="h-6 w-6 cursor-pointer"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.168 3.6h3.794c.969 0 1.372 1.24.588 1.81l-3.072 2.234 1.168 3.6c.3.921-.755 1.688-1.54 1.118L10 12.347l-3.067 2.143c-.785.57-1.84-.197-1.54-1.118l1.168-3.6L3.49 8.337c-.784-.57-.381-1.81.588-1.81h3.794l1.168-3.6z" />
    </svg>
);

Star.propTypes = {
    filled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

const StarRating = ({ rating, setRating }) => (
    <div className="flex items-center space-x-2 mb-2">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                filled={rating > i}
                onClick={() => setRating(i + 1)}
            />
        ))}
    </div>
);

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    setRating: PropTypes.func.isRequired,
};

export default StarRating;
