import { createContext, useState } from 'react';

const initialState = {
  displayName: null,
  username: null,
  name: null
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authInfo, setAuthInfo] = useState(initialState);
  console.log('AuthInfo', authInfo);
  return <AuthContext.Provider value={{ authInfo, setAuthInfo }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
