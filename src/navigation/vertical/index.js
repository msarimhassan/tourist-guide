import { Mail, Home, Sunrise } from 'react-feather';

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home',
    resource: 'home',
    action: 'read',
  },
  {
    id: 'Tour',
    title: 'Tour',
    icon: <Sunrise size={20} />,
    navLink: '/second-page',
    children: [
      {
        id: 'Tour companies',
        title: 'Tour Companies',
        icon: <Sunrise size={20} />,
        navLink: '/second-page',
        resource: 'tour',
        action: 'read',
      },
      {
        id: 'Tour packages',
        title: 'Tour Packages',
        icon: <Sunrise size={20} />,
        navLink: '/second-page',
        resource: 'tour',
        action: 'read',
      },
      {
        id: 'Tour guides',
        title: 'Tour Guides',
        icon: <Sunrise size={20} />,
        navLink: '/second-page',
        resource: 'tour',
        action: 'read',
      },
    ],
    resource: 'tour',
    action: 'read',
  },

  {
    id: 'Hotelandstays',
    title: 'Hotel & Stays',
    icon: <Sunrise size={20} />,
    navLink: '/second-page',
    resource: 'hotel-and-stays',
    action: 'read',
  },
  {
    id: 'destinations',
    title: 'Destinations',
    icon: <Sunrise size={20} />,
    navLink: '/destinations',
    resource: 'destination',
    action: 'read',
  },
];
