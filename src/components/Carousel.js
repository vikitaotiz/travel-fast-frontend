import Slider from 'react-slick';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Carousel = ({ cars }) => {
  const settings = {
    infinite: true,
    dots: false,
    initialSlide: 0,
    className: 'slider',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {cars?.map(({
          id, image, name, description, created_at,
        }) => (
          <div key={created_at}>
            <Link to={`/cars/${id}`}>
              <img className="car-image" src={image} />
              <p className="car-model text-center">{name}</p>
              <p className="car-desc text-center">{description}</p>
              <div className="social-icons d-flex justify-center align-center">
                <FaFacebook className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaInstagram className="social-icon" />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
