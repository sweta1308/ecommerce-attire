import { useNavigate } from "react-router";
import "./signup.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext";

export const Signup = () => {
  const navigate = useNavigate();
  const { userSignup } = useAuth();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [userCredentials, setUserCredentials] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handlePasswordClick = () => setIsPasswordVisible((prev) => !prev);
  const handleConfirmPasswordClick = () =>
    setIsConfirmPasswordVisible((prev) => !prev);

  const handleSignUp = () => {
    if (
      !userCredentials.fName.trim() ||
      !userCredentials.lName.trim() ||
      !userCredentials.email.trim() ||
      !userCredentials.password.trim() ||
      !userCredentials.confirmPassword.trim()
    ) {
      alert("Enter proper credentials");
    } else if (userCredentials.password !== userCredentials.confirmPassword) {
      alert("Passwords donot match");
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
              value={userCredentials.fName}
              onChange={(e) =>
                setUserCredentials((prev) => ({
                  ...prev,
                  fName: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label for="last-name">Last Name: </label>
            <input
              id="last-name"
              placeholder="Doe"
              value={userCredentials.lName}
              onChange={(e) =>
                setUserCredentials((prev) => ({
                  ...prev,
                  lName: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div>
          <label for="email">Email:</label>
          <input
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
          Signup
        </button>

        <p onClick={() => navigate("/login")}>
          Login to existing account <i class="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </>
  );
};
