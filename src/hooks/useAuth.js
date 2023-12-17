import { AuthContext } from '../context';
import { useContext } from 'react';
import { keys } from '../common';
const useAuth = () => {
  const { setCurrentUser, setUserToken, userToken, currentUser } = useContext(AuthContext);

  const authenticateAppUser = (jwtToken, appUser) => {
    localStorage.setItem(keys.jwttoken, jwtToken);
    localStorage.setItem(keys.user, JSON.stringify(appUser));
    setUserToken(jwtToken);
    setCurrentUser(appUser);
  };

  return { authenticateAppUser, currentUser, userToken };
};

export default useAuth;
