import { toast } from 'react-hot-toast';

const useToast = () => {
  const showSuccessMessage = (message) => {
    toast.success(message);
  };
  const showErrorMessage = (message) => {
    toast.error(message);
  };

  return { showErrorMessage, showSuccessMessage };
};

export default useToast;
