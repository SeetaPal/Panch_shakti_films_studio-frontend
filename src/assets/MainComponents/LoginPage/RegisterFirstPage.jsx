import { useNavigate } from "react-router-dom";
import { RegisterPopup } from "./Modal/RegisterPopup";
import { useState } from "react";

export const RegisterFirstPage = () => {
    const Navigate = useNavigate();

    const [showpopup, setshowpopup] = useState(false)
    const handleshowpopup = () => {
        setshowpopup(false)
    }

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
                        Registration  <span>Form</span>
                    </h2>



                    <form>
                        <div className="mb-3">
                            <label className="form-label text-white">First Name <span className="golden_color">*</span> </label>
                            <input type="text" className="form-control input-custom" placeholder=" First Name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Middle Name</label>
                            <input type="text" className="form-control input-custom" placeholder=" Middle Name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white" >Last Name <span className="golden_color">*</span></label>
                            <input type="text" className="form-control input-custom" placeholder=" Last Name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Phone Number <span className="golden_color">*</span></label>
                            <input type="tel" className="form-control input-custom" placeholder=" Phone Number" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">E-mail <span className="golden_color">*</span> </label>
                            <input type="email" className="form-control input-custom" placeholder=" E-mail" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Gender <span className="golden_color">*</span></label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                                <label className="form-check-label" for="radioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                                <label className="form-check-label" for="radioDefault2">
                                    Female
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white" >Username <span className="golden_color">*</span></label>
                            <input type="email" className="form-control input-custom" placeholder=" Username" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Password <span className="golden_color">*</span></label>
                            <input type="text" className="form-control input-custom" placeholder=" Password" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Confirm Password <span className="golden_color">*</span></label>
                            <input type="text" className="form-control input-custom" placeholder="Confirm Password" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label text-white">Website</label>
                            <input type="text" className="form-control input-custom" placeholder="Website Link Here.." />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="" className="text-start pb-3"> Choose Your Reason to Register <span className="golden_color">*</span></label>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                <label className="form-check-label " for="checkDefault">
                                    If Your are Casting Agency / Production House came here to Hire a Talent.<br /> Then please select 1st option.
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="checkChecked" />
                                <label className="form-check-label " for="checkChecked">
                                    If Your are Model / Actor Actress & etc. came here to search work.<br /> Then please select 2nd option.
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="checkChecked1" />
                                <label className="form-check-label gray_olor" for="checkChecked1">
                                    If you are a Client & want us to create Ad shoot, Website & Mobile Application, <br /> 3D Logo & Graphics Designing,  E-commerce & Social Media Management,<br /> Celebrity & PR Management  & etc for you. Then please select 3rd option.
                                </label>
                            </div>

                        </div>


                        {/* <div className="mb-3 row">
                            <label htmlFor="" className="text-start pb-3"> heading <span className="golden_color">*</span></label>

                            <div className="form-check mb-2 col-12 col-lg-4">
                                <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                <label className="form-check-label gray_color" for="checkDefault">
                                    I am a Model
                                </label>
                            </div>

                            <div className="form-check mb-2 col-12 col-lg-4">
                                <input className="form-check-input" type="checkbox" value="" id="checkChecked" />
                                <label className="form-check-label gray_color" for="checkChecked">
                                    I am a Director
                                </label>
                            </div>

                            <div className="form-check mb-2 col-12 col-lg-4">
                                <input className="form-check-input" type="checkbox" value="" id="checkChecked1" />
                                <label className="form-check-label gray_color" for="checkChecked1">
                                    I am a Client
                                </label>
                            </div>

                        </div>
                        */}




                    </form>

                    <button type="button" className="btn btn-primary w-100 continue-btn mt-3 fs-5"
                        onClick={() => setshowpopup(true)}>
                        Submit
                    </button>
                </div>
            </div>
            {
                showpopup ?
                    <RegisterPopup
                        cancelbtn={handleshowpopup}

                    /> :
                    <div></div>

            }
        </div>


    );
};
