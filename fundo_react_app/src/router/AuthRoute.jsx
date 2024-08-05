import { Outlet, Navigate } from "react-router-dom";
import React from "react";

export const AuthRoute = ({ children }) => {
  
  const storedJsonString = localStorage.getItem('userData');

    const storedData = JSON.parse(storedJsonString);

    
    if (storedData === null || storedData === undefined) {
        return children
    }
    return <Navigate to="/" />

  //   if (localStorage.getItem("token") === undefined || localStorage.getItem("token") === null) {
  //     // console.log("k")
  //     return children
  //     // return <Navigate to = "/Login.jsx"/>;
  //     //navigate to signup or signin page
  // }
  // return <Navigate to="/" />;
  //   console.log("l")
};

