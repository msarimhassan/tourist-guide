import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';

const HotelCard = () => {
  return (
    <Card className='mb-4 ms-4' style={{ width: '100%', maxWidth: '400px' }}>
      <CardImg
        top
        width='20%'
        src='https://picsum.photos/300/200'
        alt='Hotel Image'
        style={{ objectFit: 'cover' }}
      />
      <CardBody style={{ width: '100%' }}>
        <div className='d-flex justify-content-between'>
          <CardTitle tag='h3'>Hotel Name</CardTitle>
          <Rating size={20} initialValue={4} readonly />
        </div>
        <CardText>Location: City, Country</CardText>
        <CardText>2 Nights - $200</CardText>
        <Button color='primary'>Book Now</Button>
      </CardBody>
    </Card>
  );
};
export default HotelCard;
