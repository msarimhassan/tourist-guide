import Destination from '../../assets/images/cards/sarfaranga.jpeg';
import { Rating } from 'react-simple-star-rating';

const DestinationCard = () => {
  return (
    <div className='d-flex flex-column align-items-center shadow m-2'>
      <div className='rounded position-relative' style={{ height: '300px', width: '300px' }}>
        <div className='position-absolute top-0 end-0' style={{ padding: '5px' }}>
          <div className='bg-success text-white rounded' style={{ padding: '2px' }}>
            Recommended
          </div>
        </div>
        <img
          src={Destination}
          className='rounded'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <div
        className='bg-white rounded shadow px-3 py-1'
        style={{ width: '280px', marginTop: '-50px', zIndex: 1000 }}
      >
        <h3 className='text-center'>Sarfaranga Cold Desert</h3>
        <h5 className='text-primary text-center'>Skardu</h5>

        {/* Social Media Links */}
        <div className='d-flex align-items-center justify-content-around mt-1'>
          <Rating readonly size={20} initialValue={4} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
