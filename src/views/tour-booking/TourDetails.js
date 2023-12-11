import { Row, Col, Button } from 'reactstrap';
import Banner from '../../assets/images/banners/banner-1.avif';
import { getImageRoute } from '../../utility/Utils';

const TourDetails = ({ stepper, tour }) => {
  return (
    <div>
      <Row className='border rounded py-2 mx-2'>
        <Col md={4}>
          <img src={getImageRoute(tour?.banner)} className='rounded' style={{ width: '100%' }} />
        </Col>
        <Col md={8}>
          <h4>{tour?.title}</h4>
          <p>{tour?.description}</p>
        </Col>
      </Row>

      <div className='d-flex justify-content-end mt-2'>
        <Button color='primary' onClick={() => stepper.next()}>
          Next
        </Button>
      </div>
    </div>
  );
};
export default TourDetails;
