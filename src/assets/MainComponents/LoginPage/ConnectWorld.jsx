import React from "react";
import { useNavigate } from "react-router-dom";

export const ConnectWorld = () => {
    const Navigate = useNavigate()
    return (


        <div className="login-page2 ">


            <div className="container containers text-center py-5">
                {/* Logo */}

                <div className="">
                    <img onClick={() => Navigate('/')}
                        src="publicAssets/images/logo.webp"
                        alt="PSFS Logo"
                        className="login-logo cursor-pointer"
                        style={{ flexDirection: "row", zIndex: "999" }}
                    />
                </div>
                {/* Welcome */}
                <h2 className="welcome-text pt-5 mt-5  pb-4 fw-lighter" style={{ letterSpacing: "1px" }}>
                    “Bringing Stories to Life <br />
                    – Panch Shakti Films & Studio”
                </h2>

                {/* Tabs */}
                <div className="d-flex justify-content-center align-items-center mb-5">

                    <h2
                        className="welcome-text display-6 pb-4 text-center"
                        style={{ letterSpacing: "1px", textTransform: "uppercase" }}
                    >
                        CONNECTING YOU TO A WORLD
                    </h2>
                </div>


                {/* Form */}

                <button className="btn btn-outline-warning px-4 px-lg-4 m-2 text-white border_line active-tab" 
                 onClick={() => Navigate('/Register')}>
                    I am a Model 
                </button>

                <button className="btn btn-primary  px-4 px-lg-4 m-2 text-white border_line active-tab"
                    onClick={() => Navigate('/CastingAgencyForm')}>
                    I am Casting Director
                </button>

                <button className="btn btn-outline-warning px-4 px-lg-4 m-2 text-white border_line active-tab" 
                 onClick={() => Navigate('/Register')}>
                    I am a Client
                </button>

            </div>
        </div>

    );
};
