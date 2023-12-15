import { Button, Row, Col } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';

import { getImageRoute } from '../../utility/Utils';

const HotelCard = ({ hotel }) => {
  return (
    <Row
      className='rounded shadow-lg m-md-20'
      style={{ background: 'white', marginTop: '30px', marginBottom: '30px' }}
    >
      <Col md={4} className='d-flex align-items-center justify-content-center'>
        <img
          src={getImageRoute(hotel?.banner)}
          alt='Hotel Image'
          style={{ objectFit: 'cover', height: '250px', width: '100%' }}
        />
      </Col>
      <Col
        md={8}
        className='d-flex flex-column justify-content-center p-md-10'
        style={{ height: '250px', overflow: 'scroll' }}
      >
        <div className='d-flex align-items-center justify-content-between'>
          <h1>{hotel?.name}</h1>
          <div>
            <Rating readonly size={20} initialValue={4} />
          </div>
        </div>
        <div>Location: {hotel?.location}</div>
        <hr />
        <div>{hotel?.description}</div>
        <div className='d-flex justify-content-end'>
          <Link to={`/hotels-&-stays/${hotel?._id}`}>
            <Button color='primary'>Book Room</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};
export default HotelCard;
