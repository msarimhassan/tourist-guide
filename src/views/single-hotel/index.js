import { Row, Col, Card, CardBody, CardText, Input, Button } from 'reactstrap';
import Flatpickr from 'react-flatpickr';
import { Calendar, Clock } from 'react-feather';

import HotelBanner from '../../assets/images/banners/Hotel-banner.jpeg';
import { DynamicBanner } from '../../components';
import { Icons } from '../../common';
import Arrow from '../../assets/images/Arrow.png';
import Breakfast from '../../assets/images/breakfast.png';
import Wifi from '../../assets/images/wifi.png';
import Parking from '../../assets/images/parking.png';

import Luxury from '../../assets/images/rooms/luxury.png';
import Family from '../../assets/images/rooms/family.png';
import Master from '../../assets/images/rooms/master.png';
import Premium from '../../assets/images/rooms/premium.png';

import RoomModal from './RoomModal';

import { useState } from 'react';

const hotelData = [Breakfast, Wifi, Parking];

const roomTypes = [
  {
    image: Luxury,
    type: 'Luxury Room',
    price: '30,000',
  },
  {
    image: Family,
    type: 'Family Room',
    price: '30,000',
  },
  {
    image: Master,
    type: 'Master Room',
    price: '30,000',
  },
  {
    image: Premium,
    type: 'Luxury Room',
    price: '30,000',
  },
];

const SingleHotel = () => {
  const { IO5, MD, FA } = Icons;

  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div>
      <DynamicBanner image={HotelBanner} text={'The Blue Green Vacation Foundation'} />

      <RoomModal
        key={openModal}
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedRoom={selectedRoom}
      />

      {/* <Row className='mt-3'>
        <Col md={8}>
          <div>
            <h2 style={{ color: '#83B5D1' }}>The Blue Green Fountain</h2>
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
      </Row> */}

      <Row className='mt-3' style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <Col md={6}>
          <img src={Arrow} style={{ width: '100px' }} />
          <h1 className='mt-2' style={{ color: '#83B5D1' }}>
            The Blue Green Fountain
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col md={6} className='mt-2'>
          <img
            src='https://picsum.photos/300/200'
            style={{ objectFit: 'cover', width: '100%', height: '300px' }}
          />
        </Col>
      </Row>

      {/* Room booking include */}

      <div className='mt-5' style={{ background: '#E5EDF3', width: '100%', padding: '40px' }}>
        <div className='ms-1'>
          <img src={Arrow} style={{ width: '100px' }} />
          <h2 className='mt-1' style={{ color: '#317EA7' }}>
            Our Room Booking Include
          </h2>
        </div>

        <div className='d-flex align-items-center justify-content-around mt-3 flex-wrap'>
          {hotelData.map((image, index) => {
            return <img key={index} style={{ width: '150px', height: '180px' }} src={image} />;
          })}
        </div>
      </div>

      <div className='ms-1 mt-5'>
        <img src={Arrow} style={{ width: '100px' }} />
        <h1 className='mt-2' style={{ color: '#317EA7' }}>
          Select Room
        </h1>
      </div>

      <Row>
        {roomTypes.map((type) => {
          return (
            <Col
              className='mt-2'
              style={{ position: 'relative' }}
              md={6}
              onClick={() => {
                setSelectedRoom(type);
                setOpenModal(true);
              }}
            >
              <img
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
                src={type.image}
              />
              <div style={{ position: 'absolute', top: 0, background: '#F5F5F5', padding: '5px' }}>
                <h1 style={{ color: '#575757' }}>PKR {type.price}</h1>
              </div>
              <div style={{ position: 'absolute', bottom: 0, padding: '5px' }}>
                <h1 style={{ color: 'white' }}>{type.type}</h1>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SingleHotel;
