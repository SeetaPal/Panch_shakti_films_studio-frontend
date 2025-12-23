import { useNavigate } from "react-router-dom";

export const HeaderDashboard = () => {
    const Navigate = useNavigate()

    return (
        <div className=" w-100">
            <div className="row bg-dark  px-3 pt-3  shadows rounded " style={{ paddingBottom: "0px" }}>
                <div className="col-5">
                </div>
                <div className="col-6  d-flex justify-content-end align-items-center">


                    <button type="button" className="btn text-white position-relative"
                        onClick={() => Navigate('/CurrentPost')}>
                        Current Post
                        <span className="position-absolute top-10 start-99 translate-middle badge btn-primary">
                            5+
                        </span>
                    </button>


                    <button type="button" className="btn text-white position-relative">
                        Previous Post
                        <span className="position-absolute top-10 start-99 translate-middle badge   btn-primary">
                            1+
                        </span>
                    </button>

                    <i className="fa-solid fa-bell px-4 cursor-pointer"></i>
                    <i className="fa-solid fa-gear px-4 cursor-pointer"></i>
                </div>
                <div className="col-1  d-flex justify-content-end">
                    <img src="Assets/Images/profiles.webp"
                        onClick={() => Navigate('/')} alt="" style={{ height: "35px", width: "35px" }} />
                </div>

            </div>

        </div>
    );
};
