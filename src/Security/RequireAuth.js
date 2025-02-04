import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const RequireAuth = ({ children }) => {
  const token = Cookies.get('authToken'); 

  if (!token) {
    return <Navigate to="/login" replace />; 
  }

  return children; 
};

export default RequireAuth;
