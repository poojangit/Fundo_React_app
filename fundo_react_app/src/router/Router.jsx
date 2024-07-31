import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
// & browse
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes >
        <Route exact path={"/"} element={<AuthRoute><Login/></AuthRoute>}/>
        <Route path={"/signup"} element={<AuthRoute><Signup/></AuthRoute>}/>
        <Route path={"/dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Router