import { ModellingContent } from "./ModellingContent";
import { ModellingSidebar } from "./ModellingSidebar";


export const ModellingDashboard = () => {
    return (
        <div className="d-flex p-3">
            <ModellingSidebar />
            <ModellingContent />
        </div>
    );
};
