import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ children, slides = 4 }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: slides,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;
