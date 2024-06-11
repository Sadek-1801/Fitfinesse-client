import PropTypes from 'prop-types'
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#E01717", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};
SamplePrevArrow.propTypes = {
    className: PropTypes.any,
    style: PropTypes.any,
    onClick: PropTypes.any
}

export default SamplePrevArrow;