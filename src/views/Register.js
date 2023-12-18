// ** React Imports
import { Link } from 'react-router-dom';

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin';

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle';
import Logo from '../assets/images/logo/logo.png';

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText } from 'reactstrap';

import Cover from '../assets/images/banners/login-banner.png';
import { ServiceProviderSignup, HotelAdminSignup, UserSignup } from '../components';

// ** Styles
import '@styles/react/pages/page-authentication.scss';
import { useState } from 'react';

const roles = ['User', 'Service Provider', 'Hotel Admin'];

const Register = () => {
  // ** Hooks
  const { skin } = useSkin();
  const [currentRole, setCurrentRole] = useState('User');

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={(e) => e.preventDefault()}>
          <img style={{ width: '250px' }} src={Logo} />
        </Link>
        <Col className='d-none bg-white d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={Cover} alt='Login Cover' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' xs='12' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Adventure starts here 🚀
            </CardTitle>
            <CardText className='mb-2'>Make your app management easy and fun!</CardText>

            <div className='d-flex justify-content-between'>
              {roles.map((role, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentRole(role)}
                  className='rounded cursor-pointer'
                  style={{
                    padding: '5px',
                    background: currentRole == role ? '#83B5D1' : 'white',
                    border: '1px solid #83B5D1',
                    color: currentRole == role ? 'white' : '#317EA7',
                  }}
                >
                  {role}
                </div>
              ))}
            </div>

            {currentRole == 'User' ? (
              <UserSignup />
            ) : currentRole == 'Service Provider' ? (
              <ServiceProviderSignup />
            ) : currentRole == 'Hotel Admin' ? (
              <HotelAdminSignup />
            ) : null}

            <p className='text-center mt-2'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
