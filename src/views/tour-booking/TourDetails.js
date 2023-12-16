import { Row, Col, Button } from 'reactstrap';

import { getImageRoute } from '../../utility/Utils';
import { useNavigate } from 'react-router-dom';

const TourDetails = ({ stepper, tour }) => {
  const navigate = useNavigate();


  const remove = () => {
    navigate('/tour/tour-companies');
  };

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
        <Button color='danger' className='me-1' onClick={() => remove()}>
          Back
        </Button>
        <Button color='primary' onClick={() => stepper.next()}>
          Next
        </Button>
      </div>
    </div>
  );
};
export default TourDetails;
