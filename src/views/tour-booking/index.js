import { useRef, useState } from 'react';
import Wizard from '@components/wizard';
import {  Row, Col } from 'reactstrap';
import TourSummary from './TourSummary';
import TourDetails from './TourDetails';
import PersonalDetails from './PersonalDetails';
import TourRecipt from './TourReceipt';
import { useSelector } from 'react-redux';

const TourBooking = () => {
  const ref = useRef(null);
  const [stepper, setStepper] = useState(null);
  const storedTours = useSelector((state) => state.tour.tours);

  const steps = [
    {
      id: 'tour-details',
      title: 'Tour Details',
      subtitle: 'Your Tour Details.',
      content: <TourDetails tour={storedTours[0]} stepper={stepper} />,
    },
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      content: <PersonalDetails tour={storedTours[0]} stepper={stepper} />,
    },
    {
      id: 'booking-success',
      title: 'Booking Receipt',
      subtitle: 'Your booking receipts',
      content: <TourRecipt stepper={stepper} />,
    },
  ];

  return (
    <div>
      <Row>
        <Col md={8}>
          <div className='horizontal-wizard'>
            <Wizard instance={(el) => setStepper(el)} ref={ref} steps={steps} />
          </div>
        </Col>
        <Col md={4}>
          <TourSummary tour={storedTours[0]} />
        </Col>
      </Row>
    </div>
  );
};

export default TourBooking;
