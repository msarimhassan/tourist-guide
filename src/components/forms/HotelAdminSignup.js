import { useFormik } from 'formik';
import InputPasswordToggle from '@components/input-password-toggle';
import { Form, Label, Input, Button } from 'reactstrap';

const HotelAdminSignup = () => {
  const onSubmit = async (data) => {
    console.log({ data });
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    phoneNo: '',
    description: '',
  };

  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
    initialValues,
    onSubmit,
  });

  const ErrorMessage = ({ name }) => {
    if (touched[name]) {
      return <div className='text-danger'>{errors[name]}</div>;
    }
  };
  return (
    <Form className='auth-register-form mt-2'>
      <div className='mb-1'>
        <Label className='form-label' for='register-username'>
          Hotel Name
        </Label>
        <Input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type='text'
          name='name'
          placeholder='Enter hotel name'
          autoFocus
        />
        <ErrorMessage name='name' />
      </div>
      <div className='mb-1'>
        <Label className='form-label' for='register-email'>
          Email
        </Label>
        <Input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type='email'
          name='email'
          placeholder='Enter email'
        />
        <ErrorMessage name='email' />
      </div>
      <div className='mb-1'>
        <Label className='form-label' for='register-password'>
          Password
        </Label>
        <InputPasswordToggle
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className='input-group-merge'
          name='password'
        />
        <ErrorMessage name='password' />
      </div>
      <div className='mb-1'>
        <Label className='form-label' for='register-username'>
          Phone Number
        </Label>
        <Input
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          name='phoneNo'
          placeholder='Enter phoneno'
        />
        <ErrorMessage name='phoneNo' />
      </div>
      <Button color='primary' onClick={handleSubmit} block>
        Sign up
      </Button>
    </Form>
  );
};

export default HotelAdminSignup;
