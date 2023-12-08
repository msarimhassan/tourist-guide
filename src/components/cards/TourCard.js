import { Rating } from 'react-simple-star-rating';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import Nature from '../../assets//images/cards/Card-1.jpeg';

import CardImg from '../../assets//images/cards/card-img.png';
import { Heart, MapPin } from 'react-feather';

const TourCard = () => {
  return (
    <Card
      className='m-1'
      style={{
        width: '25rem',
      }}
    >
      <div
        style={{
          position: 'absolute',
          background: '#317EA7',
          color: 'white',
          paddingLeft: '10px',
          paddingRight: '10px',
          top: 20,
          borderRadius:'0px 10px 10px 0px'
        }}
      >
        Hot deal
      </div>

      <div style={{position:'absolute',right:10,top:10,color:'white'}}>
        <Heart size={20}/>
      </div>
      <img alt='Sample' src={CardImg} />
      <CardBody>
        <CardTitle tag='h5'>Hunza Valley Expedition</CardTitle>
        <CardText style={{ color: '#317EA7', fontSize: '20px' }}>Adventure Seekers</CardText>

        <CardText>2 Days | 3 Nights</CardText>
        <div className='d-flex justify-content-between'>
          <Rating readonly size={20} initialValue={4} />
          <p style={{ color: '#317EA7', fontWeight: 'bolder', fontSize: '20px' }}>PKR 15,000</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default TourCard;
