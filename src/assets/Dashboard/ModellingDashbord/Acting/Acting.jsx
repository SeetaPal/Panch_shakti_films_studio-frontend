import { ModellingContent } from "../ModellingContent";
import { ModellingSidebar } from "../ModellingSidebar";
import { ActingContent } from "./ActingContent";

export const Acting = () => {
    return (
        <div className="d-flex p-3">
            <ModellingSidebar />
            <ActingContent />
        </div>
    );
};
