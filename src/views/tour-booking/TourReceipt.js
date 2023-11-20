import { Alert } from 'reactstrap';
import { Icons } from '../../common';
const TourRecipt = () => {
  const { MD } = Icons;
  return (
    <div>
      <Alert color='success'>
        <div className='d-flex align-items-center alert-heading'>
          <MD.MdOutlineDone size={40} />
          <h4>Your Booking is confirmed</h4>
        </div>
        <div className='alert-body'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.
        </div>
      </Alert>
    </div>
  );
};

export default TourRecipt;
