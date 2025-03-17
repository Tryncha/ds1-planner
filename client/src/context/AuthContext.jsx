import { createContext, useState } from 'react';

const initialState = {
  username: null,
  name: null
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(initialState);
  console.log(auth);
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
