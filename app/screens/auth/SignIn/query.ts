import { useMutation } from 'react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@myapp/firebase';

type TUseSignInProps = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const { isLoading, mutateAsync } = useMutation(
    ['signIn'],
    ({ email, password }: TUseSignInProps) => {
      return signInWithEmailAndPassword(auth, email, password);
    },
    {
      onError: (e: Error) => {
        alert(`Sign In error: ${e.message}`);
      },
    },
  );

  return {
    isLoading,
    mutateAsync,
  };
};
