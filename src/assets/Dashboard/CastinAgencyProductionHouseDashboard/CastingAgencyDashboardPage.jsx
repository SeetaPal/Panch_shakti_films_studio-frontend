import { MainDashboard } from "./MainDashboard";
import { SidebarCastingAgency } from "./SidebarCastingAgency";

export const CastingAgencyDashboardPage = () => {
    return (
        <div className="d-flex p-3">
            <SidebarCastingAgency />
          
            <MainDashboard />
        </div>
    );
};
