import { Footer } from "../HomePage/Footer"
import { Header } from "../HomePage/Header"
import { AboutInfo } from "./AboutInfo"
import { CounterUp } from "./CounterUp"
import { HerosectionAbout } from "./HerosectionAbout"
import { OurTeam } from "./OurTeam"
import { VisionMission } from "./VisionMission"

export const AboutUs = () => {
    return (
        <div className="row ">
            <Header active="AboutUs" />
            <HerosectionAbout />
            <AboutInfo />
            <VisionMission />
            <CounterUp />
            <OurTeam />
            <Footer />
        </div>
    )
}