import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useLocation } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import Footer from './Footer';

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
            <HomeHeader />
            {loggedIn && <Navigate to="/" state={{ from: location }} />}
            <div className="px-12 py-6 m-4 bg-white rounded-2xl grid h-screen place-items-center">
                <div className="border p-5 rounded ">

                    <h3 className="pt-2 pb-4 text-xl text-royal-blue text-center">LOG INTO YOUR ACCOUNT</h3>
                    <div className="flex flex-col" id="login-form ">
                        <form onSubmit={login} className="flex flex-col items-center">
                            <div className="w-full max-w-md w-64 m-3 text-xl">
                                <label className="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2 " htmlFor="sign-in-password">EMAIL
                                </label>
                                <input type="personalEmail" id="sign-in-personalEmail" name="personalEmail" value={user.personalEmail} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                            </div>

                            <div className="w-full max-w-md w-64 m-3 text-xl">
                                <label className="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" htmlFor="sign-in-password">PASSWORD
                                </label>
                                <input type="password" id="sign-in-password" name="password" value={user.password} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
                            </div>
                            <button
                                className="border rounded-2xl bg-royal-blue text-xl text-white px-4 py-1 sm:py-3 sm:px-5 hover:opacity-70"
                                type="button"
                                onClick={login}
                            >
                                Login
                            </button>
                        </form>
                        <Link to="/register" className="text-center pt-5">
                            You don&#x27;t have an account? Register now!
                        </Link>
                    </div>
                </div>
            </div >
            <Footer />

        </>
    );
}


export default Login;