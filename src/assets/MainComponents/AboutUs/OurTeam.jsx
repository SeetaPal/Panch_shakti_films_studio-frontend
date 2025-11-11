import { APPDeveloper } from "./APPDeveloper"
import { Founder } from "./Founder"
import { GraphicsDesigner } from "./GraphicsDesigner"
import { PersonalAccount } from "./PersonalAccount"
import { SoftwareDeveloper } from "./SoftwareDeveloper"
import { UIUXDesigner } from "./UIUXDesigner"
import { WebDeveloper } from "./WebDeveloper"

export const OurTeam = () => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="fw-bold text-center Services_main display-5">Our Teams</h1>
                    <h4 className="text-center"><span className="golden_color">Meet the Visionaries</span>  Behind the Lens</h4>
                </div>

                <Founder />
                <PersonalAccount />
                <WebDeveloper />
                <UIUXDesigner />
                <GraphicsDesigner />
                <APPDeveloper />
                <SoftwareDeveloper />



            </div>
        </div>
    )
}