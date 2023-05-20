import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../context/authContext";

export const RequireAuth = () => {
  const { authState } = useAuth();
  const location = useLocation();
  return authState.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
