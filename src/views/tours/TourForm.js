import { Input, Row, Col, Label, Card, CardBody, Button, CardTitle } from 'reactstrap';
import Flatpicker from 'react-flatpickr';
import { useFormik } from 'formik';

const TourForm = () => {
  return (
    <Card className='bg-white'>
      <CardBody>
        <CardTitle>Tour Details</CardTitle>
        <Row>
          <Col md={6}>
            <Label>Title</Label>
            <Input className='form-control' placeholder='tour title' />
          </Col>
          <Col md={6}>
            <Label>Location</Label>
            <Input className='form-control' placeholder='tour location' />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col md={6}>
            <Label>Price</Label>
            <Input className='form-control' placeholder='tour title' />
          </Col>
          <Col md={6}>
            <Label>Image</Label>
            <Input className='form-control' type='file' placeholder='tour image' />
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col md={6}>
            <Label>Start Date</Label>
            <Flatpicker
              style={{ background: 'white' }}
              className='form-control'
              placeholder='Start Date'
            />
          </Col>
          <Col md={6}>
            <Label>End Date</Label>
            <Flatpicker
              style={{ background: 'white' }}
              className='form-control'
              placeholder='End Date'
            />
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col md={12}>
            <Label>Description</Label>
            <Input type='textarea' />
          </Col>
        </Row>

        <div className='d-flex justify-content-end mt-2'>
          <Button className='me-2'>Cancel</Button>
          <Button color='primary'>Add</Button>
        </div>
      </CardBody>
    </Card>
  );
};
export default TourForm;
