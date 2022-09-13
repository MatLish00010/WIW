/*
import { useQuery } from '@tanstack/react-query';
import { auth } from '@myapp/firebase';
import { User } from 'firebase/auth';

type TUseUser = {
  user: User | null;
  isLoading: boolean;
};

const useUser = (): TUseUser => {
  const { data, isLoading } = useQuery(['user', () => auth?.currentUser || null]);

  return {
    user: data,
    isLoading,
  };
};

export default useUser;
*/

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@myapp/firebase';

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(
    () =>
      onAuthStateChanged(auth, data => {
        setUser(data || null);
      }),
    [],
  );

  return user;
};

export default useUser;
