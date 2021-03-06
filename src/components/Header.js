import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { clearHeaders } from '../services/common';

const Header = ({ hide }) => {
  const history = useNavigate();
  const handleClick = () => {
    clearHeaders();
    history('/');
  };
  return (
    <div className="d-flex align-items-end justify-content-center position-relative header">
      <Link to="/">
        <h3 className="heading">TravelFast</h3>
      </Link>
      {hide ? '' : <button className="btn btn-secondary logout-btn" type="button" onClick={handleClick}>Logout</button>}
    </div>
  );
};

Header.propTypes = {
  hide: PropTypes.bool,
};

Header.defaultProps = {
  hide: false,
};

export default Header;
