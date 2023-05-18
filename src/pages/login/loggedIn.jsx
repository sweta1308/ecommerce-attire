import { useNavigate } from "react-router"
import { useAuth } from "../../context/authContext";

export const LoggedIn = () => {
    const navigate = useNavigate();
    const {userLogout} = useAuth();

    const handleLogoutClick = () => {
        userLogout();
        navigate('/')
    }
    return (
        <>
            <h1>You are logged in!</h1>
            <button onClick={handleLogoutClick}>Log Out</button>
            <button onClick={() => navigate('/products')}>Browse Products</button>
        </>
    )
}