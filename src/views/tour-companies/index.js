import { Banner, CompanyCard } from '../../components';
import Select from 'react-select';
import { Row, Col } from 'reactstrap';
import { Network, Url } from '../../apiConfiguration';
import { useLoader, useToast } from '../../hooks';
import { useEffect, useState } from 'react';

const TourCompanies = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    setLoader(true);
    const response = await Network.get(Url.getCompanies);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setCompanies(response.data);
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div>
      <Banner text={'Tour Companies'} />
     
      <Row className='mt-5'>
        {companies?.map((company, key) => {
          return (
            <Col md={4}>
              <CompanyCard company={company} key={key} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TourCompanies;
