// AuthContext.js
import { createContext } from 'react';
import { useLoging } from '../hooks/useLoging';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const {login, handlerLoging, handlerLogout} = useLoging();
  return (
    <AuthenticationContext.Provider value={{ login, handlerLoging, handlerLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};