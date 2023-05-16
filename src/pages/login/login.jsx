import { useNavigate } from 'react-router';
import './login.css';

export const Login = () => {
    const navigate = useNavigate();
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
                    <input id='password' type='password' placeholder='********' />
                </div>

                <button className='login-button'>Login</button>
                <button className='login-button guest'>Login As Guest</button>  

                <p onClick={() => navigate('/signup')}>Create New account <i class="fa-solid fa-angle-right"></i></p>
            </div>
        
        </div>
    )
}