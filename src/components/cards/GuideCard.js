import Profile from '../../assets/images/portrait/small/avatar-s-11.jpg';
import { Facebook, Phone, Instagram, Twitch, Twitter } from 'react-feather';

const GuideCard = () => {
  return (
    <div className='d-flex flex-column align-items-center shadow m-2'>
      <div className='rounded' style={{ height: '300px', width: '300px' }}>
        <img src={Profile} className='rounded' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </div>
      <div className='bg-white rounded shadow px-3 py-1' style={{ width: '280px',marginTop:'-50px   ' }}>
        <h3 className='text-center'>John Doe</h3>
        <h5 className='text-primary text-center'>Guide</h5>

        {/* Social Media Links */}
        <div className='d-flex align-items-center justify-content-around mt-1'>
          <Facebook  />
          <Phone />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
