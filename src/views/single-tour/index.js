import { Banner } from '../../components';
import { Row, Col, Card, Button, CardBody, Input, Label } from 'reactstrap';
import { Calendar, MapPin } from 'react-feather';
import { Network, Url } from '../../apiConfiguration';
import { useLoader, useToast } from '../../hooks';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AddTour, removeTour } from '../../redux/tour';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Avatar from '@components/avatar';

const SingleTour = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [tour, setTour] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [comment, setComment] = useState(null);

  const storedTours = useSelector((state) => state.tour.tours);

  const [price, setPrice] = useState([]);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [people, setPeople] = useState(1);
  const [comments, setComments] = useState([]);
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

    dispatch(removeTour());

    const payload = {
      ...tour,
      people,
    };
    dispatch(AddTour(payload));
    showSuccessMessage('Tour added to the booking list');
    navigate('/tour/tour-packages/book');
  };

  const submitComment = async () => {
    setLoader(true);
    const response = await Network.post(Url.addComment, {
      tourId: tour?._id,
      comment,
    });
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage(response.data);
    setComment(null);
    getComments();
  };

  const getComments = async () => {
    setLoader(true);
    const response = await Network.post(Url.getComments, { tourId: id });
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setComments(response.data);
  };

  useEffect(() => {
    getTourByTourId();
    getComments();
  }, []);

  return (
    <div>
      <Banner text={tour?.title} />
      <Row className='mt-4'>
        <Col md={8}>
          <Row>
            <Col md={3} className='d-flex align-items-center'>
              <div
                className='border d-flex align-items-center justify-content-center rounded p-1'
                style={{ background: '#83B5D1', width: '50px', height: '50px' }}
              >
                <Calendar color='white' size={40} />
              </div>
              <div className='ms-1'>
                <h6>Starting Date</h6>
                <p>{dayjs(tour?.start_date).format('DD-MM-YYYY')}</p>
              </div>
            </Col>
            <Col md={3} className='d-flex align-items-center '>
              <div
                className='border d-flex align-items-center justify-content-center rounded p-1'
                style={{ background: '#83B5D1', width: '50px', height: '50px' }}
              >
                <Calendar color='white' size={40} />
              </div>
              <div className='ms-1'>
                <h6>Ending Date</h6>
                <p>{dayjs(tour?.end_date).format('DD-MM-YYYY')}</p>
              </div>
            </Col>
            <Col md={4} className='d-flex align-items-center'>
              <div
                className='border d-flex align-items-center justify-content-center rounded p-1'
                style={{ background: '#83B5D1', width: '50px', height: '50px' }}
              >
                <MapPin color='white' size={40} />
              </div>
              <div className='ms-1'>
                <h6>Location</h6>
                <p>{tour?.location}</p>
              </div>
            </Col>
          </Row>

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

          <Row>
            <Col md={12}>
              {comments.map(({ comment, userId }) => (
                <div className='m-2 d-flex  align-items-center'>
                  <Avatar
                    color={'light-primary'}
                    style={{
                      height: '40px',
                      width: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    content={userId?.name?.slice(0, 2)}
                  />
                  <Input className='w-50 ms-2' value={comment} disabled />
                </div>
              ))}
            </Col>
            <h1 className='mt-5'>Leave a Reply</h1>
            <Col md={12} className='mt-1'>
              <Input
                value={comment}
                type='textarea'
                placeholder='Comment'
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                color='primary'
                onClick={() => submitComment()}
                className='mt-2'
                disabled={comment == null || comment == ''}
              >
                Submit
              </Button>
            </Col>
          </Row>
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
