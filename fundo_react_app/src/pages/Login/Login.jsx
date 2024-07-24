
import React , {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login.scss'

function Login() {
// need to use useState - it ia a hook to define state variables for the input fields and error messages

const [emailOrPhone, setEmailOrPassword] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')

const handleLogin = () => {
    let isValidField = true
    if(!emailOrPhone){
        setEmailError('Please enter your email or phone')
        isValidField = false
    }
    else {
        setEmailError('')
    }

    if(!password) {
        setPasswordError('Please Enter your password')
        isValidField = false
    }
    else {
        setPasswordError('')
    }
    if(isValidField){
        console.log('login Success');
    }
}

    return (
        <div className="login-cont">
            <div className="login-form-cont">

                <div className='fnd-txt-nam'>
                    <h1>Fundo</h1>
                    <h2>Sign in</h2>
                    <h3>Login to your Fundo Account</h3>
                </div>

                <div className="inputField">
                    {/* <TextField id="email" label="Email or Phone" variant="outlined" /> */}

                    <TextField
                        error = {!!emailError}
                        id="email"
                        label="Email or Phone"
                        defaultValue=""
                        value={emailOrPhone}
                        helperText={emailError}
                        onChange={(e) => setEmailOrPassword(e.target.value)}
                        variant='outlined'
                    />
                </div>

                <div className="inputField">
                    {/* <TextField id="password" label="Password" variant="outlined" /> */}

                    <TextField
                        error = {!!passwordError}
                        id="password"
                        label="Password"
                        defaultValue=""
                        value={password}
                        helperText={passwordError}
                        onChange={(e) => setPassword(e.target.value)}
                        variant='outlined'
                    />
                    <p >Forgot password</p>
                </div>


                <div className="create-login">
                    <p >Create account</p>
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                </div>

            </div>
            <div className="bottomBar">
                <div>
                    <select className="dropdown-option">
                        <option value="English (United States)">English (United States)</option>
                    </select>
                </div>
                <div className="link">
                    <div><p>Help</p></div>
                    <div><p>Privacy</p></div>
                    <div><p>terms</p></div>
                </div>
            </div>
        </div>
    )
}

export default Login