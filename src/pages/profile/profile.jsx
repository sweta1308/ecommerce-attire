import { useNavigate } from "react-router";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import "./profile.css";
import { NavLink } from "react-router-dom";

export const Profile = () => {
  const { userLogout, authState } = useAuth();
  const navigate = useNavigate();
  const getStyles = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "black",
    borderBottom: isActive ? "1px solid var(--primary-color)" : "none",
  });
  return (
    <>
      <h1>Account</h1>
      <div className="profile">
        <div className="links">
          <NavLink style={getStyles} to="/profile">
            Profile
          </NavLink>
          <NavLink style={getStyles} to="/address-details">
            Address
          </NavLink>
        </div>
        <hr />
        <div>
          <strong>Name: </strong>
          <span>{`${authState.user.firstName} ${authState.user.lastName}`}</span>
        </div>
        <div>
          <strong>Email: </strong>
          <span>{authState.user.email}</span>
        </div>
        <button
          className="log-out"
          onClick={() => {
            userLogout();
            navigate("/");
            toast.warning("Logged Out!");
          }}
        >
          Log Out
        </button>
      </div>
    </>
  );
};
