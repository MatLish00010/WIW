import { useContext } from 'react';
import { AuthContext } from '@myapp/providers/Auth';

export const useAuth = () => useContext(AuthContext);
