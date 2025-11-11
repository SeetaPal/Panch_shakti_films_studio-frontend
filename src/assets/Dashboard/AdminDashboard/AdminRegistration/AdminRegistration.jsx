import { AdminHeader } from "../AdminHeader";
import { AdminSidebar } from "../AdminSidebar";
import { AdminContent } from "./AdminContent";


export const AdminRegistration = () => {
    return (
        <div className="d-flex p-2">
            <AdminSidebar />

            <div className="ps-4  pe-3 w-100">
                <AdminHeader />
                <AdminContent />
            </div>

        </div>
    );
};
