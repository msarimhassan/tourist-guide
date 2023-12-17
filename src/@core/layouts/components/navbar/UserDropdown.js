// ** React Imports
import { Link } from 'react-router-dom';

// ** Custom Components
import Avatar from '@components/avatar';

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
  Heart,
} from 'react-feather';

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg';
import { useAuth } from '../../../../hooks';

const UserDropdown = () => {
  const { currentUser } = useAuth();

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle
        href='/'
        tag='a'
        className='nav-link dropdown-user-link'
        onClick={(e) => e.preventDefault()}
      >
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name fw-bold'>{currentUser?.name}</span>
          <span className='user-status'>{currentUser?.role}</span>
        </div>
        <Avatar img={defaultAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to='/manage-user'>
          <User size={14} className='me-75' />
          <span className='align-middle'>Manage Account</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to='/favourites'>
          <Heart size={14} className='me-75' />
          <span className='align-middle'>Favourites</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to='/user-bookings'>
          <CheckSquare size={14} className='me-75' />
          <span className='align-middle'>Bookings</span>
        </DropdownItem>
        {/* <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <MessageSquare size={14} className="me-75" />
          <span className="align-middle">Chats</span>
        </DropdownItem> */}
        <DropdownItem divider />
        {/* <DropdownItem
          tag={Link}
          to="/pages/"
          onClick={(e) => e.preventDefault()}
        >
          <Settings size={14} className="me-75" />
          <span className="align-middle">Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <CreditCard size={14} className="me-75" />
          <span className="align-middle">Pricing</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <HelpCircle size={14} className="me-75" />
          <span className="align-middle">FAQ</span>
        </DropdownItem> */}
        <DropdownItem tag={Link} to='/login'>
          <Power size={14} className='me-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
