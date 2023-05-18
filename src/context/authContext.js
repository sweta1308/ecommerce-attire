import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";
import axios from "axios";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({children}) => { 
    const authInitial = {
        isLoggedIn: false,
        user: {},
        token: '',
    }
    const [authState, authDispatch] = useReducer(authReducer, authInitial);
    const navigate = useNavigate();
    // const location = useLocation()

    const userLogin = async (loginData) => {
        try {
            const {data, status} = await axios({
                method: 'POST',
                data: loginData,
                url: "/api/auth/login"
            })
            if (status === 200) {
                authDispatch({type: "set_login", payload: true});
                authDispatch({type: "set_user", payload: data?.foundUser});
                authDispatch({type: "set_token", payload: data?.encodedToken});
                navigate('/');
                localStorage.setItem('token', data?.encodedToken)
            }
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <>
            <AuthContext.Provider value={{authState, userLogin}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}



export const useAuth = () => useContext(AuthContext) 