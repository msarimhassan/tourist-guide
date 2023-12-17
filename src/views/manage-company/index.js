import { useFormik } from 'formik';
import { Form, Label, Input, Button } from 'reactstrap';
import { serviceProviderSignupSchema } from '../../validation/serviceProviderSignup';
import { Network, Url, multipartConfig } from '../../apiConfiguration';
import { useLoader, useToast, useAuth } from '../../hooks';
import * as Yup from 'yup';

const ManageCompany = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const { currentUser } = useAuth();

  const initialValues = {
    name: currentUser?.name,
    email: currentUser?.email,
    phoneNo: currentUser?.phoneNo,
    fbUrl: currentUser?.socialHandles?.facebook,
    instaUrl: currentUser?.socialHandles?.instagram,
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
    if (!response.ok) return showErrorMessage(response.data);

    showSuccessMessage('Company created');
  };

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Company name is required'),
      email: Yup.string().email().required(),
      phoneNo: Yup.string().required(),
      banner: Yup.mixed(),
      fbUrl: Yup.string().required('Facebook page is required'),
      instaUrl: Yup.string().required('Insta page is required'),
    }),
  });

  const ErrorMessage = ({ name }) => {
    if (touched[name]) {
      return <div className='text-danger'>{errors[name]}</div>;
    }
  };
  return (
    <div>
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
    </div>
  );
};

export default ManageCompany;
