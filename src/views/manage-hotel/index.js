import { useFormik } from 'formik';
import InputPasswordToggle from '@components/input-password-toggle';
import { Form, Label, Input, Button } from 'reactstrap';
import { hotelAdminSchema } from '../../validation';
import { Network, Url, multipartConfig } from '../../apiConfiguration';
import { useLoader, useToast, useAuth } from '../../hooks';
import * as Yup from 'yup';

const ManageHotel = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const { currentUser, userToken, authenticateAppUser } = useAuth();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phoneNo', data.phoneNo);
    formData.append('description', data.description);
    formData.append('location', data.location);
    if (data.banner) formData.append('banner', data.banner);

    setLoader(true);
    const response = await Network.put(
      Url.updateHotel,
      formData,
      (
        await multipartConfig()
      ).headers
    );

    setLoader(false);

    // Guard Statement
    if (!response.ok) return showErrorMessage(response.data);

    showSuccessMessage('Hotel updated');

    authenticateAppUser(userToken, { ...currentUser, ...response.data });
  };
  const initialValues = {
    name: currentUser?.name,
    email: currentUser?.email,
    phoneNo: currentUser?.phoneNo,
    description: currentUser?.description,
    banner: null,
    location: currentUser?.location,
  };

  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Hotel name is required'),
      email: Yup.string().email().required(),
      phoneNo: Yup.string().required(),
      banner: Yup.mixed(),
      description: Yup.string().required(),
      location: Yup.string().required(),
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
          <Label className='form-label' for='register-username'>
            Hotel Location
          </Label>
          <Input
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            name='location'
            placeholder='Enter hotel location'
            autoFocus
          />
          <ErrorMessage name='location' />
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
            disabled
          />
          <ErrorMessage name='email' />
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
            value={values.phoneNo}
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
            value={values.description}
            name='description'
            type='textarea'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Hotel description'
          />
          <ErrorMessage name='description' />
        </div>
        <Button color='primary' onClick={handleSubmit} block>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ManageHotel;
