/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router';
import { getHeaders } from '../services/common';
import { logOut } from '../services/request';
import SideNav from './SideNav';

const ProtectedRoute = () => {
  const headers = getHeaders();
  if (!headers || !Object.keys(headers).length) {
    toast.error('You need to log in');
    return <Navigate to="/login" />;
  }

  const history = useNavigate();

  const handleLogout = () => {
    logOut();
    history('/');
  };

  return (
    <div className="s-layout page-wrapper">
      <SideNav />
      <div className="s-layout__content">
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger me-3 mt-3 logout" type="button" onClick={handleLogout}>Logout</button>
        </div>
        <Outlet />
      </div>

    </div>
  );
};

export default ProtectedRoute;
