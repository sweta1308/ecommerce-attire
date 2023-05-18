import { useNavigate } from 'react-router';
import './signup.css';
import { useState } from 'react';

export const Signup = () => {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const handlePasswordClick = () => setIsPasswordVisible(prev => !prev)
    const handleConfirmPasswordClick = () => setIsConfirmPasswordVisible(prev => !prev)

    
    return (
        <>
            <div className="signup">
                <h1>Sign Up</h1>
                <div className='name'>
                    <div>
                        <label for='first-name'>First Name: </label>
                        <input id='first-name' placeholder='John' />
                    </div>
                    <div>
                        <label for='last-name'>Last Name: </label>
                        <input id='last-name' placeholder='Doe' />
                    </div>
                </div>
                
                <div>
                    <label for='email'>Email:</label>
                    <input id='email' placeholder='johndoe@example.com' />
                </div>
                
                <div>
                    <label for='password'>Password: </label>
                    <div className='password-wrapper'>
                        <input id='password' type={isPasswordVisible ? 'text' : 'password'} placeholder={isPasswordVisible ? 'password' : '********'} /> 
                        <button onClick={handlePasswordClick}>{isPasswordVisible ? <i class="fa-regular fa-eye-slash"></i> : <i class="fa-regular fa-eye"></i>}</button>
                    </div>
                </div>

                <div>
                    <label for='confirm-password'>Confirm Password: </label>
                    <div className='password-wrapper'>
                        <input id='password' type={isConfirmPasswordVisible ? 'text' : 'password'} placeholder={isConfirmPasswordVisible ? 'password' : '********'} /> 
                        <button onClick={handleConfirmPasswordClick}>{isConfirmPasswordVisible ? <i class="fa-regular fa-eye-slash"></i> : <i class="fa-regular fa-eye"></i>}</button>
                    </div>
                </div>

                <button className='button-signup'>Signup</button>

                <p onClick={() => navigate('/login')}>Login to existing account <i class="fa-solid fa-angle-right"></i></p>
            </div>
        </>
    )
}