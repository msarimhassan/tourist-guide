import { Row, Col, Card, CardBody, CardText, Input, Button } from 'reactstrap';
import Flatpickr from 'react-flatpickr';
import { Calendar, Clock } from 'react-feather';

import HotelBanner from '../../assets/images/banners/Hotel-banner.jpeg';
import { DynamicBanner } from '../../components';
import { Icons } from '../../common';

const SingleHotel = () => {
  const { IO5, MD, FA } = Icons;
  return (
    <div>
      <DynamicBanner image={HotelBanner} text={'The Blue Green Vacation Foundation'} />

      <Row className='mt-3'>
        <Col md={8}>
          <div>
            <h2>The Blue Green Fountain</h2>
          </div>

          <div className='d-flex flex-wrap justify-content-start align-items-center'>
            <div
              className='mx-1 my-1 border rounded d-flex justify-content-center flex-column align-items-center'
              style={{ height: '100px', width: '200px' }}
            >
              <IO5.IoBedSharp size={40} />
            </div>
            <div
              className='mx-1 my-1 border rounded d-flex justify-content-center flex-column align-items-center'
              style={{ height: '100px', width: '200px' }}
            >
              <MD.MdBathtub size={40} />
            </div>
            <div
              className='mx-1 my-1 border rounded d-flex justify-content-center flex-column align-items-center'
              style={{ height: '100px', width: '200px' }}
            >
              <FA.FaParking size={40} />
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>
              <h4>Lets go on a vacation</h4>
              <div>
                <div className='mt-2'>
                  <Flatpickr className='form-control' placeholder='Check-in' />
                </div>
                <div className='mt-2'>
                  <Flatpickr className='form-control' placeholder='Check-out' />
                </div>
                <div className='mt-2'>
                  <Input className='form-control' placeholder='Guest' />
                </div>
                <div className='mt-2'>
                  <Button className='w-100' color='primary'>
                    Proceed
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SingleHotel;
