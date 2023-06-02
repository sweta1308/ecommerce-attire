import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { authReducer } from "../reducer/authReducer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localStorageItem = JSON.parse(localStorage.getItem("data"));
  const location = useLocation();
  const authInitial = {
    isAuthLoading: false,
    user: {},
  };

  const [token, setToken] = useState(localStorageItem?.token || "");

  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [authState, authDispatch] = useReducer(authReducer, authInitial);
  const navigate = useNavigate();

  const userLogin = async (loginData) => {
    try {
      authDispatch({ type: "set_loading", payload: true });
      const { data, status } = await axios({
        method: "POST",
        data: loginData,
        url: "/api/auth/login",
      });
      if (status === 200) {
        authDispatch({ type: "set_user", payload: data?.foundUser });
        setToken(data?.encodedToken);
        authDispatch({ type: "set_loading", payload: false });
        navigate(location?.state?.from?.pathname || "/products");
        localStorage.setItem(
          "data",
          JSON.stringify({ user: data?.foundUser, token: data?.encodedToken })
        );
        toast.success("Logged In!")
      }
    } catch (e) {
      console.log(e);
      alert(e.response.data.errors);
    }
  };

  const userSignup = async (signupData) => {
    try {
      authDispatch({ type: "set_loading", payload: true });
      const { data, status } = await axios({
        method: "POST",
        data: signupData,
        url: "/api/auth/signup",
      });
      if (status === 201) {
        authDispatch({ type: "set_user", payload: data?.createdUser });
        setToken(data?.encodedToken);
        authDispatch({ type: "set_loading", payload: false });
        navigate(location?.state?.from?.pathname || "/products");
        localStorage.setItem(
          "data",
          JSON.stringify({ user: data?.createdUser, token: data?.encodedToken })
        );
        toast.success("Logged In!")
      }
    } catch (e) {
      console.log(e);
    }
  };

  const userLogout = () => {
    authDispatch({ type: "set_user", payload: {} });
    setToken("");
    localStorage.removeItem("data");
  };

  useEffect(() => {
    if (localStorageItem) {
      authDispatch({ type: "set_user", payload: localStorageItem?.user });
      setToken(localStorageItem?.token);
      authDispatch({ type: "set_loading", payload: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          authState,
          userLogin,
          userSignup,
          userLogout,
          userCredentials,
          setUserCredentials,
          token,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
