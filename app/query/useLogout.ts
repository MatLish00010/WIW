import { useMutation } from 'react-query';
import { signOut } from 'firebase/auth';
import { auth } from '@myapp/firebase';

const useLogout = () => {
  const { isLoading, mutateAsync } = useMutation(
    ['logout'],
    () => {
      return signOut(auth);
    },
    {
      onError: (e: Error) => {
        alert(`Logout error: ${e.message}`);
      },
    },
  );

  return {
    isLoading,
    mutateAsync,
  };
};

export default useLogout;
