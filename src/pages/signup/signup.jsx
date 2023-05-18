import { useNavigate } from 'react-router';
import './signup.css';

export const Signup = () => {
    const navigate = useNavigate();
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
                    <input id='password' type='password' placeholder='********' />
                </div>

                <div>
                    <label for='confirm-password'>Confirm Password: </label>
                    <input id='confirm-password' type='password' placeholder='********' />
                </div>

                <button>Signup</button>

                <p onClick={() => navigate('/login')}>Login to existing account <i class="fa-solid fa-angle-right"></i></p>
            </div>
        </>
    )
}