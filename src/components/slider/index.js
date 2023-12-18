import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ children, slides = 3, responsiveSlides = 2, infinite = true }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: infinite,
    slidesToShow: slides,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: responsiveSlides,
          slidesToScroll: responsiveSlides,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: responsiveSlides,
          slidesToScroll: responsiveSlides,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: responsiveSlides,
          slidesToScroll: responsiveSlides,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;
