import { Button, Row, Col } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';

const HotelCard = () => {
  return (
    <Row
      className='rounded shadow-lg m-md-20'
      style={{ background: 'white', marginTop: '30px', marginBottom: '30px' }}
    >
      <Col md={4} className='d-flex align-items-center justify-content-center'>
        <img
          src='https://picsum.photos/300/200'
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
          <h1>Pearl Continental</h1>
          <div>
            <Rating readonly size={20} initialValue={4} />
          </div>
        </div>
        <div>Location: Bhurban</div>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
        <div className='d-flex justify-content-end'>
          <Button color='primary'>Book Room</Button>
        </div>
      </Col>
    </Row>
  );
};
export default HotelCard;
