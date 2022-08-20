import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBHLrO6fEniLglx5BeNyE7FZryF3BX_UT4',
  authDomain: 'whatiwant-61205.firebaseapp.com',
  projectId: 'whatiwant-61205',
  storageBucket: 'whatiwant-61205.appspot.com',
  messagingSenderId: '1059709677582',
  appId: '1:1059709677582:web:634d6d4d5b13c172fa4c5f',
  measurementId: 'G-KZBQYGMBNK',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
