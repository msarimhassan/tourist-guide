import { Banner } from '../../components';
import { Row, Col, Card, Button, CardBody } from 'reactstrap';
import { Calendar, Clock } from 'react-feather';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';

const Info = ({ label, value }) => {
  return (
    <Row className='justify-content-center'>
      <Col md={6} className='font-weight-bold'>
        <h4> {label}</h4>
      </Col>
      <Col md={6}>{value}</Col>
    </Row>
  );
};

const SingleTour = () => {
  return (
    <div>
      <Banner text={'Tour to Skardu'} />

      <Row className='mt-4'>
        <Col md={8}>
          <div className='d-flex'>
            <div
              className='mx-1 border rounded d-flex justify-content-center flex-column align-items-center'
              style={{ height: '100px', width: '200px' }}
            >
              <Clock size={30} />
              <div className='d-flex mt-2'>
                <h5>Time: </h5>
                <h5> 11:30</h5>
              </div>
            </div>
            <div
              className='mx-1 border rounded d-flex justify-content-center flex-column align-items-center'
              style={{ height: '100px', width: '200px' }}
            >
              <Calendar size={30} />
              <div className='d-flex mt-2'>
                <h5>Availability: </h5>
                <h5>June 1-20</h5>
              </div>
            </div>
          </div>

          {/* <div className='d-flex  justify-content-around'>
            <div className='d-flex align-items-center'>
              <h4>Availability :</h4>
              <h4 className='ms-2'>June (1-20)</h4>
            </div>
            <div className='d-flex align-items-center'>
              <h4>Time :</h4>
              <h4 className='ms-2'>11:30pm</h4>
            </div>
          </div> */}
          <hr />
          <div>
            <h2>Tour Details</h2>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <hr />

          <Card>
            <CardBody>
              <h5>Why Book with us?</h5>
              <hr />
              <h6>No-hassle best price guarentee</h6>
              <hr />
              <h6>Customer care available</h6>
              <hr />
              <h6>Hand-picked Tours & Activities</h6>
              <hr />
              <h6>Travel Insurance</h6>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <div className='bg-primary rounded p-2'>
              <h1 className='text-white text-center'>Price : 1200Rs</h1>
            </div>
            <div className='px-5 py-2'>
              <div className='mt-2'>
                <Flatpickr className='form-control' placeholder='Start Date' />
              </div>
              <div className='mt-2'>
                <Select placeholder='People' />
              </div>
              <div className='mt-2'>
                <Button color='primary' className='w-100'>
                  Proceed
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 
      <Row className='mt-5'>
        <Col md={6}>
          <div className='d-flex align-items-center'>
            <h4 className='d-flex align-items-center'>
              <Calendar /> <span className='ms-1'>Availability :</span>
            </h4>

            <h5 className='ms-2'>June 1-20</h5>
          </div>
        </Col>
        <Col md={6}>
          <div className='d-flex align-items-center'>
            <h4 className='d-flex align-items-center'>
              <Clock /> <span className='ms-1'>Time :</span>
            </h4>

            <h5 className='ms-2'>11:30</h5>
          </div>
        </Col>
      </Row>

      <div className='mt-3'>
     
      </div>

      <hr />
      <Info label={'Departure & return location'} value={'Lahore - Islamabad'} />
      <hr />
      <Info label={'Departure Time'} value={'11:30'} />
      <hr /> */}
    </div>
  );
};
export default SingleTour;
