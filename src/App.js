import React, { Suspense } from 'react';
import '@styles/react/libs/flatpickr/flatpickr.scss';


// ** Router Import
import Router from './router/Router';

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
