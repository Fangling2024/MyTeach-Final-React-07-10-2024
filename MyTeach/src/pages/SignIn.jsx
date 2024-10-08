import React, { useState } from 'react';
import './SignIn.css'; 

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear any existing errors

        try {
            const response = await fetch('https://your-api-url.com/api/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (!response.ok) {
                throw new Error('Failed to authenticate. Please check your credentials.');
            }

            const data = await response.json();
            console.log('Success:', data);
            // Optionally store the authentication token, handle redirection, etc.
            if (rememberMe) {
                localStorage.setItem('userToken', data.token); // Adjust 'data.token' based on your API response structure
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError(error.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                {error && <div className="error">{error}</div>}
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group checkbox">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={e => setRememberMe(e.target.checked)}
                        />
                        Remember Me
                    </label>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;