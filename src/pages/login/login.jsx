import { useNavigate } from 'react-router';
import './login.css';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';

export const Login = () => {
    const navigate = useNavigate();
    const {userLogin} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const testUserData = {
        email: 'adarshbalika@gmail.com',
        password: 'adarshbalika'
    }

    const handlePasswordClick = () => setIsPasswordVisible(prev => !prev);

    const handleLogin = () => {
        if (!userData.email.trim() || !userData.password.trim()) {
            alert('Enter proper credentials.')
        } else {
            userLogin(userData)
            navigate('/')
        }   
    }
    console.log(userData)
    const handleTestLogin = () => {
        setUserData(testUserData);
        userLogin(testUserData);
    }

    return (
        <div>
            <div className='login'>
                <h2>Login</h2>
                <div>
                    <label for='email'>Email:</label>
                    <input id='email' placeholder='johndoe@example.com' value={userData.email} onChange={(e) => setUserData(prev => ({...prev, email: e.target.value}))} />
                </div>

                <div>
                    <label for='password'>Password:</label>
                    <div className='password-wrapper'>
                        <input id='password' type={isPasswordVisible ? 'text' : 'password'} placeholder={isPasswordVisible ? 'password' : '********'} value={userData.password} onChange={(e) => setUserData(prev => ({...prev, password: e.target.value}))} /> 
                        <button onClick={handlePasswordClick}>{isPasswordVisible ? <i class="fa-regular fa-eye-slash"></i> : <i class="fa-regular fa-eye"></i>}</button>
                    </div>
                </div>

                <button className='login-button' onClick={handleLogin}>Login</button>
                <button className='login-button guest' onClick={handleTestLogin}>Login As Guest</button>  

                <p onClick={() => navigate('/signup')}>Create New account <i class="fa-solid fa-angle-right"></i></p>
            </div>
        
        </div>
    )
}