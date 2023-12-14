import { Row, Col, Input, Label, Card, CardBody } from 'reactstrap';
import Select from 'react-select';

const RoomTypes = [
  {
    label: 'Luxury Room',
    value: 'luxury',
  },
  {
    label: 'Premium Room',
    value: 'luxury',
  },
  {
    label: 'Double Simple Room',
    value: 'double-simple-room',
  },
  {
    label: 'Master Room',
    value: 'master-room',
  },
  {
    label: 'Family luxury Room',
    value: 'family-luxury-room',
  },
];

const RoomForm = () => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col md={6} className='mt-2'>
            <Label>Area of the Room</Label>
            <Input placeholder='Room Area' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>Guests</Label>
            <Input placeholder='Room Guest' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>No of Bathroom</Label>
            <Input placeholder='Room Bathrooms' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>Room Type</Label>
            <Select options={RoomTypes} />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>Room Type</Label>
            <Input placeholder='Room price' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>Description</Label>
            <Input placeholder='Room dscription' type='textarea' />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default RoomForm;
