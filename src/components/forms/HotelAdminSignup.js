import { useFormik } from 'formik';
import InputPasswordToggle from '@components/input-password-toggle';
import { Form, Label, Input, Button } from 'reactstrap';
import { hotelAdminSchema } from '../../validation';
import { Network, Url, multipartConfig } from '../../apiConfiguration';
import { useLoader, useToast } from '../../hooks';

const HotelAdminSignup = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('phoneNo', data.phoneNo);
    formData.append('description', data.description);
    formData.append('banner', data.banner);

    setLoader(true);
    const response = await Network.post(
      Url.hotelSignup,
      formData,
      (
        await multipartConfig()
      ).headers
    );

    setLoader(false);

    // Guard Statement
    if (!response.ok) return showErrorMessage(response.data);

    showSuccessMessage('Hotel created');
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    phoneNo: '',
    description: '',
    banner: null,
  };

  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: hotelAdminSchema,
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
          Image
        </Label>
        <Input
          type='file'
          onChange={(e) => {
            let event = {
              target: {
                name: 'banner',
                value: e.target.files[0],
              },
            };

            handleChange(event);
          }}
          onBlur={handleBlur}
          name='banner'
          placeholder='Enter phoneno'
        />
        <ErrorMessage name={'banner'} />
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
      <div className='mb-1'>
        <Label className='form-label' for='register-username'>
          Description
        </Label>
        <Input
          name='description'
          type='textarea'
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Hotel description'
        />
        <ErrorMessage name='description' />
      </div>
      <Button color='primary' onClick={handleSubmit} block>
        Sign up
      </Button>
    </Form>
  );
};

export default HotelAdminSignup;
