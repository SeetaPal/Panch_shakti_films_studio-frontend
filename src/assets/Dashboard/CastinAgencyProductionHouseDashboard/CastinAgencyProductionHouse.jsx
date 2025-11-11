
import { Requirement } from "../PostYourRequirement/Requirement";
import { SidebarCastingAgency } from "./SidebarCastingAgency";

export const CastinAgencyProductionHouse = () => {
    return (
        <div className="d-flex p-3">
            <SidebarCastingAgency />
            <Requirement />
        </div>
    );
};
