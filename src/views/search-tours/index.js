import { Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { useLoader, useToast } from '../../hooks';
import { Network, Url, config } from '../../apiConfiguration';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { TourCard } from '../../components';

const SearchTours = () => {
  const { setLoader } = useLoader();
  const location = useLocation();
  const { state } = location;
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [tours, setTours] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const getSearchData = async () => {
    setLoader(true);
    const response = await Network.post(Url.searchTours, {
      location: state?.destination,
      start_date: state?.startDate
        ? dayjs(state?.startDate && state?.startDate).format('DD-MM-YYYY')
        : null,
      end_date: state?.endDate
        ? dayjs(state?.endDate && state?.endDate).format('DD-MM-YYYY')
        : null,
    });

    setLoader(false);

    if (!response.ok) return showErrorMessage(response.data);
    setTours(response.data);
  };

  const addFavourite = async (id) => {
    setLoader(true);
    const response = await Network.post(
      Url.addToFavourite,
      { tourId: id },
      (
        await config()
      ).headers
    );
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage(response.data);
    getFavourite();
  };

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
    getSearchData();
    getFavourite();
  }, []);

  return (
    <div>
      <Row className='justify-content-center'>
        {tours?.map((tour, key) => {
          const isFavourite = favourite.find((favTour) => favTour?.tourId?._id == tour?._id);
          return (
            <Col md={4}>
              <TourCard
                removeFavourite={removeFavourite}
                isFavourite={isFavourite}
                addFavourite={addFavourite}
                tour={tour}
                key={key}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SearchTours;
