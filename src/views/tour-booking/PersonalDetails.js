import { Input, Row, Col, Button } from 'reactstrap';

const PersonalDetails = ({ stepper }) => {
  return (
    <div>
      <Row>
        <Col md={6} className='mt-2'>
          <Input placeholder='First Name' name='first_name' />
        </Col>
        <Col md={6} className='mt-2'>
          <Input placeholder='Last Name' name='last_name' />
        </Col>
        <Col md={6} className='mt-2'>
          <Input placeholder='Email' name='email' />
        </Col>
        <Col md={6} className='mt-2'>
          <Input placeholder='Phone No' name='phone_no' />
        </Col>
      </Row>

      <div className='d-flex justify-content-end mt-2'>
        <Button color='primary' onClick={() => stepper.next()}>
          Book Now
        </Button>
      </div>
    </div>
  );
};
export default PersonalDetails;
