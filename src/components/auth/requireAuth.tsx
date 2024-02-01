import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../context/authContext';

const RequireAuth: React.FC = () => {
  const { token }: any = useAuth();
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export default RequireAuth;
