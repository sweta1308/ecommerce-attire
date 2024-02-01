import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
import { toast } from 'react-toastify';
import './profile.css';
import { NavLink } from 'react-router-dom';

const getStyles = ({ isActive }: any) => ({
  color: isActive ? 'var(--primary-color)' : 'black',
  borderBottom: isActive ? '1px solid var(--primary-color)' : 'none',
});

const Profile = () => {
  const { userLogout, authState }: any = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate('/profile');
    toast.warning('Logged Out!');
  };

  return (
    <div>
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

        <button className="log-out" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
