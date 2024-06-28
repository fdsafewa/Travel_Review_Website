import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, isAuthenticated: false, user: null });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setAuth({ token, isAuthenticated: true, user: decodedToken });
    }
  }, []);

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    localStorage.setItem('token', token);
    setAuth({ token, isAuthenticated: true, user: decodedToken });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ token: null, isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;