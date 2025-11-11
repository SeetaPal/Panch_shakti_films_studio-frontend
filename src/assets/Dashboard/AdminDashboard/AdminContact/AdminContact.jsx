import { AdminHeader } from "../AdminHeader";
import { AdminSidebar } from "../AdminSidebar";
import { ContactContent } from "./ContactContent";

export const AdminContact = () => {
    return (
        <div className="d-flex p-2">
            <AdminSidebar />

            <div className="ps-4  pe-3 w-100">
                <AdminHeader />
                <ContactContent />
            </div>

        </div>
    );
};
