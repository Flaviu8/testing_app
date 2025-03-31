import { useState } from "react";
import axios from "axios";
import Logo from "../../assets/logo/menda.png"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
      const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting


    try {
      await axios.post("http://localhost:8080/auth/forgot-password", { email });
      setMessage("Check your email for the reset link. Don't forget to check in spam folder.");
    } catch (error) {
      setMessage(error.response?.data || "Error occurred.");
    } finally {
        setLoading(false);
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
            <h2>Reset Password</h2>
            <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="registration-form">
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
                <span>Enter your Email</span>
            </label>
            <div>
                <p>{message}</p>
            </div>
            <div className="register-btn">
                <button type="submit" className="submit-btn" disabled={loading} > {loading ? "Please wait..." : "Send link"}</button>
            </div>
        </form>
    </div>
</section>
</div>
  
  );
};

export default ForgotPassword;


