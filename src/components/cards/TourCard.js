import { Rating } from 'react-simple-star-rating';

import Nature from '../../assets//images/cards/Card-1.jpeg';
import { Heart, MapPin } from 'react-feather';

const TourCard = () => {
  return (
    <div
      style={{ height: '400px', width: '300px', position: 'relative' }}
      className='shadow-lg rounded-5 m-1'
    >
      <div style={{ width: '300px', height: '200px', overflow: 'hidden' }}>
        <img
          src={Nature}
          style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '20px' }}
        />
      </div>
      {/* Heart Icon */}
      {/* <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: '50px',
          height: '50px',
          background: 'rgba(226,232,228,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <Heart size={20} color='red' />
      </div> */}
      <div className='d-flex justify-content-between align-items-center px-1'>
        <div style={{ width: '100px' }}>
          <h4 className='mt-2 ms-2'>Luxus Grand</h4>
        </div>
        <div>
          <h4>Rs.25000</h4>
        </div>
      </div>

      <div className='d-flex mt-2 ms-2'>
        <h5>
          <MapPin size={20} color='red' />
          Location: Hunza
        </h5>
      </div>

      <div className='d-flex justify-content-between align-items-center px-1 mt-2'>
        <h5>CompanyName</h5>
        <Rating size={20} initialValue={4} readonly />
      </div>
    </div>
  );
};

export default TourCard;
