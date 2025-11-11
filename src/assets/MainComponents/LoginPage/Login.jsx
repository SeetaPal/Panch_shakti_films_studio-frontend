import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const Navigate = useNavigate()
    return (


        <div className="login-page ">


            <div className="container containers text-center py-5">
                {/* Logo */}

                <div className="">
                    <img onClick={() => Navigate('/')}
                        src="Assets/Images/2.png"
                        alt="PSFS Logo"
                        className="login-logo cursor-pointer"
                        style={{ flexDirection: "row", zIndex: "999" }}
                    />
                </div>
                {/* Welcome */}
                <h2 className="welcome-text display-5 pb-4 " style={{ letterSpacing: "3px" }}>
                    WEL<span>COME</span>
                </h2>

                {/* Tabs */}
                <div className="d-flex justify-content-center align-items-center mb-5">
                    <button className="btn btn-outline-warning px-4 px-lg-5 text-white border_line">Login</button>
                    <div className="vr mx-3 mt-2"></div>
                    <button className="btn btn-outline-warning px-4 px-lg-5 text-white border_line"
                        onClick={() => Navigate('/RegisterFirstPage')}>Register</button>
                </div>


                {/* Form */}
                <form className="login-form mx-auto">
                    <div className="mb-4 text-start">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control input-custom"
                            placeholder="vaibhav123@gmail.com"
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control input-custom"
                            placeholder="********"
                        />
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember" />
                            <label className="form-check-label" htmlFor="remember">
                                Remember Me
                            </label>
                        </div>
                        <a href="/" className="forgot-link">
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 login-btn fs-5">
                        Login
                    </button>
                </form>

                {/* Social Login */}
                <div className="social-login mt-4">
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <hr className="flex-grow-1 line" />
                        <span className="mx-2">Sign in with</span>
                        <hr className="flex-grow-1 line" />
                    </div>

                    <div className="d-flex justify-content-center gap-3">
                        <img src="Assets/Images/linkedin1.png" width={25} alt="" srcSet="" />
                        <img src="Assets/Images/instagram (1).png" width={25} alt="" srcSet="" />
                        <img src="Assets/Images/search.png" width={25} alt="" srcSet="" />
                        <a href="#"><i className="bi bi-instagram fs-3"></i></a>
                        <a href="#"><i className="bi bi-google fs-3"></i></a>
                    </div>

                </div>

            </div>
        </div>

    );
};
