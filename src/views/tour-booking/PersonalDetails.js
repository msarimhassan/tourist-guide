import { Input, Row, Col, Button } from 'reactstrap';
import { useAuth, useLoader, useToast } from '../../hooks';
import { Network, Url } from '../../apiConfiguration';
import { removeTour } from '../../redux/tour';

const PersonalDetails = ({ stepper, tour }) => {
  const { currentUser } = useAuth();
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();

  const bookTour = async () => {
    const payload = {
      noOfPeople: tour?.people,
      tourId: tour?._id,
    };
    setLoader(true);
    const response = await Network.post(Url.createTourBooking, payload);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage('Please wait for the company confirmation');
    stepper.next();
  };

  return (
    <div>
      <Row>
        <Col md={12} className='mt-2'>
          <Input placeholder='Name' value={currentUser?.name} disabled />
        </Col>

        <Col md={6} className='mt-2'>
          <Input placeholder='Email' name='email' value={currentUser?.email} disabled />
        </Col>
        <Col md={6} className='mt-2'>
          <Input placeholder='Phone No' name='phone_no' value={currentUser?.phoneNo} disabled />
        </Col>
      </Row>

      <div className='d-flex justify-content-end mt-2'>
        <Button color='primary' onClick={() => bookTour()}>
          Book Now
        </Button>
      </div>
    </div>
  );
};
export default PersonalDetails;
