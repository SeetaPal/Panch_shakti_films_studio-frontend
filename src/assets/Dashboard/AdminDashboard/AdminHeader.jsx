import { useNavigate, useSearchParams } from "react-router-dom";

export const AdminHeader = () => {
    const Navigate = useNavigate();

    return (
        <div className="w-100">
            <div className="row px-3 pt-1 pb-1 rounded" style={{ background: "#21252956" }}>
                <div className="col-5">
                    <h5 className="text-white pt-2"> PANCH SHAKTI FILMS & STUDIO</h5>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    {/*  <i className="fa-solid fa-bell px-4 cursor-pointer"></i>
                         <i className="fa-solid fa-gear px-4 cursor-pointer"></i>*/}
                </div>
                <div className="col-1 d-flex justify-content-end">
                    <img
                        src="publicAssets/images/profiles.webp"
                        onClick={() => Navigate("/")}
                        alt="profile"
                        style={{ height: "35px", width: "35px" }}
                    />
                </div>
            </div>
        </div>
    );
};
