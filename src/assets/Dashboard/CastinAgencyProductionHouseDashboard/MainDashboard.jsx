import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from "./HeaderDashboard";

export const MainDashboard = () => {
    const navigate = useNavigate()
    return (
        <div className="ps-4 p-2 w-100">
            <HeaderDashboard />
            <div className="animate-slide-down w-100 mt-3 bg-transparent pt-3 shadow   rounded_border">
                <div className="row px-0" >

                   { /*<div className="col-12 col-md-4 ">
                        <div className="p-3 text-center borders rounded cursor-pointer" onClick={() => navigate('/CurrentPost')}>
                            <h6 className="pt-2">Current Post</h6>
                            <h3 className="pt-2 mb-0">5</h3>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <div className="p-3 text-center borders rounded">
                            <h6 className="pt-2">Previous Post</h6>
                            <h3 className="pt-2 mb-0">1</h3>
                        </div>
                    </div>*/}

                </div>

            </div>

        </div>
    );
};
