import './login.css';

export const Login = () => {
    return (
        <div>

            {/* <div className="login">
                <h1>Login</h1>
                <div className='name'>
                    <div>
                        <label for='first-name'>First name: </label>
                        <input id='first-name' placeholder='John' />
                    </div>
                    <div>
                        <label for='last-name'>Last name: </label>
                        <input id='last-name' placeholder='Doe' />
                    </div>
                </div>
                
                <div>
                    <label for='email'>Email:</label>
                    <input id='email' placeholder='johndoe@example.com' />
                </div>
                
            </div> */}

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

                <p>Create New account <i class="fa-solid fa-angle-right"></i></p>
            </div>
        
        </div>
    )
}