import { Input, Row, Col, Button } from 'reactstrap';
import { useAuth, useLoader, useToast } from '../../hooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Network, Url } from '../../apiConfiguration';

const ManageUser = () => {
  const { currentUser, userToken, authenticateAppUser } = useAuth();
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();

  const initialValues = {
    name: currentUser?.name,
    email: currentUser?.email,
    phoneNo: currentUser?.phoneNo,
  };

  const onSubmit = async (data) => {
    setLoader(true);
    const response = await Network.put(Url.updateUser, data);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
   
    authenticateAppUser(userToken, { ...currentUser, ...response.data });

     showSuccessMessage('User updated');
  };

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      phoneNo: Yup.string().required(),
    }),
  });

  const ErrorMessage = ({ name }) => {
    if (touched[name]) {
      return <div className='text-danger'>{errors[name]}</div>;
    }
  };

  return (
    <div>
      <div>
        <h1>Manage User</h1>
      </div>
      <Row>
        <Col md={12} className='mt-2'>
          <Input
            placeholder='Name'
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage name={'name'} />
        </Col>

        <Col md={6} className='mt-2'>
          <Input
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled
          />
          <ErrorMessage name={'email'} />
        </Col>
        <Col md={6} className='mt-2'>
          <Input
            placeholder='Phone No'
            name='phoneNo'
            value={values.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage name={'phoneNo'} />
        </Col>
      </Row>
      <div className='d-flex justify-content-end mt-2'>
        <Button color='primary' onClick={handleSubmit}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default ManageUser;
