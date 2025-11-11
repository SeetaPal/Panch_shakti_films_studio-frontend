import { AdminHeader } from "../AdminHeader";
import { AdminSidebar } from "../AdminSidebar";
import { AdminPricingPlanContent } from "./AdminPricingPlanContent";

export const AdminPricingPlan = () => {
    return (
        <div className="d-flex p-2">
            <AdminSidebar />

            <div className="ps-4  pe-3 w-100">
                <AdminHeader />
                <AdminPricingPlanContent />
            </div>

        </div>
    );
};
