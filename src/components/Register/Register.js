import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    'textAlign': 'center',
    'marginTop': '100px'
}

const Register = () => {
    return (
        <div>
            <div style={style}>
                <h2>Please Register here!</h2>
                <form onSubmit={''}>
                    <input type="email" name="email" id="" placeholder="your email" /><br />
                    <input type="password" name="password" id="" placeholder="password" /><br />
                    <input type="password" name="" id="" placeholder="re-enter passoword" /><br /><br />
                    <input type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <button className="btn-regular">Register with google</button>
            </div>
        </div>
    );
};

export default Register;