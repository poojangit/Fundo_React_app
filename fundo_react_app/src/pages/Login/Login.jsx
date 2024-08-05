import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login.scss';
import { LoginPost } from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [loginObj, setLoginObj] = useState({
        email: '',
        password: ''
    });

    const [errObj, setErrObj] = useState({
        emailError: '',
        passwordError: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginObj((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = () => {
        let isValidField = true;
        const newErrObj = {
            emailError: '',
            passwordError: ''
        };

        if (!loginObj.email) {
            newErrObj.emailError = 'Please enter your email';
            isValidField = false;
        }

        if (!loginObj.password) {
            newErrObj.passwordError = 'Please enter your password';
            isValidField = false;
        }

        setErrObj(newErrObj);

        if (isValidField) {
            console.log(loginObj);
            // console.log('Login Success');
            LoginPost (loginObj).then((response)=>{
                console.log(response.data.id);
                localStorage.setItem("token",response.data.id)
                console.log('Login successful');
                navigate('/')
                // const token = localStorage.getItem("token")
                // console.log(token);
            })
            .catch((error) => {
                console.log(error);
            })

        }
    };

    const handleSignUp = () => {
        navigate('/register');
    };

    return (
        <div className="login-cont">
            <div className="login-form-cont">
                <div className='fnd-txt-nam'>
                    <h1>Fundo</h1>
                    <h2>Sign in</h2>
                    <h3>Login to your Fundo Account</h3>
                </div>

                <div className="inputField">
                    <TextField
                        error={!!errObj.emailError}
                        name="email"
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={loginObj.email}
                        onChange={handleChange}
                        helperText={errObj.emailError}
                    />
                </div>

                <div className="inputField">
                    <TextField
                        error={!!errObj.passwordError}
                        name="password"
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={loginObj.password}
                        onChange={handleChange}
                        helperText={errObj.passwordError}
                    />
                    <p>Forgot password</p>
                </div>

                <div className="create-login">
                    <p onClick={handleSignUp} style={{ cursor: 'pointer', color: 'blue' }}>Create account</p>
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
                    <div><p>Terms</p></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
