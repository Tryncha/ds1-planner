import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export function useAuth() {
  const { authInfo, setAuthInfo } = useContext(AuthContext);
  return { authInfo, setAuthInfo };
}
