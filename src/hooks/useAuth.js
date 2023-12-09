import { AuthContext } from '../context';
import { useContext } from 'react';
import { keys } from '../common';
const useAuth = () => {
  const { setCurrentUser, setUserToken, userToken, currentUser } = useContext(AuthContext);

  const authenticateAppUser = (jwtToken) => {
    localStorage.setItem(keys.jwttoken, jwtToken);
    setUserToken(jwtToken);
  };

  return { authenticateAppUser };
};

export default useAuth;
