import { Banner } from '../../components';
import { Row, Col, Card, Button, CardBody, Input } from 'reactstrap';
import { Calendar } from 'react-feather';
import { Network, Url } from '../../apiConfiguration';
import { useLoader, useToast } from '../../hooks';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AddTour } from '../../redux/tour';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

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
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [tour, setTour] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storedTours = useSelector((state) => state.tour.tours);

  const [price, setPrice] = useState([]);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [people, setPeople] = useState(1);
  const { id } = useParams();

  const getTourByTourId = async () => {
    setLoader(true);
    const response = await Network.get(Url.getTourByTourId(id));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setPrice(response.data.tour.price);
    setOriginalPrice(response.data.tour.price);
    setTour(response.data.tour);
  };

  const calculatePrice = (value) => {
    setPeople(value);
    setPrice(originalPrice * value);
  };

  const bookTour = () => {
    if (people == 0) return showErrorMessage('Please enter number of people');

    const payload = {
      ...tour,
      people,
    };
    dispatch(AddTour(payload));
    showSuccessMessage('Tour added to the booking list');
    navigate('/tour/tour-packages/book');
  };

  useEffect(() => {
    getTourByTourId();
  }, []);

  return (
    <div>
      <Banner text={tour?.title} />
      <Row className='mt-4'>
        <Col md={8}>
          <div style={{ height: '100px', width: '300px' }}>
            <div className='text-center'>
              <Calendar size={40} />
            </div>
            <div className='d-flex rounded d-flex justify-content-between align-items-center'>
              <div>
                <h5> Starting Date </h5>
                <h5>{dayjs(tour?.start_date).format('DD-MM-YYYY')}</h5>
              </div>
              <div>
                <h5> Ending Date </h5>
                <h5>{dayjs(tour?.end_date).format('DD-MM-YYYY')}</h5>
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
            <p>{tour?.description}</p>
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
              <h1 className='text-white text-center'>Price : {price}Rs</h1>
            </div>
            <div className='px-5 py-2'>
              <div className='mt-2'>
                <Label>No of People</Label>
                <Input
                  value={people}
                  type='number'
                  placeholder='Number of people'
                  onChange={(e) => calculatePrice(e.target.value)}
                />
              </div>
              <div className='mt-2'>
                <Button color='primary' className='w-100' onClick={() => bookTour()}>
                  Proceed
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default SingleTour;
