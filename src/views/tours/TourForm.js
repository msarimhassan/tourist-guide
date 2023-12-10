import { Input, Row, Col, Label, Card, CardBody, Button, CardTitle } from 'reactstrap';
import Flatpicker from 'react-flatpickr';
import { useFormik } from 'formik';
import { tourSchema } from '../../validation';
import { useLoader, useToast } from '../../hooks';
import { Network, Url, multipartConfig } from '../../apiConfiguration';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const TourForm = () => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [tour, setTour] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();

  const getTour = async () => {
    setLoader(true);
    const response = await Network.get(Url.getSingleTour(state?.tourId));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setTour(response.data.tour);
  };

  const initialValues = {
    title: tour?.title || '',
    location: tour?.location || '',
    price: tour?.price || '',
    banner: null,
    start_date: tour?.start_date || null,
    end_date: tour?.end_date || null,
    description: tour?.description || '',
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('location', data.location);
    formData.append('price', data.price);
    formData.append('start_date', data.start_date);
    formData.append('end_date', data.end_date);
    formData.append('description', data.description);

    if (data.banner != null) formData.append('banner', data.banner);

    const method = state?.mode == 'Add' ? 'post' : 'put';

    const apiRoute = state?.mode == 'Add' ? Url.createTour : Url.updateTour(state?.tourId);

    setLoader(true);
    const response = await Network[method](apiRoute, formData, (await multipartConfig()).headers);
    setLoader(false);

    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage(response.data);
    navigate('/tours');
  };

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object().shape({
      title: Yup.string().required(),
      location: Yup.string().required(),
      price: Yup.number().required(),
      banner:
        state?.mode == 'Add' ? Yup.mixed().required('Banner is required') : Yup.mixed().nullable(),
      start_date: Yup.string().nullable().required(),
      end_date: Yup.string().nullable().required(),
      description: Yup.string(),
    }),
    enableReinitialize: true,
  });

  const ErrorMessage = ({ name }) => {
    if (touched[name]) {
      return <div className='text-danger'>{errors[name]}</div>;
    }
  };

  useEffect(() => {
    if (state?.mode == 'Edit') getTour();
  }, []);
  return (
    <Card className='bg-white'>
      <CardBody>
        <CardTitle>Tour Details</CardTitle>
        <Row>
          <Col md={6}>
            <Label>Title</Label>
            <Input
              name='title'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-control'
              placeholder='tour title'
            />
            <ErrorMessage name={'title'} />
          </Col>
          <Col md={6}>
            <Label>Location</Label>
            <Input
              name='location'
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-control'
              placeholder='tour location'
            />
            <ErrorMessage name={'location'} />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col md={6}>
            <Label>Price</Label>
            <Input
              type='number'
              name='price'
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-control'
              placeholder='tour price'
            />
            <ErrorMessage name='price' />
          </Col>
          <Col md={6}>
            <Label>Banner</Label>
            <Input
              name='banner'
              onBlur={handleBlur}
              onChange={(e) => {
                let event = {
                  target: {
                    name: 'banner',
                    value: e.target.files[0],
                  },
                };

                handleChange(event);
              }}
              className='form-control'
              type='file'
              placeholder='tour image'
            />
            <ErrorMessage name={'banner'} />
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col md={6}>
            <Label>Start Date</Label>
            <Flatpicker
              name='start_date'
              value={values.start_date}
              onChange={(date) => {
                let event = {
                  target: {
                    name: 'start_date',
                    value: date[0],
                  },
                };
                handleChange(event);
              }}
              onBlur={handleBlur}
              style={{ background: 'white' }}
              className='form-control'
              placeholder='Start Date'
            />
            <ErrorMessage name={'start_date'} />
          </Col>
          <Col md={6}>
            <Label>End Date</Label>
            <Flatpicker
              name='end_date'
              value={values.end_date}
              onChange={(date) => {
                let event = {
                  target: {
                    name: 'end_date',
                    value: date[0],
                  },
                };
                handleChange(event);
              }}
              onBlur={handleBlur}
              style={{ background: 'white' }}
              className='form-control'
              placeholder='End Date'
            />
            <ErrorMessage name={'end_date'} />
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col md={12}>
            <Label>Description</Label>
            <Input
              type='textarea'
              name='description'
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name={'description'} />
          </Col>
        </Row>

        <div className='d-flex justify-content-end mt-2'>
          <Button className='me-2' onClick={() => navigate('/tours')}>
            Cancel
          </Button>
          <Button color='primary' onClick={handleSubmit}>
            {state?.mode}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
export default TourForm;
