import { useEffect, useState } from 'react';
import { useLoader, useToast } from '../../hooks';
import { Network, Url } from '../../apiConfiguration';
import DataTable from 'react-data-table-component';
import { Badge } from 'reactstrap';

const Userbooking = () => {
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
  ];
  const [bookings, setBookings] = useState([]);
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
  const getCustomerBookings = async () => {
    setLoader(true);
    const response = await Network.get(Url.getCustomerBooking);
    setLoader(false);
    if (!response.ok) return showErrorMessage(response.data);
    setBookings(response.data);
  };

  useEffect(() => {
    getCustomerBookings();
  }, []);

  return (
    <div>
      <div className='react-dataTable mt-2'>
        <DataTable columns={columns} data={bookings} />
      </div>
    </div>
  );
};

export default Userbooking;
