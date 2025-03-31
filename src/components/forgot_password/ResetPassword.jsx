import { useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import Logo from "../../assets/logo/menda.png";


const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  
  
  const token = searchParams.get("token"); // Get token from URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting


    try {
      const response = await axios.post("http://localhost:8080/auth/reset-password", newPassword, {
        params: { token }, // Send token as a URL param
        headers: { "Content-Type": "text/plain" }, // Ensure plain text body
      });
      setMessage(response.data);
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
            </div>
      <form className="registration-form" onSubmit={handleSubmit}>
            <label>
                <input 
                    type="password" 
                    placeholder=" " 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)}
                    required 
                />
                <span>Enter new password</span>
            </label>
            <div className="register-btn">
                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? "Please wait..." : "Reset Password"}
                </button>
            </div>
      </form>
      {message && 
      <div className="r-message">
        <p>{message}</p> <br />
        <p>Go to <Link className="r-login" to="/login">Login</Link></p>
    </div>
    }
    </div>
    </section>
</div>
  );
};

export default ResetPassword;



