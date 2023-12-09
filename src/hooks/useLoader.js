import { useContext } from 'react';
import { LoaderContext } from '../context';

const useLoader = () => {
  const { setAppLoading } = useContext(LoaderContext);

  const setLoader = (status) => {
    setAppLoading(status);
  };

  return { setLoader };
};

export default useLoader;
