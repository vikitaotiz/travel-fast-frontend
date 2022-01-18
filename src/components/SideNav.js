import { FaBars, FaHome, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { selectNav } from '../reducers/carSlice';

const SideNav = () => {
  return (
    <div className="s-layout__sidebar">
      <Link className="s-sidebar__trigger" to="#0">
        <FaBars />
      </Link>

      <nav className="s-sidebar__nav">
        <ul>
          <li>
            <Link className="s-sidebar__nav-link" to="/cars">
              <FaHome />
              <em>Dashboard</em>
            </Link>
          </li>
          <li>
            <Link className="s-sidebar__nav-link" to="/reservations">
              <FaPen />
              <em>Booking</em>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
