import { Navigation, Briefcase, Home, Sunrise, DollarSign, Trello } from 'react-feather';

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
    navLink: '/tour',
    children: [
      {
        id: 'Tour companies',
        title: 'Tour Companies',
        icon: <Trello size={20} />,
        navLink: '/tour/tour-companies',
        resource: 'tour',
        action: 'read',
      },
      {
        id: 'Tour packages',
        title: 'Tour Packages',
        icon: <DollarSign size={20} />,
        navLink: '/tour/tour-packages',
        resource: 'tour',
        action: 'read',
      },
      {
        id: 'Tour guides',
        title: 'Tour Guides',
        icon: <Navigation size={20} />,
        navLink: '/tour/tour-guides',
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
    icon: <Briefcase size={20} />,
    navLink: '/hotels-&-stays',
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
  {
    id: 'restaurants',
    title: 'Restaurants',
    icon: <Sunrise size={20} />,
    navLink: '/restaurants',
    resource: 'restaurants',
    action: 'read',
  },

  {
    id: 'home',
    title: 'Tours',
    icon: <Home size={20} />,
    navLink: '/tours',
    resource: 'tours',
    action: 'read',
  },
];
