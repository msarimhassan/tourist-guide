import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col, Label } from 'reactstrap';
import { Icons } from '../../common';
import Flatpickr from 'react-flatpickr';

const RoomModal = ({ openModal, setOpenModal, selectedRoom }) => {
  const { FA, FA6 } = Icons;

  const roomData = [
    {
      title: 'Bathroom',
      Icon: <FA.FaShower size={20} />,
      value: 1,
    },
    {
      title: 'Beds',
      Icon: <FA.FaBed size={20} />,
      value: 1,
    },
    {
      title: 'Guest',
      Icon: <FA6.FaPeopleGroup size={20} />,
      value: 1,
    },
    {
      title: 'Area',
      Icon: <FA.FaRuler size={20} />,
      value: 1,
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
            <h2 style={{ color: 'white' }}>{selectedRoom?.type}</h2>
            <h2 style={{ color: 'white' }}>PKR {selectedRoom?.price}</h2>
          </div>
        </div>
      </div>

      <ModalBody>
        <h4>Description</h4>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie.
        Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake
        cheesecake cookie chocolate cake liquorice.
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
            style={{ background: 'white' }}
            className='form-control'
            placeholder='Select Date'
          />
        </Col>
        <Col md={6}>
          <Label>Checkout</Label>
          <Flatpickr
            style={{ background: 'white' }}
            className='form-control'
            placeholder='Select Date'
          />
        </Col>
      </Row>

      <Button className='mx-3 my-2' color='primary' onClick={() => setOpenModal(!openModal)}>
        Book Now
      </Button>
    </Modal>
  );
};

export default RoomModal;
