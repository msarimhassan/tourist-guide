import { Button, Card, Row, Col, Input, CardBody, CardText, CardTitle } from 'reactstrap';
import Flatpickr from 'react-flatpickr';
import { Search, Heart, MapPin } from 'react-feather';
import Avatar from '@components/avatar';

import Nature from '../../assets/images/cards/Card-1.jpeg';
import { TourCard, TestimonialCard } from '../../components';

const benefits = [
  {
    id: '01',
    color: 'light-primary',
    title: 'Expertise and Convenience',
    content:
      'We take pride in offering our customers an unforgettable travel experience. Our  commitment to providing both convenience and expertise sets us apart as your trusted partner in exploring the world.',
  },
  {
    id: '02',
    color: 'light-danger',
    title: 'Exclusive Deals and Discounts',
    content:
      'Our exclusive Deals and Discounts ensure that you can explore the world wonders while keeping your budget in check, making your dream journeys a reality.',
  },
  {
    id: '03',
    color: 'light-warning',
    title: 'Peace of Mind and Support',
    content:
      'Travel with confidence and peace of mind as our experienced team handles all the details, leaving you free to savor every moment of your journey.',
  },
];

const works = [
  {
    id: '01',
    color: 'light-primary',
    title: 'Select Company',
    content: 'Choose a touring company that suits your preferences and interests.',
  },
  {
    id: '02',
    color: 'light-danger',
    title: 'Select Package',
    content: 'Browse through a variety of tour packages offered by the selected company.',
  },
  {
    id: '03',
    color: 'light-warning',
    title: 'Enter Details',
    content: 'Enter your personal and booking information to customize your tour experience.',
  },
  {
    id: '04',
    color: 'light-success',
    title: 'Book Tours',
    content: 'Confirm and book your chosen tour to embark on your adventure.',
  },
];

const Home = () => {
  return (
    <div>
      {/* Banner */}

      <div className='banner'>
        <div className='banner-content d-flex align-items-center flex-column'>
          <h1 style={{ color: 'white' }}>Discover A Beautiful Place With Us</h1>
          <p>Make your dreams come true</p>
          <Button className='mt-1' color='primary'>
            Explore Now
          </Button>
        </div>
      </div>

      {/* Search Filter */}

      <div style={{ marginTop: '-80px' }} className='d-flex justify-content-center'>
        <Card className='border w-75 p-2 p-sm-5'>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col md={3} className='mt-2 mt-sm-0'>
              <Input placeholder='Destination' />
            </Col>
            <Col md={3} className='mt-2 mt-sm-0'>
              <Flatpickr className='form-control' placeholder='Start Date' />
            </Col>
            <Col md={3} className='mt-2 mt-sm-0'>
              <Flatpickr className='form-control' placeholder='End Date' />
            </Col>
            <Col md={2} className='mt-2 mt-sm-0'>
              <Input placeholder='Guests' />
            </Col>
            <Col md={1} className='mt-2 mt-sm-0'>
              <Button color='primary'>
                <Search size={20} />
              </Button>
            </Col>
          </Row>
        </Card>
      </div>

      {/* Suggestions for Discovery */}

      <h1 className='text-center mt-5'>Suggestions for discovery</h1>
      <div className='d-flex justify-content-center flex-wrap'>
        {/* Cards */}

        {Array(4)
          .fill(0)
          .map(() => {
            return (
              <div
                style={{
                  width: '250px',
                  height: '120px',
                  background: '#FFCCBB',
                  borderRadius: '80px',
                }}
                className='d-flex px-2 align-items-center m-2'
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img src={Nature} style={{ objectFit: 'cover', height: 'auto', width: '100%' }} />
                </div>
                <div className='ms-1'>
                  <h4>Hunza</h4>
                </div>
              </div>
            );
          })}
      </div>

      {/* benefits of joining us */}

      <h1 className='text-center mt-5'>See some benefit of joining us</h1>

      <div>
        <Row className='d-flex align-items-center'>
          <Col md={6} className='d-flex justify-content-center flex-column align-content-center'>
            {benefits.map(({ id, color, title, content }) => {
              return (
                <div className='d-flex align-items-center justify-content-center' key={id}>
                  <div style={{ height: '100px', width: '100px' }}>
                    <Avatar
                      color={color}
                      style={{
                        height: '50px',
                        width: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      content={id}
                    />
                  </div>

                  <div className='ms-1'>
                    <h4>{title}</h4>
                    <p>{content}</p>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col className='d-flex justify-content-center' md={6}>
            <img style={{ borderRadius: '20px' }} src={Nature} height='400px' />
          </Col>
        </Row>
      </div>

      {/* Explore to Destinations */}

      <h1 className='mt-5 text-center'>Explore to destination</h1>

      <div className='d-flex flex-wrap justify-content-center align-items-center'>
        {Array(4)
          .fill(0)
          .map(() => (
            <TourCard />
          ))}
      </div>

      {/* How it works */}

      <div style={{ backgroundColor: '#FFCCBB' }} className='py-4 mt-5 rounded'>
        <h1 className='text-center' style={{ color: 'black' }}>
          How it works
        </h1>

        <div className='d-flex justify-content-center align-items-center flex-wrap mt-4'>
          {works.map(({ title, content, id, color }, key) => (
            <Card
              key={key}
              style={{
                width: '18rem',
                height: '18rem',
                padding: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '20px',
              }}
              className='mx-1'
            >
              <Avatar
                color={color}
                style={{
                  height: '80px',
                  width: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                content={id}
              />
              <CardBody className='text-center'>
                <CardTitle tag='h5'>{title}</CardTitle>
                <CardText>{content}</CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <h1 className='mt-5 text-center'>Our Testimonials</h1>
      <div className='d-flex justify-content-center flex-wrap align-items-center'>
        {Array(3)
          .fill(0)
          .map((key) => {
            return <TestimonialCard key={key} />;
          })}
      </div>

      {/* News letter */}
      <div style={{ backgroundColor: '#FFCCBB' }} className='mt-5 py-4 rounded shadow'>
        <h1 className='text-center' style={{ color: 'black' }}>
          Your Travel Journey Starts Here
        </h1>
        <div className='d-flex justify-content-center align-items-center mt-3'>
          <Input className='w-50' placeholder='Email' size={'small'} />
          <Button color='primary' className='ms-1'>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
