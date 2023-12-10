import React, { Suspense, lazy, useEffect, useState } from 'react';
import '@styles/react/libs/flatpickr/flatpickr.scss';
import '@styles/react/libs/tables/react-dataTable-component.scss';

// ** Router Import
import Router from './router/Router';
import { Loader } from './components';

const App = () => {
  return (
    <Suspense fallback={<Loader visible={true} />}>
      <Router />
    </Suspense>
  );
};

export default App;
