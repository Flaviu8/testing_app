import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"
import Logo from "../../assets/logo/menda.png"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/user/login",
                { email, password, rememberMe },
                { withCredentials: true } // Ensures cookies are stored
            );

            if (response.status === 200) {
                console.log("Login successful");
                navigate("/dashboard"); // Redirect after login
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Check your credentials.");
        }
    };

    return (
        <div className="main-login">
        <section className="register">
            <div className="registration-container">
                <div className="logo-form">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="r-title">
                    <h2>Sign In</h2>
                    <p>Login to stay connected.</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="registration-form">
                    {/* Email */}
                    <label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder=" " 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <span>Email</span>
                    </label>

                    {/* Password */}
                    <label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder=" " 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <span>Password</span>
                    </label>

                    <div className="remember-box">
                        <div className="agree">
                            <input 
                                type="checkbox" 
                                id="rememberMe" 
                                checked={rememberMe} 
                                onChange={() => setRemember(!rememberMe)} 
                            />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <div className="recover">
                            <Link to="/password-reset">Forgot your password?</Link>
                        </div>
                    </div>

                    <div className="register-btn">
                        <button type="submit" className="submit-btn">Login</button>
                    </div>
                </form>

                <div className="account-s">
                    <p>You don't have an account? <NavLink to="/register">Create account here.</NavLink></p>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Login;
