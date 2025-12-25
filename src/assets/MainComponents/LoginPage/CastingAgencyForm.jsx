import { useNavigate } from "react-router-dom";

export const CastingAgencyForm = () => {
    const Navigate = useNavigate();

    return (
        <div className="register-page d-flex justify-content-center align-items-center py-5">
            <div className="container containers">
                <div className="register-box mx-auto">
                    {/* Logo */}
                    <div className="text-center">
                        <img
                            src="publicAssets/images/logo.webp"
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
                        Casting Agency  <span>Talent</span>
                    </h2>



                    {/* Personal Information */}
                    {/* <h5 className="text-white mb-3 fs-4">Personal Information</h5>*/}
                    <form>
                        <div className="mb-3">
                            <label className="form-label text-white">Your Legal Name</label>
                            <input type="text" className="form-control input-custom" placeholder="Your Legal Name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Your Legal Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control input-custom" placeholder="Your Legal Name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Address<span className="text-danger">*</span></label>
                            <input type="text" className="form-control input-custom" placeholder="Address" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Contact Number <span className="text-danger">*</span></label>
                            <input type="text" className="form-control input-custom" placeholder="Contact Number" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Website Link<span className="text-danger">*</span></label>
                            <input type="text" className="form-control input-custom" placeholder="Website Link" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Aadhaar Card</label>
                            <input type="text" className="form-control input-custom" placeholder="Aadhaar Card" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">PAN Number</label>
                            <input type="text" className="form-control input-custom" placeholder="PAN Number" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">GST Number</label>
                            <input type="text" className="form-control input-custom" placeholder="GST Number" />
                        </div>


                        <button type="submit" className="btn btn-primary w-100 continue-btn mt-3 fs-5">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
