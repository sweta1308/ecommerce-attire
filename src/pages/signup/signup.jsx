import { useNavigate } from "react-router";
import "./signup.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import {toast} from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader'

export const Signup = () => {
  const navigate = useNavigate();
  const { userSignup, authState, userCredentials, setUserCredentials } = useAuth();
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
      toast.warning("Enter all credentials!")
    } else if (userCredentials.password !== userCredentials.confirmPassword) {
      toast.warning("Passwords donot match!")
    } else {
      userSignup(userCredentials);
    }
  };

  return (
    <>
      <div className="signup">
        <h1>Sign Up</h1>
        <div className="name">
          <div>
            <label for="first-name">First Name: </label>
            <input
              id="first-name"
              placeholder="John"
              value={userCredentials.firstName}
              onChange={(e) =>
                setUserCredentials((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label for="last-name">Last Name: </label>
            <input
              id="last-name"
              placeholder="Doe"
              value={userCredentials.lastName}
              onChange={(e) =>
                setUserCredentials((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@example.com"
            value={userCredentials.email}
            onChange={(e) =>
              setUserCredentials((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div>
          <label for="password">Password: </label>
          <div className="password-wrapper">
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder={isPasswordVisible ? "password" : "********"}
              value={userCredentials.password}
              onChange={(e) =>
                setUserCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <button onClick={handlePasswordClick}>
              {isPasswordVisible ? (
                <i class="fa-regular fa-eye-slash"></i>
              ) : (
                <i class="fa-regular fa-eye"></i>
              )}
            </button>
          </div>
        </div>

        <div>
          <label for="confirm-password">Confirm Password: </label>
          <div className="password-wrapper">
            <input
              id="password"
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder={isConfirmPasswordVisible ? "password" : "********"}
              value={userCredentials.confirmPassword}
              onChange={(e) =>
                setUserCredentials((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
            <button onClick={handleConfirmPasswordClick}>
              {isConfirmPasswordVisible ? (
                <i class="fa-regular fa-eye-slash"></i>
              ) : (
                <i class="fa-regular fa-eye"></i>
              )}
            </button>
          </div>
        </div>

        <button className="button-signup" onClick={handleSignUp}>
          {authState.isAuthLoading && <ClipLoader color={`#fff`} size={15} />}
          Signup
        </button>

        <p onClick={() => navigate("/login")}>
          Login to existing account <i class="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </>
  );
};
