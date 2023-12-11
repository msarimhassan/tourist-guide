import { Banner, TourCard } from '../../components';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';
import { useLoader, useToast } from '../../hooks';
import { Network, Url } from '../../apiConfiguration';
import { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';

const TourPackages = () => {
  const { setLoader } = useLoader();
  const { state } = useLocation();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [tours, setTours] = useState([]);

  const getToursByCompanyID = async () => {
    setLoader(true);
    const response = await Network.get(Url.getTourByCompanyId(state?.companyId));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);

    setTours(response.data.tour);
  };

  useEffect(() => {
    getToursByCompanyID();
  }, []);

  return (
    <div>
      <Banner text={'Tour Packages'} />
      <div className='d-flex justify-content-end align-items-center mt-3'>
        <h5 className='me-1'>SortBy:</h5>
        <Select options={[]} />
      </div>

      <Row className='justify-content-center'>
        {tours.map((tour, key) => {
          return (
            <Col md={4}>
              <TourCard tour={tour} key={key} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default TourPackages;
