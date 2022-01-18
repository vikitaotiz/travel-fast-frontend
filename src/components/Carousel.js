import Slider from "react-slick";

const Carousel = () => {
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
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
      <div className="carousel-wrapper">
        <Slider {...settings}>
        <div>
                <img className="car-image" src="https://media.istockphoto.com/photos/on-a-road-trip-with-our-dog-picture-id1324381802?b=1&k=20&m=1324381802&s=170667a&w=0&h=x2JxCpUvXgcY0jcz06QFIXVm1uTFugV4iEjJXbIb4rI=" />
                <p className="car-model text-center">Legend 3</p>
                <p className="car-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img className="car-image" src="https://media.istockphoto.com/photos/road-trip-with-my-best-friend-picture-id1324380685?b=1&k=20&m=1324380685&s=170667a&w=0&h=T7fFkZmHzvye117esYVj5aRmZ5po_67XbDxIELFkBDg=" />
                <p className="car-model text-center">Legend 3</p>
                <p className="car-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img className="car-image" src="https://media.istockphoto.com/photos/happy-black-family-of-three-singing-having-fun-riding-car-picture-id1331273789?b=1&k=20&m=1331273789&s=170667a&w=0&h=9p6fxCcDkEcX7StuEFHxf4bBURphbbLJT192c3621Sg=" />
                <p className="car-model text-center">Legend 3</p>
                <p className="car-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
                <img className="car-image" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <p className="car-model text-center">Legend 3</p>
                <p className="car-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img className="car-image" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <p className="car-model text-center">Legend 3</p>
                <p className="car-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img className="car-image" src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <p className="car-model text-center">Legend 3</p>
                <p className="car-desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </Slider>
      </div>
    );
}

export default Carousel;
