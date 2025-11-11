import { AdminHeader } from "../AdminHeader";
import { AdminSidebar } from "../AdminSidebar";
import { AddNewPlan } from "./AddNewPlan";

export const AddPlan = () => {
    return (
        <div className="d-flex p-2">
            <AdminSidebar />

            <div className="ps-4  pe-3 w-100">
                <AdminHeader />
                <AddNewPlan />
            </div>

        </div>
    );
};
