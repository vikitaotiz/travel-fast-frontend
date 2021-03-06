import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';
import BgImage from '../assets/hompageBg.jpg';
import { getHeaders } from '../services/common';

const Homepage = () => {
  const headers = getHeaders();
  if (headers) {
    return <Navigate to="/cars" />;
  }
  return (
    <div>
      <div className="homepage">
        <nav className="d-flex px-5 px-sm-2 justify-content-between align-items-center homepage__nav">
          <Link className="logo" to="/">TravelFast</Link>
          <div className="d-flex">
            <Link className="me-2 btn btn-info reg-btn" to="/register">Register</Link>
            <Link className="btn btn-info" to="/login">Login</Link>
          </div>
        </nav>
        <main className="px-5 d-flex justify-content-center align-items-center text-center homepage__main" style={{ backgroundImage: `url(${BgImage})` }}>
          <div className="homepage__welcome_text">
            <h1>We Never Stop! We never falter!</h1>
            <h3>Speed at its best</h3>
            <Link className="btn btn-primary btn-lg" to="/register">Register</Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
