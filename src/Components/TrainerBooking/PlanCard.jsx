import PropTypes from "prop-types"


const PlanCard = 
  ({ id, name, description, price, features, selected, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(id)}
            className={`max-w-sm mx-auto border rounded-lg cursor-pointer ${selected ? 'border-red-600' : 'border-gray-300'}`}
        >
            <input 
            type="radio" 
            id={id} 
            name="plan" 
            value={name} 
            onChange={() => onSelect(id)} className="hidden" />
            <div className="p-6">
                <label htmlFor={id} className="cursor-pointer">
                    <h1 className="text-xl font-medium text-gray-100 capitalize lg:text-2xl inline">{name}</h1>
                </label>
                <p className="mt-4 text-white">{description}</p>
                <h2 className="mt-4 text-2xl font-semibold text-gray-100 sm:text-3xl">${price} <span className="text-base font-medium">/Month</span></h2>
                <p className="mt-1 text-white">Yearly payment</p>
            </div>
            <hr className="border-gray-200" />
            <div className="p-6">
                <h1 className="text-lg font-medium text-gray-100 capitalize lg:text-xl">What is included:</h1>
                <div className="mt-8 space-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="mx-4 text-gray-100">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
PlanCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    features: PropTypes.array,
    selected: PropTypes.any,
    onSelect: PropTypes.any
}
export default PlanCard;