
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData
      );

      console.log("Login success:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      alert("🎉 Login Successful!");
      Navigate("/dashboard");
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error);
      alert(error.response?.data?.message || "Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container containers text-center py-5">

        {/* Logo */}
        <div>
          <img
            onClick={() => Navigate("/")}
            src="publicAssets/images/logo.webp"
            alt="PSFS Logo"
            className="login-logo cursor-pointer"
            style={{ zIndex: "999" }}
          />
        </div>

        <h2 className="welcome-text display-5 pb-4" style={{ letterSpacing: "3px" }}>
          WEL<span>COME</span>
        </h2>

        <div className="d-flex justify-content-center align-items-center mb-5">
          <button className="btn btn-outline-warning px-4 px-lg-5 text-white border_line">
            Login
          </button>
          <div className="vr mx-3 mt-2"></div>
          <button
            className="btn btn-outline-warning px-4 px-lg-5 text-white border_line"
            onClick={() => Navigate("/RegisterFirstPage")}
          >
            Register
          </button>
        </div>

        <form className="login-form mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4 text-start">
            <label className="form-label text-white">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control input-custom"
              placeholder="vaibhav123@gmail.com"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control input-custom"
              placeholder="********"
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label text-white" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <a href="/" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100 login-btn fs-5" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="social-login mt-4">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <hr className="flex-grow-1 line" />
            <span className="mx-2 text-white">Sign in with</span>
            <hr className="flex-grow-1 line" />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <img src="publicAssets/images/linkedin.webp" width={25} alt="LinkedIn" />
            <img src="publicAssets/images/instagram.webp" width={25} alt="Instagram" />
            <img src="publicAssets/images/search.webp" width={25} alt="Google" />
          </div>
        </div>
      </div>
    </div>
  );
};
