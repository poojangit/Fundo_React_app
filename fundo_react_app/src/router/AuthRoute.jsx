import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const AuthRoute = ({ children }) => {
  
  if (localStorage.getItem("token") === undefined || localStorage.getItem("token") === null) {
    // console.log("k")
    return children
    // return <Navigate to = "/Login.jsx"/>;
    //navigate to signup or signin page
}
return <Navigate to="/dashboard" />;
  console.log("l")
};

export default AuthRoute;