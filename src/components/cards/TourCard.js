import { Rating } from 'react-simple-star-rating';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { MapPin } from 'react-feather';
import { useLoader, useToast } from '../../hooks';
import { Icons } from '../../common';

import { Heart } from 'react-feather';
import { getImageRoute } from '../../utility/Utils';
import { useNavigate } from 'react-router-dom';

const TourCard = ({ tour, addFavourite, isFavourite, removeFavourite }) => {
  const navigate = useNavigate();
  const { FA } = Icons;

  return (
    <Card
      className='m-1'
      style={{
        width: '25rem',
      }}
      onClick={() => navigate(`/tour/tour-packages/${tour?._id}`)}
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
        {isFavourite ? (
          <FA.FaHeart
            size={20}
            onClick={(e) => {
              e.stopPropagation();
              removeFavourite(tour?._id);
            }}
          />
        ) : (
          <Heart
            size={20}
            onClick={(e) => {
              e.stopPropagation();
              addFavourite(tour?._id);
            }}
          />
        )}
      </div>
      <img alt='Sample' src={getImageRoute(tour?.banner)} />
      <CardBody>
        <CardTitle style={{ cursor: 'pointer' }} tag='h5'>
          {tour?.title}
        </CardTitle>
        <CardTitle
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          tag='h5'
        >
          <MapPin />
          <div className='ms-1'>{tour?.location}</div>
        </CardTitle>
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
