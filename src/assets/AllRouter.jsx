import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./MainComponents/HomePage/HomePage";
import { PrivacyPolicy } from "./MainComponents/HomePage/PrivacyPolicy";

import { Services } from "./MainComponents/Services/Services";
import { AboutUs } from "./MainComponents/AboutUs/AboutUs";
import { Login } from "./MainComponents/LoginPage/Login";
import { Register } from "./MainComponents/LoginPage/Register";
import { ConnectWorld } from "./MainComponents/LoginPage/ConnectWorld";
import { ContactUs } from "./MainComponents/ContactUs/ContactUs";
import { CastingAndModelling } from "./MainComponents/Services/CastingAndModelling/CastingAndModelling";
import { OpenPhotosPage } from "./MainComponents/Services/CastingAndModelling/OpenPhotosPage";
import { CastingAgencyForm } from "./MainComponents/LoginPage/CastingAgencyForm";
import { RegisterFirstPage } from "./MainComponents/LoginPage/RegisterFirstPage";
import CastingCalls from "./MainComponents/Services/CastingAndModelling/CastingCalls";
import { RequirementForm } from "./MainComponents/RequirementForm/RequirementForm";
import { CurrentPost } from "./Dashboard/CurrentPost/CurrentPost";
import { PricingPlans } from "./MainComponents/PricingPlans/PricingPlans";
import CastingAgency from "./MainComponents/Services/CastingAndModelling/CastingAgency";
import { CastinAgencyProductionHouse } from "./Dashboard/CastinAgencyProductionHouseDashboard/CastinAgencyProductionHouse";
import { CastingAgencyDashboardPage } from "./Dashboard/CastinAgencyProductionHouseDashboard/CastingAgencyDashboardPage";
import { ModellingDashboard } from "./Dashboard/ModellingDashbord/ModellingDashboard";
import { Acting } from "./Dashboard/ModellingDashbord/Acting/Acting";
import { ActingAllPost } from "./Dashboard/ModellingDashbord/Acting/ActingAllPost";
import { TalentCategory } from "./MainComponents/LoginPage/DDL/TalentCategory/TalentCategory";
import ContactSection from "./MainComponents/ContactSection";
import { AdminDashboard } from "./Dashboard/AdminDashboard/AdminDashboard";
import { AdminRegistration } from "./Dashboard/AdminDashboard/AdminRegistration/AdminRegistration";
import { AdminLogin } from "./Dashboard/AdminDashboard/AdminLogin/AdminLogin";
import { AdminContact } from "./Dashboard/AdminDashboard/AdminContact/AdminContact";
import { AdminPricingPlan } from "./Dashboard/AdminDashboard/AdminPricingPlan/AdminPricingPlan";
import { AddPlan } from "./Dashboard/AdminDashboard/AdminPricingPlan/AddPlan";

export const AllRouter = () => {

    return (

        <BrowserRouter>
            <Routes>


                <Route path="" element={<HomePage />} />
                <Route path="Services" element={<Services />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="Register" element={<Register />} />
                <Route path="Login" element={<Login />} />
                <Route path="ConnectWorld" element={<ConnectWorld />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />



                <Route path="CastingAndModelling" element={<CastingAndModelling />} />
                <Route path="OpenPhotosPage" element={<OpenPhotosPage />} />
                <Route path="CastingAgencyForm" element={<CastingAgencyForm />} />
                <Route path="RegisterFirstPage" element={<RegisterFirstPage />} />
                <Route path="CastingCalls" element={<CastingCalls />} />
                <Route path="RequirementForm" element={<RequirementForm />} />
                <Route path="CastingAgencyDashboardPage" element={<CastingAgencyDashboardPage />} />
                <Route path="CurrentPost" element={<CurrentPost />} />
                <Route path="ModellingDashboard" element={<ModellingDashboard />} />
                <Route path="PricingPlans" element={<PricingPlans />} />
                <Route path="CastingAgency" element={<CastingAgency />} />
                <Route path="CastinAgencyProductionHouse" element={<CastinAgencyProductionHouse />} />
                <Route path="ActingAllPost" element={<ActingAllPost />} />
                <Route path="Acting" element={<Acting />} />
                <Route path="TalentCategory" element={<TalentCategory />} />
                <Route path="ContactSection" element={<ContactSection />} />
                <Route path="AdminDashboard" element={<AdminDashboard />} />
                <Route path="AdminRegistration" element={<AdminRegistration />} />
                <Route path="AdminLogin" element={<AdminLogin />} />
                <Route path="AdminContact" element={<AdminContact />} />
                <Route path="AdminPricingPlan" element={<AdminPricingPlan />} />
                <Route path="AddPlan" element={<AddPlan />} />


            </Routes>
        </BrowserRouter>

    );
}