import { Banner, TourCard } from '../../components';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';
import { useLoader, useToast } from '../../hooks';
import { Network, Url, config } from '../../apiConfiguration';
import { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';


const TourPackages = () => {
  const { setLoader } = useLoader();
  const { state } = useLocation();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [tours, setTours] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [filterTours, setFilteredTours] = useState([]);

  const getToursByCompanyID = async () => {
    setLoader(true);
    const response = await Network.get(Url.getTourByCompanyId(state?.companyId));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setFilteredTours(response.data.tour);
    setTours(response.data.tour);
  };

  const getFavourite = async () => {
    setLoader(true);
    const response = await Network.get(Url.getFavourites);
    setLoader(false);
    setFavourite(response.data);
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
    getToursByCompanyID();
    getFavourite();
  };

  const removeFavourite = async (id) => {
    setLoader(true);
    const response = await Network.delete(Url.removeFavourite(id));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);

    showSuccessMessage(response.data);
    getToursByCompanyID();
    getFavourite();
  };

  const filteredTours = (location) => {
    if (!location) return setFilteredTours(tours);

    const foundTours = tours.filter(
      (tour) => tour?.location?.toUpperCase() == location?.toUpperCase()
    );


    setFilteredTours(foundTours);
  };

  useEffect(() => {
    getToursByCompanyID();
    getFavourite();
  }, []);

  const location = [
    {
      label: 'Hunza',
      value: 'hunza',
    },
    {
      label: 'Skardu',
      value: 'skardu',
    },
    {
      label: 'Naran Kaghan',
      value: 'naran kaghan',
    },
    {
      label: 'Fairy Meadows',
      value: 'fairy meadows',
    },
    {
      label: 'Naltar Valley',
      value: 'naltar valley',
    },
    {
      label: 'swat',
      value: 'swat',
    },
  ];

  return (
    <div>
      <Banner text={'Tour Packages'} />
      <div className='d-flex justify-content-end align-items-center mt-3'>
        <h5 className='me-1'>Location:</h5>
        <Select
          isClearable
          placeholder='location'
          onChange={(location) => {
            filteredTours(location?.value);
          }}
          options={location}
        />
      </div>

      <Row className='justify-content-center'>
        {filterTours.map((tour, key) => {
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
export default TourPackages;
