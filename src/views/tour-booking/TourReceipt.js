import { Alert, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../../common';

const TourRecipt = () => {
  const { MD } = Icons;
  const navigate = useNavigate();
  return (
    <div>
      <Alert color='success'>
        <div className='d-flex align-items-center alert-heading'>
          <MD.MdOutlineDone size={40} />
          <h4>Your Booking is confirmed</h4>
        </div>
        <div className='alert-body'>Thankyou</div>
      </Alert>
      <div className='d-flex justify-content-end'>
        <Button color='primary' onClick={() => navigate('/tour/tour-companies')}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default TourRecipt;
