import { createContext, FC, useEffect, useMemo, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { db, login, logout, register, auth } from '@myapp/firebase';

type TContext = {
  user: User | null;
  isLoading: boolean;
  isLoadingInitial: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthContext = createContext<TContext>({} as TContext);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [userState, setUserState] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);
      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: user.displayName || 'No name',
      });
    } catch (e) {
      alert(`Error Register: ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (e) {
      alert(`Error Login: ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (e) {
      alert(`Error Logout: ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        setUserState(user || null);
        setIsLoadingInitial(false);
      }),
    [],
  );

  const value = useMemo(
    () => ({
      user: userState,
      isLoading,
      isLoadingInitial,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
    }),
    [userState, isLoading],
  );
  return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>;
};
