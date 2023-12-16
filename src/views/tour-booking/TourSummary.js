import { Card, CardBody, CardText, CardTitle, CardHeader, Button } from 'reactstrap';
import { Icons } from '../../common';
import dayjs from 'dayjs';

const TourSummary = ({ tour }) => {
  const { LU } = Icons;
  return (
    <Card className='border'>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='border py-2 px-2 rounded'>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Starting From</h6>
              <h5>{dayjs(tour?.start_date).format('DD-MM-YYYY')}</h5>
            </div>
            <div style={{ width: '1px', height: '70px', background: '#EAEAEA' }}></div>

            <div>
              <h6>Ending At</h6>
              <h5>{dayjs(tour?.end_date).format('DD-MM-YYYY')}</h5>
            </div>
          </div>
          <h6 className='mt-2'>Total Length of Stay</h6>
          <div className='d-flex align-items-center'>
            <LU.LuCalendarDays size={15} />
            <CardText className='ms-1'>23</CardText>
          </div>
          <h6 className='mt-2'>You Selected</h6>
          <CardText>{tour?.title}</CardText>
        </div>

        <div className='mt-2'>
          <CardTitle>Your Price Summary</CardTitle>
          <div className='d-flex align-items-center justify-content-between'>
            <CardText>Tour Price</CardText>
            <CardText>{tour?.price}Rs</CardText>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <CardText>People</CardText>
            <CardText>{tour?.people}</CardText>
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <CardText className='fw-bold lead'>Total Price</CardText>
            <CardText className='fw-bold lead'>{tour?.price * tour?.people}Rs</CardText>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TourSummary;
