import { Button, Card, Row, Col, Input, CardBody, CardText, CardTitle } from 'reactstrap';
import Flatpickr from 'react-flatpickr';
import { Search } from 'react-feather';
import Select from 'react-select';
import Avatar from '@components/avatar';
import BannerImage from '../../assets/images/banners/banner-3.png';
import Benefitbanner from '../../assets/images/banners/benefit.png';
import { Network, Url } from '../../apiConfiguration';
import { useLoader, useToast } from '../../hooks';
import { useNavigate } from 'react-router-dom';

import {
  TourCard,
  TestimonialCard,
  Banner,
  Carousel,
  SliderComponent,
  LocationSlide,
} from '../../components';
import { useEffect, useState } from 'react';

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

const location = [
  {
    label: 'Hunza',
    value: 'hunza',
  },
  {
    label: 'Skardu',
    value: 'skardu',
  },
  {
    label: 'Naran Kaghan',
    value: 'naran kaghan',
  },
  {
    label: 'Fairy Meadows',
    value: 'fairy meadows',
  },
  {
    label: 'Naltar Valley',
    value: 'naltar valley',
  },
  {
    label: 'Swat',
    value: 'swat',
  },
];

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [destination, setDestination] = useState(null);
  const { setLoader } = useLoader();
  const [tours, setTours] = useState([]);
  const { showErrorMessage, showSuccessMessage } = useToast();
  const navigate = useNavigate();

  const search = () => {
    navigate('/search-tours', {
      state: {
        destination,
        startDate: startDate && startDate[0],
        endDate: endDate && endDate[0],
      },
    });
  };

  const getDashboardData = async () => {
    setLoader(true);
    const response = await Network.get(Url.dashboardTours);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setTours(response.data);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div>
      {/* Banner */}
      {/* <div className='banner'>
        <div className='banner-content d-flex align-items-center flex-column'>
          <h1 style={{ color: 'black' }} className='fw-bolder'>
            Discover A Beautiful Place With Us
          </h1>
          <p>Make your dreams come true</p>
          <Button className='mt-1' color='primary'>
            Explore Now
          </Button>
        </div>
      </div> */}

      <div className='w-100'>
        <Carousel />
      </div>

      {/* Search Filter */}

      <div style={{ marginTop: '-60px' }} className='d-flex justify-content-center'>
        <Card className='w-75 p-2 px-sm-3 py-sm-2' style={{ background: '#0F3950' }}>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col md={3} className='mt-2 mt-sm-0'>
              <Select
                options={location}
                onChange={({ value }) => setDestination(value)}
                placeholder='Destination'
              />
            </Col>
            <Col md={3} className='mt-2 mt-sm-0'>
              <Flatpickr
                value={startDate}
                onChange={(value) => setStartDate(value)}
                style={{ background: 'white' }}
                className='form-control'
                placeholder='Start Date'
              />
            </Col>
            <Col md={3} className='mt-2 mt-sm-0'>
              <Flatpickr
                value={endDate}
                onChange={(value) => setEndDate(value)}
                style={{ background: 'white' }}
                className='form-control'
                placeholder='End Date'
              />
            </Col>
            <Col md={3} className='mt-2 mt-sm-0'>
              <Button
                color='#F97150'
                style={{ background: '#F97150', zIndex: 1, color: 'white' }}
                className='w-100 d-flex justify-content-center align-items-center'
                onClick={() => search()}
              >
                <div>Search</div>
                <Search className='ms-1' size={20} />
              </Button>
            </Col>
          </Row>
        </Card>
      </div>

      {/* Suggestions for Discovery */}

      <h1 className='text-center mt-5'>Suggestions for discovery</h1>
      <div className='mt-5'>
        <SliderComponent slides={4}>
          {location.map(({ label }) => (
            <LocationSlide label={label} />
          ))}
        </SliderComponent>
      </div>

      {/* benefits of joining us */}

      <h1 style={{ marginTop: '100px' }} className='text-center'>
        See some benefit of joining us
      </h1>

      <div className='mt-5'>
        <Row className='d-flex align-items-center px-sm-5'>
          <Col
            md={6}
            className='d-flex justify-content-center flex-column align-content-center mt-2 '
          >
            {benefits?.map(({ id, color, title, content }) => {
              return (
                <div className='d-flex align-items-center justify-content-center ' key={id}>
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
          <Col className='d-flex justify-content-center mt-2 ' md={6}>
            <img src={Benefitbanner} height='300px' />
          </Col>
        </Row>
      </div>

      {/* Explore to Destinations */}

      <h1 style={{ marginTop: '100px' }} className='text-center'>
        Explore to destination
      </h1>

      <div className='mt-5'>
        <SliderComponent slides={3} responsiveSlides={1} infinite={false}>
          {tours?.map((tour) => (
            <TourCard tour={tour} hideFavourite={true} />
          ))}
        </SliderComponent>
      </div>

      {/* How it works */}

      <div style={{ background: '#E5EDF3', marginTop: '150px' }} className='py-4 rounded'>
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
      <h1 style={{ marginTop: '150px' }} className='text-center'>
        Our Testimonials
      </h1>
      <div className='mt-5'>
        <SliderComponent>
          {Array(5)
            .fill(0)
            .map((key) => {
              return <TestimonialCard key={key} />;
            })}
        </SliderComponent>
      </div>

      {/* News letter */}
      <div
        style={{ background: `url(${BannerImage})`, marginTop: '150px' }}
        className='py-4 rounded shadow'
      >
        <h1 className='text-center' style={{ color: 'white' }}>
          Subscribe to our NewsLetter!
        </h1>
        <div className='d-flex justify-content-center align-items-center mt-3'>
          <Input className='w-50' placeholder='Email' size={'small'} />
          <Button color='primary' className='ms-1'>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
