// ** React Imports
import { Fragment, lazy } from 'react';
import { Navigate } from 'react-router-dom';
// ** Layouts
import BlankLayout from '@layouts/BlankLayout';
import VerticalLayout from '@src/layouts/VerticalLayout';
import HorizontalLayout from '@src/layouts/HorizontalLayout';
import LayoutWrapper from '@src/@core/layouts/components/layout-wrapper';

// ** Route Components
import PublicRoute from '@components/routes/PublicRoute';

// ** Utils
import { isObjEmpty } from '@utils';

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template';

// ** Default Route
const DefaultRoute = '/home';

const Home = lazy(() => import('../../views/home'));
const SecondPage = lazy(() => import('../../views/SecondPage'));
const Login = lazy(() => import('../../views/Login'));
const Register = lazy(() => import('../../views/Register'));
const ForgotPassword = lazy(() => import('../../views/ForgotPassword'));
const Error = lazy(() => import('../../views/Error'));
const TourCompanies = lazy(() => import('../../views/tour-companies'));
const TourPackages = lazy(() => import('../../views/tour-packages'));
const TourGuides = lazy(() => import('../../views/tour-guides'));
const Hotels = lazy(() => import('../../views/hotels'));
const SingleTour = lazy(() => import('../../views/single-tour'));
const Destinations = lazy(() => import('../../views/destinations'));
const Restaurants = lazy(() => import('../../views/restaurants'));
const SingleHotel = lazy(() => import('../../views/single-hotel'));

// ** Merge Routes
const Routes = [
  {
    path: '/',
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/tour/tour-companies',
    element: <TourCompanies />,
  },
  {
    path: '/tour/tour-packages',
    element: <TourPackages />,
  },
  {
    path: '/tour/tour-guides',
    element: <TourGuides />,
  },
  {
    path: '/hotels-&-stays',
    element: <Hotels />,
  },

  // Single Hotel and Stays
  {
    path: '/hotels-&-stays/:id',
    element: <SingleHotel />,
  },

  {
    path: '/login',
    element: <Login />,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/register',
    element: <Register />,
    meta: {
      layout: 'blank',
    },
  },

  // Single Tour
  {
    path: '/tour/tour-packages/:id',
    element: <SingleTour />,
  },
  {
    path: '/destinations',
    element: <Destinations />,
  },
  {
    path: '/restaurants',
    element: <Restaurants />,
    meta: {
      action: 'read',
      subject: 'restaurants',
    },
  },

  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error',
    element: <Error />,
    meta: {
      layout: 'blank',
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) && defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === 'blank' ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || 'vertical';
  const layouts = ['vertical', 'horizontal', 'blank'];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: '/',
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };