import React, { useState } from 'react';
import './Login.css'; // Your custom CSS for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginsuccess, setLoginsuccess] = useState('');

    const k = process.env.REACT_APP_API_URL;
    console.log(k);
    const kk= `${process.env.REACT_APP_API_URL}/api/login`
    console.log(kk)
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic validation for email and password
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
            // const response = await axios.post('http://localhost:5001/api/login', {
            // const response = await axios.post('api/login', {
                email,
                password,
            });

            // Check if login was successful
            if (response.status === 200) {
                // Assuming the backend returns a success message
                const { username } = response.data; // The backend should send username if login is successful

                // Store the username in sessionStorage (or localStorage)
                sessionStorage.setItem('name', username);

                setLoginsuccess('true');
                sessionStorage.setItem('loginsuccess', 'true');

                // Redirect to Ask page
                // window.reload();
                // console.log("before reload")
                // window.location.reload();
                // await wait(5000);
                navigate('/Ask');

            }
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
            console.error('Login error:', err.message);
        }
    };

    // Handle navigation to sign-up page
    const handleSignUpClick = () => {
        localStorage.setItem('Atsigninpage', true);
        localStorage.setItem('Atloginpage', false);
        navigate('/signin'); // Redirect to sign-up page
    };

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="login-container">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
            <br />
            <div className="signup-link">
                <p>
                    Don't have an account?{' '}
                    <span onClick={handleSignUpClick} className="link">
                        Sign up
                    </span>
                </p>
            </div>
        </>
    );
}

export default Login;




