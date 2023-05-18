import { useNavigate } from 'react-router';
import './login.css';
import { useState } from 'react';

export const Login = () => {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handlePasswordClick = () => setIsPasswordVisible(prev => !prev)

    return (
        <div>
            <div className='login'>
                <h2>Login</h2>
                <div>
                    <label for='email'>Email:</label>
                    <input id='email' placeholder='johndoe@example.com' />
                </div>

                <div>
                    <label for='password'>Password:</label>
                    <div className='password-wrapper'>
                        <input id='password' type={isPasswordVisible ? 'text' : 'password'} placeholder={isPasswordVisible ? 'password' : '********'} /> 
                        <button onClick={handlePasswordClick}>{isPasswordVisible ? <i class="fa-regular fa-eye-slash"></i> : <i class="fa-regular fa-eye"></i>}</button>
                    </div>
                </div>

                <button className='login-button'>Login</button>
                <button className='login-button guest'>Login As Guest</button>  

                <p onClick={() => navigate('/signup')}>Create New account <i class="fa-solid fa-angle-right"></i></p>
            </div>
        
        </div>
    )
}