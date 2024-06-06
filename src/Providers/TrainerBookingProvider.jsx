import { createContext, useState } from 'react';
import PropTypes from 'prop-types'
export const TrainerBookingContext = createContext(null)

// eslint-disable-next-line react/prop-types
const TrainerBookingProvider = ({ children }) => {
    const [trainer, setTrainer] = useState(null)
    const [slot, setSlot] = useState(null)
    const bookingInfo = {
        trainer, setTrainer, slot, setSlot
    }
    return (
        <TrainerBookingContext.Provider value={bookingInfo}>
            {children}
        </TrainerBookingContext.Provider>
    );
};

TrainerBookingContext.propTypes = {
    children: PropTypes.node
}
export default TrainerBookingProvider;