import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const style = {
    'textAlign': 'center',
    'marginTop': '100px'
}

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const redirectUrl = location.state?.from || '/shop';
    const history = useHistory();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUrl);
            })
    }


    return (
        <div>
            <div style={style}>
                <h2>Please Login</h2>
                <form onSubmit={''}>
                    <input type="email" name="email" id="" placeholder="your email" /><br />
                    <input type="password" name="password" id="" placeholder="password" /><br /><br />
                    <input type="submit" value="Login" />
                </form>
                <p>new to Ema-John!<Link to="/register"> Create account</Link></p>
                <div>--------------or-------------</div>
                <button
                    onClick={handleGoogleLogin} className="btn-regular">
                    Google SignIn
                </button>
            </div>
        </div>
    );
};

export default Login;