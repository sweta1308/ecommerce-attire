import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../context/authContext";

export const RequireAuth = () => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
