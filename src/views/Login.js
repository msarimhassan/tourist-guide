// ** React Imports
import { useSkin } from '@hooks/useSkin';
import { Link } from 'react-router-dom';

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle';
import Logo from '../assets/images/logo/logo.png';

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap';
import Cover from '../assets/images/pages/Login.jpeg';

// ** Styles
import '@styles/react/pages/page-authentication.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoader, useToast, useAuth } from '../hooks';

import { Network, Url, config } from '../apiConfiguration';
import Select from 'react-select';
import { getUserAbility } from '../utility/Utils';
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  role: Yup.string().required(),
});

const roles = [
  { label: 'User', value: 'user' },
  { label: 'Company', value: 'company' },
  { label: 'Hotel', value: 'hotel' },
];

const Login = () => {
  const { setLoader } = useLoader();
  const { authenticateAppUser } = useAuth();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    role: '',
  };

  const getApiRoute = (role) => {
    if (role == 'user') return Url.customerLogin;
    else if (role == 'company') return Url.companyLogin;
    else if (role == 'hotel') return Url.hotelLogin;
  };

  const getRoute = (role) => {
    if (role == 'company') return '/tours';
    if (role == 'user') return '/';
    if (role == 'hotel') return '/hotel-management';
  };

  const onSubmit = async (data) => {
    const { role, ...payload } = data;
    setLoader(true);
    const response = await Network.post(getApiRoute(data.role), payload, (await config()).headers);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);

    const userData = getUserAbility(role);

    authenticateAppUser(response.data.token, {
      ...response.data.payload,
      ...userData,
    });

    showSuccessMessage('Login successfully');
    navigate(getRoute(role));
    window.location.reload();
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
  });

  const ErrorMessage = ({ name }) => {
    if (touched[name]) {
      return <div className='text-danger'>{errors[name]}</div>;
    }
  };

  return (
    <Row style={{ height: '100vh' }}>
      <Col className='d-none d-lg-flex align-items-center p-0 bg-white' lg='8' sm='12'>
        <Link
          style={{ position: 'absolute', top: 0, left: 0 }}
          className='brand-logo'
          to='/'
          onClick={(e) => e.preventDefault()}
        >
          <img style={{ width: '250px' }} src={Logo} alt='Logo' />
        </Link>
        <div className='w-100 h-100'>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={Cover}
            alt='Login Cover'
          />
        </div>
      </Col>
      <Col
        className='d-flex align-items-center justify-content-center px-2 px-5 p-lg-5'
        lg='4'
        sm='12'
      >
        <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
          <CardTitle tag='h2' className='fw-bold mb-1'>
            Welcome to Tourist Guide 👋
          </CardTitle>
          <CardText className='mb-2'>
            Please sign-in to your account and start the adventure
          </CardText>
          <Form className='auth-login-form mt-2' onSubmit={handleSubmit}>
            <div className='mb-1'>
              <Label className='form-label' for='login-email'>
                Email
              </Label>
              <Input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type='email'
                name='email'
                id='login-email'
                placeholder='john@example.com'
                autoFocus
              />
              <ErrorMessage name='email' />
            </div>
            <div className='mb-1'>
              <div className='d-flex justify-content-between'>
                <Label className='form-label' for='login-password'>
                  Password
                </Label>
                {/* <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link> */}
              </div>
              <InputPasswordToggle
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className='input-group-merge'
                id='login-password'
              />
              <ErrorMessage name='password' />
            </div>
            <div className='mb-1'>
              <Label className='form-label' for='login-email'>
                Role
              </Label>
              <Select
                options={roles}
                onChange={({ value }) => {
                  const event = {
                    target: {
                      name: 'role',
                      value,
                    },
                  };
                  handleChange(event);
                }}
                value={roles.filter((role) => role.value == values.role)}
              />
              <ErrorMessage name='role' />
            </div>

            <Button type='submit' color='primary' block>
              Sign in
            </Button>
          </Form>
          <p className='text-center mt-2'>
            <span className='me-25'>New on our platform?</span>
            <Link to='/register'>
              <span>Create an account</span>
            </Link>
          </p>
          {/* <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
              <Button className='me-0' color='github'>
                <GitHub size={14} />
              </Button>
            </div> */}
        </Col>
      </Col>
    </Row>
  );
};

export default Login;
