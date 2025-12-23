import { NavLink } from "react-router-dom";

export const AdminSidebar = () => {
    return (
        <div
            className="d-flex flex-column p-1 bg_sidebar2"
            style={{ width: "250px" }}
        >
            <ul className="nav flex-column">

                <a href="javascript:void(0)" onClick={() => Navigate('/')} className=" text-center pt-1 d-flex justify-content-center">
                    <img src="Assets/Images/logo.webp" alt="Panch Shakti Logo" className="text-center " style={{ width: '100px' }} />
                </a>

                <hr />
                <li className="">
                    <NavLink
                        to="/AdminDashboard?ScreenName=Dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-link active_dashboard px-3" : "px-3 nav-link text-white"
                        }
                    >
                        <i className="fa-solid fa-gauge pe-4"></i> Dashboard
                    </NavLink>
                </li>

                <li className="">
                    <NavLink
                        to="/AdminRegistration?ScreenName=Registration"
                        className={({ isActive }) =>
                            isActive ? "nav-link active_dashboard px-3" : "px-3 nav-link text-white"
                        }
                    >
                        <i className="fa-solid fa-address-card pe-4"></i> Registration
                    </NavLink>
                </li>

                <li className="">
                    <NavLink
                        to="/AdminLogin?ScreenName=Login"
                        className={({ isActive }) =>
                            isActive ? "nav-link active_dashboard px-3" : "px-3 nav-link text-white"
                        }
                    >
                        <i className="fa-solid fa-right-to-bracket pe-4"></i> Login
                    </NavLink>
                </li>

                <li className="">
                    <NavLink
                        to="/AdminContact?ScreenName=Contact"
                        className={({ isActive }) =>
                            isActive ? "nav-link active_dashboard px-3" : "px-3 nav-link text-white"
                        }
                    >
                        <i className="fa-solid fa-address-book pe-4"></i> Contact
                    </NavLink>
                </li>

                
                <li className="">
                    <NavLink
                        to="/AdminPricingPlan?ScreenName=Pricing Plan"
                        className={({ isActive }) =>
                            isActive ? "nav-link active_dashboard px-3" : "px-3 nav-link text-white"
                        }
                    >
                        <i className="fa-solid fa-address-book pe-4"></i> Pricing Plan
                    </NavLink>
                </li>

                     <li className="">
                    <NavLink
                        to="/AddPlan?ScreenName=Pricing Plan"
                        className={({ isActive }) =>
                            isActive ? "nav-link active_dashboard px-3" : "px-3 nav-link text-white"
                        }
                    >
                        <i className="fa-solid fa-address-book pe-4"></i> Add Plan
                    </NavLink>
                </li>


            </ul>
        </div>
    );
};
