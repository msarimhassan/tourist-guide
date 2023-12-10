import { useEffect, useState } from 'react';
import { Loader } from './components';
import { LoaderContext, AuthContext } from './context';
import { keys } from './common';

const AppContext = ({ children }) => {
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
      <Loader visible={appLoading} />
      <LoaderContext.Provider value={{ setAppLoading }}>
        <AuthContext.Provider value={{ setCurrentUser, setUserToken, userToken, currentUser }}>
          {children}
        </AuthContext.Provider>
      </LoaderContext.Provider>
    </>
  );
};

export default AppContext;
