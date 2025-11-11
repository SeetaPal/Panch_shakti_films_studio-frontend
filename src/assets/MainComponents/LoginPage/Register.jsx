import { useNavigate } from "react-router-dom";

export const Register = () => {
    const Navigate = useNavigate();

    return (
        <div className="register-page d-flex justify-content-center align-items-center py-5">
            <div className="container containers">
                <div className="register-box mx-auto">
                    {/* Logo */}
                    <div className="text-center">
                        <img
                            src="Assets/Images/2.png"
                            alt="PSFS Logo"
                            className="login-logo cursor-pointer"
                            onClick={() => Navigate('/')}
                        />
                    </div>

                    {/* Title */}
                    <h2
                        className="welcome-text display-6 pb-4 text-center"
                        style={{ letterSpacing: "1px", textTransform: "uppercase" }}
                    >
                        Register as <span>Talent</span>
                    </h2>

                    {/* Login | Register Toggle */}
                    {/*   <div className="d-flex justify-content-center align-items-center my-4">
                        <button
                            className="btn btn-outline-warning px-4 px-lg-5 text-white border_line"
                            onClick={() => Navigate('/Login')}
                        >
                            Login
                        </button>
                        <div className="vr mx-3 mt-2"></div>
                        <button className="btn btn-outline-warning px-4 px-lg-5 text-white border_line active-tab"
                            onClick={() => Navigate('/Register')}>
                            Register
                        </button>
                     
                             <div className="vr mx-3 mt-2"></div>
                        <button className="btn btn-outline-warning px-4 px-lg-5 text-white border_line active-tab"
                            onClick={() => Navigate('/ConnectWorld')}>
                            ConnectingWorld
                        </button>
                     
                    </div>
                    */}

                    {/* Steps */}
                    <div className="d-flex justify-content-center mb-4">
                        <div className="step-wrapper">
                            <div className="step-circle active-step">1</div>
                            <div className="step-line"></div>
                        </div>
                        <div className="step-wrapper">
                            <div className="step-circle ">2</div>
                            <div className="step-line"></div>
                        </div>
                        <div className="step-wrapper">
                            <div className="step-circle">3</div>
                            <div className="step-line"></div>
                        </div>
                        <div className="step-wrapper">
                            <div className="step-circle">4</div>
                            <div className="step-line"></div>
                        </div>
                        <div className="step-wrapper">
                            <div className="step-circle">5</div>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <h5 className="text-white mb-3 fs-4">Personal Information</h5>
                    <form>
                        <div className="mb-3">
                            <label className="form-label text-white">Full Name</label>
                            <input type="text" className="form-control input-custom" placeholder="Vaibhav Mutta" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Contact Number </label>
                            <input type="tel" className="form-control input-custom" placeholder="7854545454" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Actual Age</label>
                            <input type="text" className="form-control input-custom" placeholder="30" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Screen Age</label>
                            <input type="text" className="form-control input-custom" placeholder="25" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Staying with</label>
                            <input type="text" className="form-control input-custom" placeholder="Parent's" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Current City</label>
                            <input type="text" className="form-control input-custom" placeholder="Pune" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Hometown</label>
                            <input type="text" className="form-control input-custom" placeholder="Pune" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Marital Status</label>
                            <input type="text" className="form-control input-custom" placeholder="Married" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Present Profession</label>
                            <input type="text" className="form-control input-custom" placeholder="Married" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Education</label>
                            <input type="text" className="form-control input-custom" placeholder="BE" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Passport</label>
                            <input type="text" className="form-control input-custom" placeholder="Passport" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Social Media Link</label>
                            <input type="text" className="form-control input-custom" placeholder="Link" />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 continue-btn mt-3 fs-5">
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
