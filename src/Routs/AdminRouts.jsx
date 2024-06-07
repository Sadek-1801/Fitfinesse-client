import PropTypes from 'prop-types'
import useRole from '../Hooks/useRole';
import { Navigate } from 'react-router-dom';

const AdminRouts = ({children}) => {
    const [role, isLoading] = useRole()

  if (isLoading) return <div><p>Loading.......</p></div>
  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
};
AdminRouts.propTypes = {
    children: PropTypes.element,
  }
  
export default AdminRouts;