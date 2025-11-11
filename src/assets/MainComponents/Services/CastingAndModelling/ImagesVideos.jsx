import { useNavigate } from "react-router-dom";


export const ImagesVideos = () => {
    const Navigate = useNavigate()

    return (

        <div className="row py-5 pe-0 box_shadow personalInfoCss container">


            <div className="col-12 col-md-4 col-lg-3 pt-5 pt-lg-4" style={{ borderRight: "1px solid gray" }}>
                <h6 className="mb-4 fw-lighter text-center">
                    Finish your profile to <span className="golden_color">unlock better search results.</span>
                </h6>

                <div className="progress-wrapper">
                    <div className="progress-circle"></div>
                    <div className="progress-inner">
                        <i className="fas fa-user"></i>
                        <span>80%</span>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 ps-lg-5 pt-5 pt-lg-0 cursor-pointer " onClick={() => Navigate('/OpenPhotosPage')}>
                <img src="Assets/Images/image 1852.png" className="rounded w-100 box_shadow" style={{ height: "150px" }} alt="" />
                <h6 className="pt-4 text-center">Photo's</h6>
            </div>

            <div className="col-12 col-md-4 col-lg-2 ps-lg-5 pt-5 pt-lg-0 cursor-pointer">
                <img src="Assets/Images/PSFS1234.png" className="rounded w-100 box_shadow" style={{ height: "150px" }} alt="" />
                <h6 className="pt-4 text-center">Video's</h6>
            </div>

            <div className="col-12 col-lg-5  ps-lg-5 pt-5 pt-lg-0 hide_contact" >
                {/*  
                <button type="button" className="btn btn-outline float-end fw-lighter py-2">Favorite
                 <i className="fa-solid fa-star"></i></button>
                  */}
                <p>  Phone Number: <span className="ps-3">xxx xxx xx12</span></p>
                <p>  Address: <span className="ps-3">xxxxxxx</span></p>
                <p>  Social Media Link: <span className="ps-3">xxxxxxx</span></p>
                <p>  Address: <span className="ps-3">xxxxxxx</span></p>
                 <button type="button" className="btn btn-outline fw-lighter py-2">Favorite
                 <i className="fa-solid fa-star"></i></button>
            </div>


        </div>
    );
};
