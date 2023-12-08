import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Tours = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='d-flex justify-content-end'>
        <Button color='primary' onClick={()=>navigate('/tours/form')}>Add</Button>
      </div>
      Tours table
    </div>
  );
};

export default Tours;
