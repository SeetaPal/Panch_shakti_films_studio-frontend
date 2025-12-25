import { useNavigate } from "react-router-dom";

export const ModellingHeader = () => {
    const Navigate = useNavigate()

    return (
        <div className=" w-100">
            <div className="row bg-dark  px-3 pt-2 pb-2  shadows rounded " style={{ paddingBottom: "0px" }}>
                <div className="col-5">
                </div>
                <div className="col-6  d-flex justify-content-end align-items-center">



                    <i className="fa-solid fa-bell px-4 cursor-pointer"></i>
                    <i className="fa-solid fa-gear px-4 cursor-pointer"></i>
                </div>
                <div className="col-1  d-flex justify-content-end">
                    <img src="publicAssets/images/profiles.webp"
                        onClick={() => Navigate('/')} alt="" style={{ height: "35px", width: "35px" }} />
                </div>

            </div>

        </div>
    );
};
