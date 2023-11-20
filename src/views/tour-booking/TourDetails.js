import { Row, Col, Button } from 'reactstrap';
import Banner from '../../assets/images/banners/banner-1.avif';

const TourDetails = ({ stepper }) => {
  return (
    <div>
      <Row className='border rounded py-2 mx-2'>
        <Col md={4}>
          <img src={Banner} className='rounded' style={{ width: '100%' }} />
        </Col>
        <Col md={8}>
          <h4>Tour Name</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
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
