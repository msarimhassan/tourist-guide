// ** Icons Import
import { Icons } from '../../../../common';
import { Row, Col } from 'reactstrap';
import AppLogo from '@src/assets/images/logo/footer-logo.png';

const Footer = () => {
  const { FA, BS } = Icons;
  return (
    <div className='rounded' style={{ background: '#0F3950', color: 'white' }}>
      <div className='d-flex align-items-center justify-content-center flex-column pt-2'>
        <img style={{ width: '220px', height: '100px' }} src={AppLogo} />
        <p className='text-center'>
          Travgo Touring Company is synonymous with unparalleled travel experiences, seamlessly
          blending adventure and comfort. Our commitment to crafting unforgettable journeys ensures
          that every expedition with Travgo is a captivating exploration marked by exceptional
          service and discovery.
        </p>
        <ul style={{ listStyle: 'none', textAlign: 'center' }}>
          <li className='mt-2 fw-bold'>Follow Us</li>
          <li className='mt-2 fw-bold'>
            <div className='d-flex justify-content-around'>
              <FA.FaInstagram size={20} className='me-1 ms-1' />
              <FA.FaFacebook size={20} className='me-1 ms-1' />
              <BS.BsTwitterX size={20} className='me-1 ms-1' />
              <FA.FaYoutube size={20} className='me-1 ms-1' />
            </div>
          </li>
        </ul>
      </div>

      {/* <Col md={3}>
         
        </Col> */}
    </div>
  );
};

export default Footer;
