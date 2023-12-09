import InputPasswordToggle from '@components/input-password-toggle';
import { useFormik } from 'formik';
import { Form, Label, Input, Button } from 'reactstrap';
import { serviceProviderSignupSchema } from '../../validation/serviceProviderSignup';
import { Network, Url, multipartConfig } from '../../apiConfiguration';
import { useLoader, useToast } from '../../hooks';

const ServiceProviderSignup = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    phoneNo: '',
    fbUrl: '',
    instaUrl: '',
    banner: null,
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('phoneNo', data.phoneNo);
    formData.append('fbUrl', data.fbUrl);
    formData.append('instaUrl', data.instaUrl);
    formData.append('banner', data.banner);

    setLoader(true);
    const response = await Network.post(
      Url.companySignup,
      formData,
      (
        await multipartConfig()
      ).headers
    );

    setLoader(false);

    // Guard Statement
    if (!response.ok) return showErrorMessage(response.data)

    showSuccessMessage('Company created')


  };

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: serviceProviderSignupSchema,
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
          Company Name
        </Label>
        <Input
          type='text'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          name='name'
          placeholder='Enter company name'
          autoFocus
        />
        <ErrorMessage name={'name'} />
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
        <Label className='form-label' for='register-email'>
          Email
        </Label>
        <Input
          type='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name='email'
          placeholder='Enter email'
        />
        <ErrorMessage name={'email'} />
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
        <ErrorMessage name={'password'} />
      </div>
      <div className='mb-1'>
        <Label className='form-label' for='register-username'>
          Phone Number
        </Label>
        <Input
          type='text'
          onChange={handleChange}
          value={values.phoneNo}
          onBlur={handleBlur}
          placeholder='Enter phoneno'
          name='phoneNo'
        />
        <ErrorMessage name={'phoneNo'} />
      </div>
      <div className='mb-1'>
        <Label className='form-label' for='register-username'>
          Facebook
        </Label>
        <Input
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fbUrl}
          placeholder='Facebook page'
          name='fbUrl'
        />
        <ErrorMessage name={'fbUrl'} />
      </div>
      <div className='mb-1'>
        <Label className='form-label' for='register-username'>
          Instagram
        </Label>
        <Input
          type='text'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.instaUrl}
          placeholder='Instagram page'
          name='instaUrl'
        />
        <ErrorMessage name={'instaUrl'} />
      </div>
      <Button color='primary' onClick={handleSubmit} block>
        Sign up
      </Button>
    </Form>
  );
};

export default ServiceProviderSignup;
