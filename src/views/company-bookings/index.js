import { useEffect, useState } from 'react';
import { useLoader, useToast } from '../../hooks';
import { Network, Url } from '../../apiConfiguration';
import DataTable from 'react-data-table-component';
import { Badge, Button } from 'reactstrap';

const CompanyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { setLoader } = useLoader();

  const { showErrorMessage, showSuccessMessage } = useToast();
  const getCustomerBookings = async () => {
    setLoader(true);
    const response = await Network.get(Url.getBookingsList);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setBookings(response.data);
  };

  const changeBookingStatus = async (id) => {
    setLoader(true);
    const response = await Network.put(Url.changeBookingStatus(id), { status: 'approved' });
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    showSuccessMessage(response.data);
    getCustomerBookings();
  };

  const columns = [
    {
      name: 'Title',
      selector: (row) => row.tourId.title,
    },
    {
      name: 'Location',
      selector: (row) => row.tourId.location,
    },
    {
      name: 'People',
      selector: (row) => row.noOfPeople,
    },
    {
      name: 'Price',
      selector: (row) => row.noOfPeople * row.tourId.price,
    },
    {
      name: 'Status',
      cell: (row) => {
        return (
          <Badge color={row?.status == 'approved' ? 'light-success' : 'light-danger'}>
            {row?.status}
          </Badge>
        );
      },
    },
    {
      name: 'Actions',
      cell: (row) => {
        return (
          <Button
            color='primary'
            onClick={() => changeBookingStatus(row?._id)}
            disabled={row.status == 'approved'}
          >
            Change Status
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    getCustomerBookings();
  }, []);

  return (
    <div className='react-dataTable mt-2'>
      <DataTable columns={columns} data={bookings} />
    </div>
  );
};

export default CompanyBookings;
