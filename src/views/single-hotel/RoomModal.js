import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col, Label } from 'reactstrap';
import { Icons } from '../../common';
import Flatpickr from 'react-flatpickr';
import { processString } from '../../utility/Utils';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoader, useToast } from '../../hooks';
import { Network, Url, config } from '../../apiConfiguration';
const RoomModal = ({ openModal, setOpenModal, selectedRoom }) => {
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();

  const initialValues = {
    checkoutdate: null,
    checkindate: null,
    roomId: selectedRoom?._id,
  };

  const onSubmit = async (data) => {
    setLoader(true);

    const payload = {
      ...data,
      roomId: selectedRoom?._id,
    };

    const response = await Network.post(Url.bookRoom, payload, (await config()).headers);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage(response.data);
    await setOpenModal(!openModal);
  };

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object().shape({
      checkindate: Yup.string().nullable().required(),
      checkoutdate: Yup.string().nullable().required(),
    }),
    enableReinitialize: true,
  });

  const ErrorMessage = ({ name }) => {
    if (touched[name]) {
      return <div className='text-danger'>{errors[name]}</div>;
    }
  };

  const { FA, FA6 } = Icons;

  const roomData = [
    {
      title: 'Bathroom',
      Icon: <FA.FaShower size={20} />,
      value: selectedRoom?.noOfBath,
    },
    {
      title: 'Beds',
      Icon: <FA.FaBed size={20} />,
      value: 2,
    },
    {
      title: 'Guest',
      Icon: <FA6.FaPeopleGroup size={20} />,
      value: selectedRoom?.maxGuest,
    },
    {
      title: 'Area',
      Icon: <FA.FaRuler size={20} />,
      value: selectedRoom?.area,
    },
  ];

  return (
    <Modal
      isOpen={openModal}
      toggle={() => setOpenModal(!openModal)}
      className='modal-dialog-centered modal-lg'
    >
      <ModalHeader toggle={() => setOpenModal(!openModal)} />
      <div style={{ position: 'relative' }}>
        <img
          style={{ height: '200px', objectFit: 'cover', width: '100%' }}
          src={selectedRoom?.image}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: 'rgb(0,0,0,0.5)',
          }}
        >
          <div className='d-flex align-items-center justify-content-between p-1'>
            <h2 style={{ color: 'white' }}>{processString(selectedRoom?.roomType)}</h2>
            <h2 style={{ color: 'white' }}>PKR {selectedRoom?.price}</h2>
          </div>
        </div>
      </div>

      <ModalBody>
        <h4>Description</h4>
        {selectedRoom?.description}
      </ModalBody>

      <div className='d-flex align-items-center justify-content-around flex-wrap'>
        {roomData.map((room) => {
          return (
            <div>
              <h6>{room.title}</h6>
              <div className='d-flex justify-content-around align-items-center'>
                <div>{room.Icon}</div>
                <div>{room.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Row className='mx-3 my-3'>
        <Col md={6}>
          <Label>Check In</Label>
          <Flatpickr
            name='checkindate'
            onChange={(date) => {
              let event = {
                target: {
                  name: 'checkindate',
                  value: date[0],
                },
              };
              handleChange(event);
            }}
            onBlur={handleBlur}
            value={values.checkindate}
            style={{ background: 'white' }}
            className='form-control'
            placeholder='Select Date'
          />
          <ErrorMessage name='checkindate' />
        </Col>
        <Col md={6}>
          <Label>Checkout</Label>
          <Flatpickr
            onChange={(date) => {
              let event = {
                target: {
                  name: 'checkoutdate',
                  value: date[0],
                },
              };
              handleChange(event);
            }}
            onBlur={handleBlur}
            value={values.checkoutdate}
            name='checkoutdate'
            style={{ background: 'white' }}
            className='form-control'
            placeholder='Select Date'
          />
          <ErrorMessage name='checkoutdate' />
        </Col>
      </Row>

      <Button className='mx-3 my-2' color='primary' onClick={handleSubmit}>
        Book Now
      </Button>
    </Modal>
  );
};

export default RoomModal;
