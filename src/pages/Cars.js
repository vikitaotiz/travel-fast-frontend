// import { Navigate } from 'react-router';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { FaBars } from 'react-icons/fa';
import Carousel from '../components/Carousel'

const Cars = () => (
  <div className="page">
    <div className="headers">
      <h1 className="page-header">Trending Cars</h1>
      <p>One stop car purchase.</p>
    </div>
    <Carousel />
  </div>
);

export default Cars;
