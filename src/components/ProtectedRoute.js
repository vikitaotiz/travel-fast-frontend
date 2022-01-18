/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router';
import { getHeaders } from '../services/common';
import SideNav from './SideNav';

const ProtectedRoute = () => {
  const headers = getHeaders();
  if (!headers || !Object.keys(headers).length) {
    toast.error('You need to log in');
    return <Navigate to="/login" />;
  }
  return (
    <div className="s-layout page-wrapper">
      <SideNav />
      <div className="s-layout__content">
        <Outlet />
      </div>

    </div>
  );
};

export default ProtectedRoute;
