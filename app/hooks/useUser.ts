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

  return { user };
};

export default useUser;
