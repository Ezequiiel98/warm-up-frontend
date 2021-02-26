import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavLink({ children, linkTo, isActive }) {
  return (
    <Link to={linkTo} className={`nav-item nav-link ${isActive ? 'active' : ''}`}>
      { children }
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

NavLink.defaultProps = {
  isActive: false,
};
