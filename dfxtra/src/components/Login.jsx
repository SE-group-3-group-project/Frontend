import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ setLoginUser }) => {

    const [user, setUser] = useState({
        personalEmail: "",
        password: ""
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const location = useLocation();

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:4000/login`, user);
            alert(res.data.message);
            console.log(res);
            setLoggedIn(res.data.user ? true : false);
            setUser({ personalEmail: ``, password: `` });
            setLoginUser(res.data.user);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:4000/login`, user);
        setLoginUser(res.data.user ? false : true);
        setLoggedIn({ LoggedIn: false })
        console.log("You are logged out")
        alert('You have been logged out of the system');
    }

    return (
        <>
            {loggedIn && <Navigate to="/" state={{ from: location }} />}
            <h3>Log in to your account</h3>
            <form onSubmit={login}>
                <div className="form-outline form-white mb-4">
                    <input type="personalEmail" id="sign-in-personalEmail" name="personalEmail" value={user.personalEmail} onChange={handleChange} className="form-control form-control-lg" />

                </div>

                <div className="form-outline form-white mb-4">
                    <input type="password" id="sign-in-password" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" />

                </div>
                <button className="btn btn-outline-light btn-lg px-5" type="submit" value="Login">Login</button>
            </form>
            <Link to="/register">
                You don&#x27;t have an account? Register now!
            </Link>
            <form onSubmit={logout}>
                <button id="logout" onSubmit={logout}>Log Out</button>
            </form>
        </>
    );
}

Login.propTypes = {
    setLoginUser: PropTypes.func.isRequired
}

export default Login;