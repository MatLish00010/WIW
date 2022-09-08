import { useMutation } from 'react-query';
import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@myapp/firebase';

type TUseSignUpProps = {
  email: string;
  password: string;
};

export const useSignUp = () => {
  const { isLoading, mutateAsync } = useMutation(
    ['signUp'],
    ({ email, password }: TUseSignUpProps) => {
      return createUserWithEmailAndPassword(auth, email, password);
    },
    {
      onSuccess: ({ user }) => {
        addDoc(collection(db, 'users'), {
          _id: user.uid,
          displayName: user.displayName,
          email: user.email,
        });
      },
      onError: (e: Error) => {
        alert(`Sign Up error: ${e.message}`);
      },
    },
  );

  return {
    isLoading,
    mutateAsync,
  };
};
