import { Suspense, lazy, useEffect, useState } from 'react';
import { Loader } from './components';
import { LoaderContext, AuthContext } from './context';
import { keys } from './common';

const LazyApp = lazy(() => import('./App'));

const AppContext = () => {
  const [appLoading, setAppLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem(keys.jwttoken);
    const user = localStorage.getItem(keys.user);

    if (jwt && user) {
      setUserToken(jwt);
      setCurrentUser(JSON.parse(user));
    }
  }, []);

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
