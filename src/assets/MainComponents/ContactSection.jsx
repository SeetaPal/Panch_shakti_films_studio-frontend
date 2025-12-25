const ContactSection = () => {
    return (
        <div className=" my-5">
            <div className="contact-section bg-dark d-flex flex-column flex-lg-row align-items-center px-4">

                {/* Left Text Content */}
                <div className="flex-fill text-center text-lg-start">
                    <p className="text-golden mb-3">Contact Us</p>
                    <h2 className="fw-bold text-white mb-4 display-5">
                        Let’s Discuss About <br /> Your Projects.
                    </h2>
                    <button className="btn btn-primary px-lg-5">Book a Call</button>
                </div>

                {/* Right Image */}
                <div className="flex-fill d-flex justify-content-center mt-4 mt-lg-0">
                    <img
                        src="publicAssets/images/girl.webp" 
                        alt="Contact"
                        className="img-fluid contact-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
