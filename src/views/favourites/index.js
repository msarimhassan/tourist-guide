import { useLoader, useToast } from '../../hooks';
import { Network, Url, config } from '../../apiConfiguration';
import { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Banner, TourCard } from '../../components';

const Favourites = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [favourite, setFavourite] = useState([]);

  const removeFavourite = async (id) => {
    setLoader(true);
    const response = await Network.delete(Url.removeFavourite(id));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);

    showSuccessMessage(response.data);
    getFavourite();
  };

  const getFavourite = async () => {
    setLoader(true);
    const response = await Network.get(Url.getFavourites);
    setLoader(false);
    setFavourite(response.data);
  };

  useEffect(() => {
    getFavourite();
  }, []);

  return (
    <div>
      <Row className='justify-content-center'>
        {favourite.map((tour, key) => {
          console.log({ tour });
          return (
            <Col md={4}>
              <TourCard
                removeFavourite={removeFavourite}
                isFavourite={true}
                addFavourite={() => {}}
                tour={tour?.tourId}
                key={key}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Favourites;
