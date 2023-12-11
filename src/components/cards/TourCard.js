import { Rating } from 'react-simple-star-rating';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import { Heart } from 'react-feather';
import { getImageRoute } from '../../utility/Utils';

const TourCard = ({ tour }) => {
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
          borderRadius: '0px 10px 10px 0px',
        }}
      >
        Hot deal
      </div>

      <div style={{ position: 'absolute', right: 10, top: 10, color: 'white' }}>
        <Heart size={20} />
      </div>
      <img alt='Sample' src={getImageRoute(tour?.banner)} />
      <CardBody>
        <CardTitle tag='h5'>{tour?.title}</CardTitle>
        <CardText style={{ color: '#317EA7', fontSize: '20px' }}>{tour?.company?.name}</CardText>

        {/* <CardText>2 Days | 3 Nights</CardText> */}
        <div className='d-flex justify-content-between'>
          <Rating readonly size={20} initialValue={4} />
          <p style={{ color: '#317EA7', fontWeight: 'bolder', fontSize: '20px' }}>
            PKR {tour?.price}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default TourCard;
