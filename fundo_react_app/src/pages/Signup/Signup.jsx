import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Signup.scss'
import { RegisterPost} from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate()
    const [signUpObj, setSignupObj] = React.useState({ 
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "", 
        service: "advance" 
        });

    const [errObj, setErrObj] = React.useState ({
        firstNameError: false,
        firstNameHelper: "",
        userNameError: false,
        userNameHelper: "",
        passwordError: false,
        passwordHelper: "",
        confirmPasswordError: false,
        confirmPasswordHelper: "",
    })

    const [showPassword, setShowPassword] = useState('false')


    const handleChange = (e) => {
        const {name, value} = e.target
        setSignupObj((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleRegister = () => {
        let isValid = true;
        const newErrObj = {
            firstNameError: false,
            firstNameHelper: "",
            userNameError: false,
            userNameHelper: "",
            passwordError: false,
            passwordHelper: "",
            confirmPasswordError: false,
            confirmPasswordHelper: "",
        };

        if (!signUpObj.firstName) {
            newErrObj.firstNameError = true;
            newErrObj.firstNameHelper = 'Please enter your name';
            isValid = false;
        }

        if (!signUpObj.email) {
            newErrObj.userNameError = true;
            newErrObj.userNameHelper = 'Please enter your username';
            isValid = false;
        }

        if (!signUpObj.password) {
            newErrObj.passwordError = true;
            newErrObj.passwordHelper = 'Password is mandatory';
            isValid = false;
        }

        setErrObj(newErrObj);

        if (isValid) {
            RegisterPost (signUpObj)
            .then((response)=>{
                console.log(response);
                console.log('Registration successful');
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            })
        }
    };

    const handleSignIn = ()  => {
        navigate('/login')
    }
    
    return (
        <div className="main-cnt">
            <div className="box-cnt">
                <div className="box-details-cnt">
                    <span className="fun-txt">Fundo</span>
                    <span className="create-acc">Create your Fundo Account</span>
                    <div className="inp-fields">
                        <div className="fname-lname-box">
                            <div>
                                <TextField
                                    error={errObj.firstNameError}
                                    name="firstName"
                                    className='inp-box'
                                    label="First Name*"
                                    variant="outlined"
                                    value={signUpObj.firstName}
                                    onChange={handleChange}
                                    helperText={errObj.firstNameHelper}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="lastName"
                                    className='inp-box'
                                    label="Last Name*"
                                    variant="outlined"
                                    value={signUpObj.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="inp-uname-box">
                            <div className='uname-inp-box-field'>
                                <TextField
                                    error={errObj.userNameError}
                                    name="email"
                                    className='inp-box'
                                    label="User Name*"
                                    variant="outlined"
                                    value={signUpObj.email}
                                    onChange={handleChange}
                                    helperText={errObj.userNameHelper}
                                />
                            </div>
                            <span className="pass-txt">You can use numbers, letters & periods</span>
                        </div>
                        <div className="password-div">
                            <div className="inp-pass_confrim-cnt inp-div">
                                <TextField
                                    name="password"
                                    className='inp-box'
                                    label="Password*"
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    value={signUpObj.password}
                                    onChange={handleChange}
                                    error={errObj.passwordError}
                                    helperText={errObj.passwordHelper}
                                />
                                <TextField
                                    name="confirmPassword"
                                    className='inp-box'
                                    label="Confirm*"
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    value={signUpObj.confirmPassword}
                                    error={errObj.confirmPasswordError}
                                    helperText={errObj.confirmPasswordHelper}
                                />
                            </div>
                            <span className="pass-setup-txt">Use 8 or more characters with a mix of letters, numbers & symbols</span>
                        </div>
                    </div>
                    <div className='show-pass'>
                        <FormControlLabel
                            control={<Checkbox checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />}
                            label="Show Password"
                        />
                    </div>
                    <div className="signin-register-boton-box inp-div">
                        <Button variant="text" onClick={handleSignIn}>Sign in instead</Button>
                        <Button variant="contained" onClick={handleRegister}>Register</Button>
                    </div>
                </div>
                <div className="img-box">
                    <img src="https://lh4.googleusercontent.com/proxy/m6tdf4WP7sUYOzq7AwqGT1m6r3Abj8X0jdmpfPGgpsmQIHp5-AOvdMTtEI8Kg_B3ei2H0ETg0mLhTvsidzaWQWkNtAJhmpw2yYcq5OjyNEWDyhZ7jlTj8wy_yoZz=w1366-h603" alt="Not Available" />
                    <p>One account. All of Fundo working for you</p>
                </div>
            </div>
            <div className="extra-option-box">
                <div>
                    <select className="mySelect-inp">
                        <option value="English (United States)">English (United States)</option>
                    </select>
                </div>
                <div className="extra-option-txt-box">
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
