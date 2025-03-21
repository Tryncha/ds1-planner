import { createContext, useState } from 'react';

const initialState = {
  token: null,
  username: null,
  id: null
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authInfo, setAuthInfo] = useState(initialState);
  console.log('AuthInfo:', authInfo);
  return <AuthContext.Provider value={{ authInfo, setAuthInfo }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
