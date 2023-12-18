import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import { getImageRoute } from '../../utility/Utils';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Black color with 75% opacity
  };

  const textContainerStyle = {
    position: 'absolute',
    bottom: '20px', // Adjust the distance from the bottom as needed
    left: '20px', // Adjust the distance from the left as needed
    color: 'white',
  };

  return (
    <Card
      style={{ height: '400px', position: 'relative' }}
      onClick={() => navigate('/tour/tour-packages', { state: { companyId: company?._id } })}
    >
      <CardImg
        src={getImageRoute(company?.banner)}
        alt='Background Image'
        style={{ height: '100%', objectFit: 'cover' }}
      />
      <CardImgOverlay style={overlayStyle}>
        <div style={textContainerStyle}>
          <CardTitle tag='h5'>{company?.name}</CardTitle>
          <CardText>Test Description</CardText>
        </div>
      </CardImgOverlay>
    </Card>
  );
};

export default CompanyCard;
