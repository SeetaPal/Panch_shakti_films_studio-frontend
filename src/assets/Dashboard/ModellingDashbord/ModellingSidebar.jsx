import { NavLink } from "react-router-dom";

export const ModellingSidebar = () => {
    return (
        <div className="d-flex flex-column p-3 bg_sidebar shadows" style={{ width: "250px" }}>
            <div className=" d-flex align-items-center justify-content-center" style={{ flexDirection: "column" }}>
                <div className="text-center profile-border shadow">
                    <img
                        src="Assets/Images/Video Editing & Post-Production.jpg"
                        alt="Logo"
                        style={{ width: "130px", height: "130px", borderRadius: "100px" }}
                        className="text-center"
                    />
                </div>
                <div className="text-center">
                    <h6 className="mb-0 fw-bold pt-4">Rakesh Pawar</h6>
                </div>
            </div>

            <hr />
            <ul className="nav flex-column">


                <li className="">
                    <NavLink
                        to="/Acting"
                        className={({ isActive }) =>
                            isActive ? "nav-link active2 px-0" : "px-0 nav-link text-white"
                        }
                    >
                        Acting
                    </NavLink>
                </li>


                <li className="">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active2 px-0" : "px-0 nav-link text-white"
                        }
                    >
                        Modelling
                    </NavLink>
                </li>


                <li className="">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active2 px-0" : "px-0 nav-link text-white"
                        }
                    >
                        Ad-Shoot
                    </NavLink>
                </li>

                <li className="">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active2 px-0" : "px-0 nav-link text-white"
                        }
                    >
                        Director
                    </NavLink>
                </li>

                <li className="">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active2 px-0" : "px-0 nav-link text-white"
                        }
                    >
                        Producer
                    </NavLink>
                </li>


                <li className="">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active2 px-0" : "px-0 nav-link text-white"
                        }
                    >
                        Cameraman
                    </NavLink>
                </li>


            </ul>
        </div>
    );
};
