import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from '../../assets/images/banners/appBanner1.jpg';
import banner2 from '../../assets/images/banners/appBanner2.jpg';
import DynamicBanner from '../DynamicBanner';

const Carousel = () => {
  const slides = [
    {
      image: banner,
      caption: 'Discover A beautiful Place With US',
    },
    {
      image: banner2,
      caption: 'Discover A beautiful Place With US',
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings}>
      {slides.map(({ image, caption }) => {
        return (
          <div>
            <DynamicBanner height='600px' image={image} text={caption} hasButton={true} />
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
