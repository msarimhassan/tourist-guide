import { Suspense, lazy, useState } from 'react';
import { Loader } from './components';
import { LoaderContext, AuthContext } from './context';

const LazyApp = lazy(() => import('./App'));

const AppContext = () => {
  const [appLoading, setAppLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  return (
    <>
      <LoaderContext.Provider value={{ setAppLoading }}>
        <AuthContext.Provider value={{ setCurrentUser, setUserToken, userToken, currentUser }}>
          <Loader visible={appLoading} />
          <LazyApp />;
        </AuthContext.Provider>
      </LoaderContext.Provider>
    </>
  );
};

export default AppContext;
