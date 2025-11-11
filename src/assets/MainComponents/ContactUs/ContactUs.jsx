import { Footer } from "../HomePage/Footer"
import { Header } from "../HomePage/Header"
import { AllServices } from "../Services/AllServices"
import { GmailAll } from "./GmailAll"
import { LetsTalk } from "./LetsTalk"
import { Map_Contact } from "./Map_Contact"

export const ContactUs = () => {
    return (
        <div className="row ContactUs">
            <Header active="ContactUs" />
            <Map_Contact />
            <LetsTalk />
            <GmailAll />
            <Footer />
        </div>
    )
}