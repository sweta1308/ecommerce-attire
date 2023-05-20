import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../context/authContext";

export const RestrictAuth = () => {
  const { authState } = useAuth();
  const location = useLocation();

  return authState.isLoggedIn ? (
    <Navigate to={location?.state?.from?.pathname || "/"} replace />
  ) : (
    <Outlet />
  );
};
