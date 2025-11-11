import { Footer } from "../HomePage/Footer"
import { Header } from "../HomePage/Header"
import { AllServices } from "./AllServices"

export const Services = () => {

    return (
        <div className="row bg_services">
            <Header active="Services" />
            <AllServices />
            <Footer />
        </div>
    )
}