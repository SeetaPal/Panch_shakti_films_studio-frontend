import React from "react";
import { Header } from "../../HomePage/Header";
import { Footer } from "../../HomePage/Footer";
import CastingCallPage from "./CastingCallPage";

export default function CastingCalls() {
    return (

        <div className="row bg_services1">
            <Header active="Services" />
            <CastingCallPage />
            <Footer />
        </div>


    );
}
