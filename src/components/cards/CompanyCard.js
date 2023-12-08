import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';

const CompanyCard = () => {
  return (
    <Card style={{ border: 'none', overflow: 'hidden', borderRadius: '0' }}>
      <img
        alt='Sample'
        src='https://picsum.photos/300/200'
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '0', // Remove border-radius for a rectangular image
        }}
      />
    </Card>
  );
};

export default CompanyCard;
