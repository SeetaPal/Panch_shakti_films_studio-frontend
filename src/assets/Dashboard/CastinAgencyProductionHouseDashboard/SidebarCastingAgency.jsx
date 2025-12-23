import React from "react";
import { NavLink } from "react-router-dom";

export const SidebarCastingAgency = () => {
  return (
    <div className="d-flex flex-column p-3 bg_sidebar shadows" style={{ width: "250px" }}>
      <div className=" d-flex align-items-center justify-content-center" style={{ flexDirection: "column" }}>
        <div className="text-center profile-border shadow">
          <img
            src="Assets/Images/videoEditingPostProduction.webp"
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
            to="/CastingAgencyDashboardPage"
            className={({ isActive }) =>
              isActive ? "nav-link active2 px-0" : "px-0 nav-link text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/CastinAgencyProductionHouse"
            className={({ isActive }) =>
              isActive ? "nav-link active2 px-0" : "px-0 nav-link text-white"
            }
          >
          Casting Agency
          </NavLink>
        </li>




      </ul>
    </div>
  );
};
