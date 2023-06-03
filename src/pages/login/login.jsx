import { useLocation, useNavigate } from "react-router";
import "./login.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

export const Login = () => {
  const navigate = useNavigate();
  const { userLogin, authState } = useAuth();
  const location = useLocation()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const testUserData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const handlePasswordClick = () => setIsPasswordVisible((prev) => !prev);

  const handleLogin = () => {
    if (!userData.email.trim() || !userData.password.trim()) {
      toast.warning("Enter all credentials!")
    } else {
      userLogin(userData);
    }
  };

  const handleTestLogin = () => {
    setUserData(testUserData);
    userLogin(testUserData);
    navigate(location?.state?.from?.pathname || "/products");
  };

  return (
    <div>
      <div className="login">
        <h2>Login</h2>
        <div>
          <label for="email">Email:</label>
          <input
            type='login'
            id="email"
            placeholder="johndoe@example.com"
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div>
          <label for="password">Password:</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder={isPasswordVisible ? "password" : "********"}
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
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

        <button className="login-button" onClick={handleLogin}>
          {authState.isAuthLoading && <ClipLoader color={`#fff`} size={15} />}
          Login
        </button>
        <button className="login-button guest" onClick={handleTestLogin}>
          {authState.isAuthLoading && <ClipLoader color={`#fff`} size={15} />}
          Login As Guest
        </button>

        <p onClick={() => navigate("/signup")}>
          Create New account <i class="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </div>
  );
};
