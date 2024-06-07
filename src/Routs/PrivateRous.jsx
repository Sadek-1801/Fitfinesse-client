import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'

const PrivateRous = ({children}) => {
    const {user, loader} = useAuth()
    const location = useLocation()
    if(loader) return <div className="min-h-screen flex items-center justify-center"><p>Loading..........</p></div>
    if(!user) return<Navigate to='/login' state={location.pathname} replace='true' />
    return children
};
PrivateRous.propTypes = {
    children: PropTypes.node
}
export default PrivateRous;