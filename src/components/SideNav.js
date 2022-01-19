import { FaBars, FaHome, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const SideNav = () => (
  <div className="s-layout__sidebar">
    <Link className="s-sidebar__trigger" to="#0">
      <FaBars />
    </Link>

    <nav className="s-sidebar__nav">
      <div className="d-flex justify-content-center logo-wrapper">
        <img src={Logo} alt="Car" className="logo" />
      </div>
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
            <em>My Reservations</em>
          </Link>
        </li>
        <li>
          <Link className="s-sidebar__nav-link" to="/reserve">
            <FaPen />
            <em>Reserve Car</em>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideNav;
