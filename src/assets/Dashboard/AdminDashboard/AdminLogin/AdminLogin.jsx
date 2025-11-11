import { AdminHeader } from "../AdminHeader";
import { AdminSidebar } from "../AdminSidebar";
import { LoginContent } from "./LoginContent";


export const AdminLogin = () => {
    return (
        <div className="d-flex p-2">
            <AdminSidebar />

            <div className="ps-4  pe-3 w-100">
                <AdminHeader />
                <LoginContent />
            </div>

        </div>
    );
};
