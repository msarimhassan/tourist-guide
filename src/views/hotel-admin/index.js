import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Trash2, Edit2 } from 'react-feather';

import { useLoader, useToast } from '../../hooks';
import { Network, Url } from '../../apiConfiguration';
import DataTable from 'react-data-table-component';
import { processString } from '../../utility/Utils';

const HotelAdmin = () => {
  const navigate = useNavigate();
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const [rooms, setRooms] = useState([]);

  const getHotelRooms = async () => {
    setLoader(true);
    const response = await Network.get(Url.getRooms);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setRooms(response.data.rooms);
  };

  const handleDelete = async (id) => {
    setLoader(true);
    const response = await Network.delete(Url.deleteRoom(id));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage(response.data);
    const filteredRooms = rooms.filter((room) => room._id != id);
    setRooms(filteredRooms);
  };

  useEffect(() => {
    getHotelRooms();
  }, []);

  const columns = [
    {
      name: 'Room Type',
      selector: (row) => processString(row?.roomType),
    },
    {
      name: 'Room Area',
      selector: (row) => row.area,
    },
    {
      name: 'Bathroom',
      selector: (row) => row.noOfBath,
    },
    {
      name: 'Guests',
      selector: (row) => row.maxGuest,
    },
    {
      name: 'Price',
      selector: (row) => row?.price,
    },
    {
      name: 'Actions',
      cell: (row) => {
        return (
          <div>
            <Edit2
              className='cursor-pointer mx-1'
              size={20}
              onClick={() =>
                navigate('/hotel-management/room', { state: { roomId: row?._id, mode: 'Edit' } })
              }
            />
            <Trash2
              color='red'
              className='cursor-pointer'
              size={20}
              onClick={() => handleDelete(row?._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className='d-flex justify-content-end'>
        <Button
          color='primary'
          onClick={() => navigate('/hotel-management/room', { state: { mode: 'Add' } })}
        >
          Add
        </Button>
      </div>
      <div className='react-dataTable mt-2'>
        <DataTable columns={columns} data={rooms} />
      </div>
    </div>
  );
};

export default HotelAdmin;
