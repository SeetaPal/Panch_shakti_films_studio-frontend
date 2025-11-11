import {SidebarCastingAgency } from "../CastinAgencyProductionHouseDashboard/SidebarCastingAgency";
import { CurrentAllPost } from "./CurrentAllPost";


export const CurrentPost = () => {
    return (
        <div className="d-flex p-3">
            <SidebarCastingAgency />
            <CurrentAllPost/>
        </div>
    );
};
