import { Footer } from "../HomePage/Footer";
import { Header } from "../HomePage/Header";

export const PricingPlans = () => {


    return (

        <div className="row ">
            <Header active="" />
            <div className="container padding_top_services pricing-section d-flex flex-column align-items-center justify-content-center min-vh-100 text-center text-light">

                <h2 className="fw-bold mb-5">Choose a right plan for you</h2>

                <div className="row justify-content-center g-4 w-100 px-3">
                    {/* Free Plan */}
                    <div className="col-md-4 p-lg-4">
                        <div className="border-golden pricing-card shadow-lg border-0 h-100">
                            <div className="card-body">
                                <h4 className="fw-bold">Single Model</h4>
                                <p className="text-gray">Text Here...................</p>
                                <h2 className="price fw-bold">RS. 700 </h2>
                                <p className="golden_color mb-0" style={{ fontSize: '13px', }}>+18% GST </p>
                                <h6 className="mt-3 mb-2 fw-bold">What You Get</h6>
                                <ul className="list-unstyled">
                                    <li>✔ 1</li>
                                    <li>✔ 2</li>
                                    <li>✔ 3</li>
                                </ul>
                                <button className="btn golden_color btn-outline-warning w-100">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {/* Startup Plan */}
                    <div className="col-md-4 p-lg-4">
                        <div className=" border-golden pricing-card shadow-lg border-0 h-100 highlight-plan">
                            <div className="card-body">
                                <h4 className="fw-bold">5 Models</h4>
                                <p className="text-gray">Text Here...................</p>
                                <h2 className="price fw-bold">Rs. 1500 <span className="fs-6">/Month</span></h2>
                                <p className="golden_color mb-0" style={{ fontSize: '13px', }}>+18% GST </p>
                                <h6 className="mt-3 mb-2 fw-bold">What You Get</h6>
                                <ul className="list-unstyled">
                                    <li>✔ 1</li>
                                    <li>✔ 2</li>
                                    <li>✔ 3</li>
                                </ul>
                                <button className="btn btn-primary  fw-bold w-100">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {/* Growth Plan */}
                    <div className="col-md-4 p-lg-4">
                        <div className="border-golden pricing-card shadow-lg border-0 h-100">
                            <div className="card-body">
                                <h4 className="fw-bold">10 Models</h4>
                                <p className="text-gray">Text Here...................</p>
                                <h2 className="price fw-bold">Rs. 2000 <span className="fs-6">/Month</span></h2>
                                <p className="golden_color mb-0" style={{ fontSize: '13px', }}>+18% GST </p>
                                <h6 className="mt-3 mb-2 fw-bold">What You Get</h6>
                                <ul className="list-unstyled">
                                    <li>✔ 1</li>
                                    <li>✔ 2</li>
                                    <li>✔ 3</li>
                                </ul>
                                <button className="btn btn-outline-warning golden_color w-100">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    );
};

