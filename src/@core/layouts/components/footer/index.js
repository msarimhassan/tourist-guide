// ** Icons Import
import { Icons } from '../../../../common';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  const { FA, BS } = Icons;
  return (
    <div style={{ background: '#006B83', color: 'white' }}>
      <Row>
        <Col md={5} className='pt-2 ps-5'>
          <h1 style={{ color: 'white' }}>Logo</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
          <p>Copyright © 2023. TOURZPAKISTAN, All Rights Reserved</p>
        </Col>
        <Col md={2} className='d-flex'>
          <ul style={{ listStyle: 'none', textAlign: 'center' }}>
            <li className='mt-2 fw-bold'>Home</li>
            <li className='mt-2 fw-bold'>Hote and Stays</li>
            <li className='mt-2 fw-bold'>Destinations</li>
          </ul>
        </Col>
        <Col md={2}>
          <ul style={{ listStyle: 'none', textAlign: 'center' }}>
            <li className='mt-2 fw-bold'>Tour</li>
            <li className='mt-2 fw-bold'>Tour Companies</li>
            <li className='mt-2 fw-bold'>Tour Packages</li>
            <li className='mt-2 fw-bold'>Tour Guide</li>
          </ul>
        </Col>
        <Col md={3}>
          <ul style={{ listStyle: 'none', textAlign: 'center' }}>
            <li className='mt-2 fw-bold'>Follow Us</li>
            <li className='mt-2 fw-bold'>
              <div className='d-flex justify-content-around'>
                <FA.FaInstagram size={20} />
                <FA.FaFacebook size={20} />
                <BS.BsTwitterX size={20} />
                <FA.FaYoutube size={20} />
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
