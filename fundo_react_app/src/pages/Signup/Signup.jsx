import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import signUpImage from './assets/signup.png';
import './Signup.scss'

function Signup() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState('false')
    const [firstNameError, setFirstNameError] = useState('')
    const [userNameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const handleRegister = () => {

        let isValid = true;

        if (!firstName) {
            setFirstNameError('Please enter your name');
            isValid = false;
        } else {
            setFirstNameError('');
        }

        if (!userName) {
            setUsernameError('Please enter your username');
            isValid = false;
        } else {
            setUsernameError('');
        }

        if (!password) {
            setPasswordError('Password is mandatory');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (!confirmPassword) {
            setConfirmPasswordError('Confirm password field is mandatory');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (isValid) {
            console.log('Registration successful');
        }
    };

    return (
        <div className="main-cnt">
            <div className="box-cnt">
                <div className="box-details-cnt">
                    <span className="fun-txt">Fundo</span>
                    <span className="create-acc">Create your Fundo Account</span>
                    <div className="inp-fields">
                        <div className="fname-lname-box">
                            <div>

                                {/* <TextField id="outlined-basic" className='inp-box' label="First Name*" variant="outlined" /> */}
                                <TextField
                                    error={!!firstNameError}
                                    id="outlined-basic"
                                    className='inp-box'
                                    label="First Name*"
                                    variant="outlined"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    helperText={firstNameError}
                                />
                            </div>
                            <div>
                                {/* <TextField id="outlined-basic" className='inp-box' label="Last Name*" variant="outlined" /> */}
                                <TextField

                                    id="outlined-basic"
                                    className='inp-box'
                                    label="Last Name*"
                                    variant="outlined"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="inp-uname-box">
                            <div className='uname-inp-box-field'>
                                {/* <TextField id="outlined-basic" label="Username*"  variant="outlined" /> */}
                                <TextField
                                    error={!!userNameError}
                                    id="outlined-basic"
                                    className='inp-box'
                                    label="User Name*"
                                    variant="outlined"
                                    value={userName}
                                    helperText={userNameError}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <span className="pass-txt">You can use numbers, letters & periods</span>
                        </div>
                        <div className="password-div">
                            <div className="inp-pass_confrim-cnt inp-div">
                                {/* <TextField id="outlined-basic" className='inp-box' label="Password*"  variant="outlined" /> */}
                                <TextField
                                    id="outlined-basic"
                                    className='inp-box'
                                    label="Password*"
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={!!passwordError}
                                    // helperText={passwordError}
                                />
                                {/* <TextField id="outlined-basic" className='inp-box' label="Confrim*"  variant="outlined" /> */}
                                <TextField
                                    error={!!confirmPasswordError}
                                    id="outlined-basic"
                                    className='inp-box'
                                    label="Confirm*"
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    // helperText={confirmPasswordError}
                                />
                            </div>
                            <span className="pass-setup-txt">Use 8 or more characters with a mix letters, numbers &
                                symbols</span>
                        </div>

                    </div>
                    <div className='show-pass'>
                        <FormControlLabel
                            control={<Checkbox checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />}
                            label="Show Password"
                        />
                    </div>
                    <div className="signin-register-boton-box inp-div">
                        <Button variant="text" >Sign in instead</Button>
                        <Button variant="contained" onClick={handleRegister}>Register</Button>
                    </div>

                </div>
                <div className="img-box">
                    <img src="https://lh4.googleusercontent.com/proxy/m6tdf4WP7sUYOzq7AwqGT1m6r3Abj8X0jdmpfPGgpsmQIHp5-AOvdMTtEI8Kg_B3ei2H0ETg0mLhTvsidzaWQWkNtAJhmpw2yYcq5OjyNEWDyhZ7jlTj8wy_yoZz=w1366-h603" alt="Not Available" />
                    <p>One account.All of Fundo</p>
                    <p>working for you</p>
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
