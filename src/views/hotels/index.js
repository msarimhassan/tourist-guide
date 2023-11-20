import { HotelCard } from '../../components';

const Hotels = () => {
  return (
    <div className='d-flex flex-wrap align-items-center'>
      {Array(5)
        .fill(0)
        .map(() => {
          return <HotelCard />;
        })}
    </div>
  );
};

export default Hotels;
