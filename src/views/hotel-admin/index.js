import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useLoader, useToast } from '../../hooks';
import { Network, Url } from '../../apiConfiguration';
import DataTable from 'react-data-table-component';
import { Trash2, Edit2 } from 'react-feather';

const HotelAdmin = () => {
  const navigate = useNavigate();
  const { setLoader } = useLoader();
  const { showErrorMessage, showSuccessMessage } = useToast();
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
    </div>
  );
};

export default HotelAdmin;
