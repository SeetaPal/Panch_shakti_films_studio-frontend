
import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

export const AdminDashboard = () => {
    return (
        <div className="d-flex p-2">
            <AdminSidebar />

            <div className="ps-4  pe-3 w-100">
                <AdminHeader />
            </div>
            
        </div>
    );
};
