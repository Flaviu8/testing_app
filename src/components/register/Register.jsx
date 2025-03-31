import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from "../../assets/logo/menda.png";

const Register = () => {
    // Retrieve and store the activeTab in uppercase ('INDIVIDUAL' or 'COMPANY')
    const savedTab = localStorage.getItem('activeTab') || 'INDIVIDUAL';
    const [activeTab, setActiveTab] = useState(savedTab);

    // Include userType in formData
    const [formData, setFormData] = useState({
        companyName: '',
        companyRegistrationNumber: '',
        email: '',
        username: '',
        password: '',
        userType: activeTab,  // Added userType to the form data
        companyUsername: '',
        companyEmail: '',

    });
    
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle checkbox change
    const handleAgreeChange = () => {
        setAgree((prevAgree) => !prevAgree);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!agree) {
            alert("You must agree with the terms of use.");
            return;
        }

        setLoading(true); // Set loading to true when submitting
        setError(null);   // Reset any previous errors

        // Prepare data based on the active tab (uppercase)
        const data = formData.userType === "INDIVIDUAL" ? {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            userType: activeTab,  // Added userType to the form data

        } : {
            username: formData.companyUsername,
            email: formData.companyEmail,
            companyName: formData.companyName,
            companyRegistrationNumber: formData.companyRegistrationNumber,
            password: formData.password,
            userType: activeTab,  // Added userType to the form data

        };

        try {
            const response = await axios.post("http://localhost:8080/register", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Handle response
            console.log("Response:", response.data);
            alert("Registration successful!");
            window.location.href = "/login";  // Redirect to login page
        } catch (err) {
            console.error("Error during registration:", err);
            setError("Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Save the active tab in localStorage in uppercase
        localStorage.setItem('activeTab', activeTab);

        // Update userType in formData when activeTab changes
        setFormData((prevData) => ({
            ...prevData,
            userType: activeTab,
        }));
    }, [activeTab]);

    return (
        <div className="main-login">
            <section className="register">
                <div className="registration-container">
                    <div className="logo-form">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="r-title">
                        <h2>Sign Up</h2>
                        <p>Create your account.</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="tabs">
                        <button
                            className={`tab-btn ${activeTab === "INDIVIDUAL" ? "active" : ""}`}
                            onClick={() => setActiveTab("INDIVIDUAL")}
                        >
                            Individual
                        </button>
                        <button
                            className={`tab-btn ${activeTab === "COMPANY" ? "active" : ""}`}
                            onClick={() => setActiveTab("COMPANY")}
                        >
                            Company
                        </button>
                    </div>

                    {/* Registration Form */}
                    <form id="registerForm" method="POST" className="registration-form" onSubmit={handleSubmit}>
                        {/* Individual Tab Content */}
                        {activeTab === "INDIVIDUAL" && (
                            <div id="individual" className="tab-content active">
                                <label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span>Username</span>
                                </label>

                                <label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span>Email</span>
                                </label>

                                <label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span>Password</span>
                                </label>

                                <div className="agree">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        checked={agree}
                                        onChange={handleAgreeChange}
                                    />
                                    <label htmlFor="agree">I agree with terms of use</label>
                                </div>

                                <div className="register-btn">
                                    <button type="submit" className="submit-btn" disabled={loading}>
                                        {loading ? "Submitting..." : "Create account"}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Company Tab Content */}
                        {activeTab === "COMPANY" && (
                            <div id="company" className="tab-content active">
                                <label>
                                    <input
                                        type="text"
                                        id="company-username"
                                        name="companyUsername"
                                        value={formData.companyUsername}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span>Username</span>
                                </label>

                                <label>
                                    <input
                                        type="email"
                                        id="company-email"
                                        name="companyEmail"
                                        value={formData.companyEmail}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span>Email</span>
                                </label>

                                <label>
                                    <input
                                        type="text"
                                        id="company-name"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                    <span>Company name</span>
                                </label>

                                <label>
                                    <input
                                        type="text"
                                        id="company-registration-number"
                                        name="companyRegistrationNumber"
                                        value={formData.companyRegistrationNumber}
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                    <span>Company registration number</span>
                                </label>

                                <label>
                                    <input
                                        type="password"
                                        id="company-password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder=" "
                                        required
                                    />
                                    <span>Password</span>
                                </label>

                                <div className="agree">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        checked={agree}
                                        onChange={handleAgreeChange}
                                    />
                                    <label htmlFor="agree">I agree with terms of use</label>
                                </div>

                                <div className="register-btn">
                                    <button type="submit" className="submit-btn" disabled={loading}>
                                        {loading ? "Submitting..." : "Create account"}
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>

                    {error && <div className="error">{error}</div>}

                    <div className="account-s">
                        <p>
                            Already have an account? <a href="/login">Sign in.</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
