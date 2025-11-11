import { Footer } from "../../HomePage/Footer"
import { Header } from "../../HomePage/Header"
import { TypesOfShoots } from "./TypesOfShoots"


export const OpenPhotosPage = () => {

    return (
        <div className="row bg_services container">
            <Header active="Services" />
            <TypesOfShoots />
            <Footer />
        </div>
    )
}