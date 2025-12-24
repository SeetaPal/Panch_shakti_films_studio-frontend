import { Footer } from "../../HomePage/Footer"
import { Header } from "../../HomePage/Header"
import { DiscriptionInfoReview } from "./DiscriptionInfoReview"
import { imagesVideos } from "./imagesVideos"
import { ModellingHerosection } from "./ModellingHerosection"
import { ModellingPersonalInfo } from "./ModellingPersonalInfo"
import { ModellingSecondPara } from "./ModellingSecondPara"
import { SimilarModels } from "./SimilarModels"


export const CastingAndModelling = () => {

    return (
        <div className="row  " onLoad={() => window.scrollTo(0, 0)}>
            <Header active="Services" />
            <ModellingHerosection />
            <ModellingSecondPara />
            <imagesVideos />
            {/*<ModellingPersonalInfo />*/}
            <DiscriptionInfoReview />
            <SimilarModels />
            <Footer />
        </div>
    )
}