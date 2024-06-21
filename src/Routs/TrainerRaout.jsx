import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import useRole from "../Hooks/useRole";

const TrainerRaout = ({ children }) => {
    const [role, isLoading] = useRole()
    if (isLoading) return <div><p>Loading.......</p></div>
    if (role === 'trainer') return children
    return <Navigate to='/dashboard' />
};
TrainerRaout.propTypes = {
    children: PropTypes.element,
  }

export default TrainerRaout;