import { HotelCard } from '../../components';
import HotelBanner from '../../assets/images/banners/Hotel-banner.jpeg';
import { DynamicBanner } from '../../components';

const Hotels = () => {
  return (
    <div>
      <DynamicBanner image={HotelBanner} text={'Hotel and Stays'} />

      {Array(5)
        .fill(0)
        .map(() => {
          return <HotelCard />;
        })}
    </div>
  );
};

export default Hotels;
