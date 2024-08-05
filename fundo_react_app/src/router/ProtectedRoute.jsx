import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const storedJsonString = localStorage.getItem('userData');
  const UserId= localStorage.getItem('token')
  // Parse the JSON string back into an object
  console.log(UserId);
  const storedData = JSON.parse(storedJsonString);

  console.log(storedData);
  if (UserId != null || UserId != undefined) {
      return children
     

  }
  return <Navigate to="/login" />;
}