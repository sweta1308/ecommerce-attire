import './signup.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const { userSignup, authState, userCredentials, setUserCredentials }: any =
    useAuth();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handlePasswordClick = () => setIsPasswordVisible((prev) => !prev);
  const handleConfirmPasswordClick = () =>
    setIsConfirmPasswordVisible((prev) => !prev);

  const handleSignUp = () => {
    if (
      !userCredentials.firstName.trim() ||
      !userCredentials.lastName.trim() ||
      !userCredentials.email.trim() ||
      !userCredentials.password.trim() ||
      !userCredentials.confirmPassword.trim()
    ) {
      toast.warning('Enter all credentials!');
    } else if (userCredentials.password !== userCredentials.confirmPassword) {
      toast.warning('Passwords do not match!');
    } else {
      userSignup(userCredentials);
      clearFields();
    }
  };

  const clearFields = () => {
    setUserCredentials({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <div className="name">
        <div>
          <label htmlFor="first-name">First Name: </label>
          <input
            id="first-name"
            placeholder="John"
            value={userCredentials.firstName}
            onChange={(e) =>
              setUserCredentials((prev: any) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name: </label>
          <input
            id="last-name"
            placeholder="Doe"
            value={userCredentials.lastName}
            onChange={(e) =>
              setUserCredentials((prev: any) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          value={userCredentials.email}
          onChange={(e) =>
            setUserCredentials((prev: any) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <div className="password-wrapper">
          <input
            id="password"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder={isPasswordVisible ? 'password' : '********'}
            value={userCredentials.password}
            onChange={(e) =>
              setUserCredentials((prev: any) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          <button onClick={handlePasswordClick}>
            {isPasswordVisible ? (
              <i className="fa-regular fa-eye-slash"></i>
            ) : (
              <i className="fa-regular fa-eye"></i>
            )}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="confirm-password">Confirm Password: </label>
        <div className="password-wrapper">
          <input
            id="confirm-password"
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            placeholder={isConfirmPasswordVisible ? 'password' : '********'}
            value={userCredentials.confirmPassword}
            onChange={(e) =>
              setUserCredentials((prev: any) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
          <button onClick={handleConfirmPasswordClick}>
            {isConfirmPasswordVisible ? (
              <i className="fa-regular fa-eye-slash"></i>
            ) : (
              <i className="fa-regular fa-eye"></i>
            )}
          </button>
        </div>
      </div>

      <button className="button-signup" onClick={handleSignUp}>
        {authState.isAuthLoading && <ClipLoader color={`#fff`} size={15} />}
        Signup
      </button>

      <p onClick={() => navigate('/login')}>
        Login to existing account <i className="fa-solid fa-angle-right"></i>
      </p>
    </div>
  );
};

export default Signup;
