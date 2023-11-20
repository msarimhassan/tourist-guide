import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';

const CompanyCard = () => {
  return (
    <Card
      className='m-1'
      style={{
        width: '25rem',
      }}
    >
      <img alt='Sample' src='https://picsum.photos/300/200' />
      <CardBody>
        <CardTitle tag='h5'>Company Name</CardTitle>

        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s
          content.
        </CardText>
        <Rating readonly size={20} initialValue={4} />
      </CardBody>
    </Card>
  );
};

export default CompanyCard;
