export const LetsTalk = () => {
    return (

        <div className="row container py-5">
            <div className="col-12 col-md-5 py-5">

                <div className="row">
                    <div className="col-1  px-0">
                        <img src="Assets/Images/location.webp" width={250} alt="" srcset="" /> </div>
                    <div className="col-9 ">
                        <h2 className=""> Address</h2>
                        <p className=" pt-3 gray_color ">
                            <span className="fw-bold golden_color fs-5"> PANCH SHAKTI </span> <br /> Panchtirth Annex, B – 403 Opp. Gopinath Munde Vyayamshala, Nr. V.I.I.T College, Kondhwa (BK), Pune – 411048 ( Maharashtra )</p>

                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-1  px-0">
                        <img src="Assets/Images/call.webp" width={250} alt="" srcset="" /> </div>
                    <div className="col-9 ">
                        <h2 className=""> Contact</h2>
                        <p className="pe-lg-5 pt-3">
                            <a href="tel:+918888868698" className="gray_color">+91 8888 8686 98</a>
                        </p>
                    </div>
                </div>

            </div>


            <div className="col-12 col-md-7 pb-5 ">

                <h2 className="text-white">  Let's <span className="golden_color">Talk</span> </h2>
                <p className="gray_color">
                    Our team is here round-the-clock. <br />
                    ready to respond to all your inquiries</p>

                <div className="mb-3">
                    <label className="form-label text-white">Full Name</label>
                    <input type="text" className="form-control input-custom" placeholder="Enter Full Name Here..." />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white">Phone Number</label>
                    <input type="tel" className="form-control input-custom" placeholder="Enter Phone Number..." />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white">Email</label>
                    <input type="email" className="form-control input-custom" placeholder="Enter Email Here..." />
                </div>


                <div className="mb-3">
                    <label className="form-label text-white">Write your comments</label>
                    <input type="text" className="form-control input-custom" placeholder="Enter Your Comments..." />
                </div>


                <button type="submit" className="btn btn-primary w-100 continue-btn mt-3 fs-5">
                    Submit
                </button>

            </div>
        </div>
    )
}