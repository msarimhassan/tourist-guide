import { useState, useEffect } from 'react';
import { Row, Col, Input, Label, Card, CardBody, Button } from 'reactstrap';
import Select from 'react-select';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';

import { Network, Url, multipartConfig, config } from '../../apiConfiguration';
import { useLoader, useToast } from '../../hooks';
import { roomSchema } from '../../validation';

const RoomTypes = [
  {
    label: 'Luxury Room',
    value: 'luxury-room',
  },
  {
    label: 'Premium Room',
    value: 'premium-room',
  },
  {
    label: 'Double Simple Room',
    value: 'double-simple-room',
  },
  {
    label: 'Master Room',
    value: 'master-room',
  },
  {
    label: 'Family luxury Room',
    value: 'family-luxury-room',
  },
];

const RoomForm = () => {
  const { setLoader } = useLoader();
  const { state } = useLocation();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [room, setRoom] = useState(null);

  const getRoom = async () => {
    setLoader(true);
    const response = await Network.get(Url.getSingleRoom(state?.roomId));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setRoom(response.data.room);
  };

  const initialValues = {
    area: room?.area || null,
    maxGuest: room?.maxGuest || null,
    noOfBath: room?.noOfBath || null,
    roomType: room?.roomType || '',
    price: room?.price || null,
    description: room?.description || '',
  };

  const onSubmit = async (data) => {
    const method = state?.mode == 'Add' ? 'post' : 'put';

    const apiRoute = state?.mode == 'Add' ? Url.createRoom : Url.updateRoom(state?.roomId);

    setLoader(true);
    const response = await Network[method](apiRoute, data, (await config()).headers);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage(response.data);
  };

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: roomSchema,
    enableReinitialize: true,
  });

  const ErrorMessage = ({ name }) => {
    if (touched[name]) {
      return <div className='text-danger'>{errors[name]}</div>;
    }
  };

  useEffect(() => {
    if (state?.mode == 'Edit') getRoom();
  }, []);

  return (
    <Card>
      <CardBody>
        <Row>
          <Col md={6} className='mt-2'>
            <Label>Area of the Room</Label>
            <Input
              type='number'
              value={values.area}
              onChange={handleChange}
              onBlur={handleBlur}
              name='area'
              placeholder='Room Area'
            />
            <ErrorMessage name='area' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>Guests</Label>
            <Input
              type='number'
              value={values.maxGuest}
              onChange={handleChange}
              onBlur={handleBlur}
              name='maxGuest'
              placeholder='Room Guest'
            />
            <ErrorMessage name='maxGuest' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>No of Bathroom</Label>
            <Input
              type='number'
              value={values.noOfBath}
              name='noOfBath'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Room Bathrooms'
            />
            <ErrorMessage name='noOfBath' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>Room Type</Label>
            <Select
              isDisabled={state?.mode == 'Edit'}
              name='roomType'
              options={RoomTypes}
              onChange={({ value }) => {
                const event = {
                  target: {
                    name: 'roomType',
                    value,
                  },
                };
                handleChange(event);
              }}
              value={RoomTypes.filter((type) => type.value == values.roomType)}
            />
            <ErrorMessage name='roomType' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>Room Price</Label>
            <Input
              type='number'
              name='price'
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Room price'
            />
            <ErrorMessage name='price' />
          </Col>
          <Col md={6} className='mt-2'>
            <Label>Description</Label>
            <Input
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              name='description'
              placeholder='Room description'
              type='textarea'
            />
            <ErrorMessage name='description' />
          </Col>
        </Row>

        <div className='d-flex justify-content-end mt-3'>
          <Button color='primary' onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default RoomForm;
