
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login.scss'

function Login() {

    return (
        <div className="login-cont">
            <div className="login-form-cont">

                <div className='fnd-txt-nam'>
                    <h1>Fundo</h1>
                    <h2>Sign in</h2>
                    <h3>Use your Fundo Account</h3>
                </div>

                <div className="inputField">
                    <TextField id="email" label="Email or Phone" variant="outlined" />
                </div>

                <div className="inputField">
                    <TextField id="password" label="Password" variant="outlined" />
                    <p >Forgot password</p>
                </div>


                <div className="create-login">
                    <p >Create account</p>
                    <Button variant="contained">Login</Button>
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