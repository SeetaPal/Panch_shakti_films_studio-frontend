export const Footer = () => {
    return (
        <div>

            <div className="row container  p-5 mb-5 Footer-bg " id="">
                <div className="col-12 col-lg-5">
                    <img src="Assets/Images/footer.png" width={280} alt="" />
                    <ul className="mx-0 px-3 gray_color pt-5 mt-3">
                        <li className="cursor-pointer">Privacy Police</li>
                        <li className="cursor-pointer">Terms & Condition</li>
                    </ul>
                </div>

                <div className="col-12 col-lg-3">
                    <h5 className="fw-bold">   Quick Links</h5>

                    <ul className="mx-0 px-3 gray_color pt-3">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer">Our Work</li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div className="col-12 col-lg-4 pt-lg-5" >
                    <h5 className="fw-bold pt-5">Stay Connected</h5>
                    <h6>Follow Us On Social Media:</h6>



                    <div className="row pt-4 hover_img_icon">
                        <div className="col-2">
                            <img src="Assets/Images/linkedin123-01.png" width={30} alt="" />
                        </div>
                        <div className="col-2">
                            <img src="Assets/Images/facebook123-01.png" width={30} alt="" />
                        </div>
                        <div className="col-2">
                            <img src="Assets/Images/youtube123-01.png" width={30} alt="" />
                        </div>
                        <div className="col-2">
                            <img src="Assets/Images/instagram123-01.png" width={30} alt="" />
                        </div>
                        <div className="col-2">
                            <img src="Assets/Images/twitter-01.png" width={30} alt="" />
                        </div>

                    </div>

                </div>

            </div>

            <div className="container pb-5">
                <hr className="all_hr" />
                <h5 className="text-center gray_color pt-3">
                    © 2024 PANCH SHAKTI FILMS & STUDIO | Powered by PANCH SHAKTI FILMS & STUDIO
                </h5>
            </div>
        </div>
    )
}