import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useLoader, useToast } from '../../hooks';
import { Network, Url } from '../../apiConfiguration';
import DataTable from 'react-data-table-component';
import { Trash2, Edit2 } from 'react-feather';

const Tours = () => {
  const navigate = useNavigate();
  const { setLoader } = useLoader();

  const [tours, setTours] = useState([]);

  const { showErrorMessage, showSuccessMessage } = useToast();

  const getTours = async () => {
    setLoader(true);
    const response = await Network.get(Url.getCompanyTours);
    setLoader(false);
    console.log({ response });
    if (!response.ok) return showErrorMessage(response.data);
    setTours(response.data.tours);
  };

  const handleDelete = async (id) => {
    setLoader(true);
    const response = await Network.delete(Url.deleteTour(id));
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage(response.data);
    const filteredTours = tours.filter((tour) => tour._id != id);
    setTours(filteredTours);
  };

  useEffect(() => {
    getTours();
  }, []);

  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Location',
      selector: (row) => row.location,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
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
                navigate('/tours/form', { state: { tourId: row?._id, mode: 'Edit' } })
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
        <Button color='primary' onClick={() => navigate('/tours/form', { state: { mode: 'Add' } })}>
          Add
        </Button>
      </div>
      <div className='react-dataTable mt-2'>
        <DataTable columns={columns} data={tours} />
      </div>
    </div>
  );
};

export default Tours;
