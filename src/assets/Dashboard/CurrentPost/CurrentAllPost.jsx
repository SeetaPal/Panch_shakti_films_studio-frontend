import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../CastinAgencyProductionHouseDashboard/HeaderDashboard";
import { Actor } from "../../MainComponents/LoginPage/DDL/Actor";
import { Location } from "../../MainComponents/LoginPage/DDL/Location";
import { Gender } from "../../MainComponents/LoginPage/DDL/Gender";
import { IntegerSchema } from "firebase/ai";

export const CurrentAllPost = () => {
    const navigate = useNavigate()
    const cardData = [
        {
            id: 1,
            category: "Actor",
            title: "Looking For Lead Female Actors For A New Series Shoot",
            ProductionCompany: "Ag Production Unit",
            CompanyLogo: "Assets/Images/dharma_products.jpg",
            AgencyName: 'Production house',
            CharacterDescription: 'Required lead female actors for a new series.',
            RoleName: "...",
            AgeRange: " 18 to 44 years",
            Ethnicity: '...',
            Gender: 'Female',
            PhysicalAttributes: '...',
            SpecificSkills: '...',
            Experience: "",
            SpecialCharacteristics: "",
            AuditionDate: "",
            AuditionLocation: "",
            ShootingDate: "",
            ShootingLocation: "",
            AuditionFee: "",
            ShootPayment: "",

            // ReadMoreBtn: "Read More",
            // path: "/CastingCalls"
        },
    ]
    return (
        <div className="ps-4 p-2 w-100">
            <HeaderDashboard />

            <div className="animate-slide-down  w-100 mt-2">
                <div className="row bg-transparent p-3 shadow  main_contain_height rounded_border" >

                    <div className="col-12 Project_Details">

                        {/* Header */}
                        <h3 className="mb-3">Actor Casting Calls In Pune</h3>
                        <p className="text-white">
                            Looking for acting casting calls for actors for Bollywood movies, theatre projects, featured films,
                            TV serials, web series, ad films, reality shows, short films, OTT platforms, and live shows in Pune?
                            Apply now for upcoming shoots, pilot episodes, season premieres, and more!
                        </p>

                        {/* Search Section */}
                        {/*    <div className=" pt-3  mb-5">
                            <div className="row g-2">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Search by keywords..."
                                    />
                                </div>
                                <div className="col-md-2">
                                    <Actor />

                                </div>
                                <div className="col-md-2">
                                    <Location />
                                </div>
                                <div className="col-md-2">
                                    <Gender />
                                </div>
                            </div>
                        </div>

                        {/* Casting Cards */}
                        {cardData.map((item) => (
                            <div className="casting-card Footer-bg p-4 mb-5 mt-5">
                                <div className="row" key={item.id}>
                                    <div className="col-md-8">
                                        <span className="badge bg-dark me-2">{item.category}</span>
                                        <h5>{item.title}</h5>
                                        <p className="gray_color small mb-1">Posted on: Jan 8, 2025 | Expires: June 8, 2026</p>
                                        <p className="mb-1">{item.CharacterDescription} </p>

                                        <div className="row">
                                            <div className="col-6  ">
                                                <p className="mb-1">Role Name: {item.RoleName}</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-1">Age Range: {item.AgeRange}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6  ">
                                                <p className="mb-1">Ethnicity: {item.Ethnicity}</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="mb-1">Gender: {item.Gender}</p>
                                            </div>
                                        </div>

                                        <p className="mb-1">Physical Attributes: {item.PhysicalAttributes}</p>
                                        <p className="mb-1">Specific Skills: {item.SpecificSkills}</p>
                                        <p className="mb-1">Experience: {item.Experience}</p>
                                        <p className="mb-1">Special Characteristics: {item.SpecialCharacteristics}</p>

                                        <div className="row">
                                            <div className="col-4  ">
                                                <p className="mb-1">Audition Date: {item.AuditionDate}</p>

                                            </div>
                                            <div className="col-4">
                                                <p className="mb-1">Audition Location: {item.AuditionLocation}</p>

                                            </div>
                                            <div className="col-4">
                                                <p className="mb-1">Audition Fee: {item.AuditionFee}</p>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4  ">
                                                <p className="mb-1">Shooting Date: {item.ShootingDate}</p>

                                            </div>
                                            <div className="col-4">
                                                <p className="mb-1">Shooting Location: {item.ShootingLocation}</p>

                                            </div>
                                            <div className="col-4">
                                                <p className="mb-1">Shoot Payment: {item.ShootPayment}</p>

                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col-1  ">
                                                <img
                                                    src={item.CompanyLogo}
                                                    alt={item.title}
                                                    className="img-fluid"
                                                    width={50}
                                                />

                                            </div>
                                            <div className="col-6">
                                                <p className="fw-bold mb-0">{item.ProductionCompany} </p>
                                                <p className=" mb-0 gray_color">{item.AgencyName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 border-start1 d-flex flex-column justify-content-center p-lg-5">
                                        <div>
                                            <h6>Lead Female Actors For A New Series Shoot</h6>
                                            <p className="small mb-1">Female, 18 - 44Yrs</p>
                                            <p className="small">Actor</p>
                                            <button className="btn btn-primary btn-sm">Apply</button>
                                        </div>
                                        <div className="pt-4">
                                            <h6>Audtion For Male And Female Actors For Independent Feature Film</h6>
                                            <p className="small mb-1">Female, 18 - 44Yrs</p>
                                            <p className="small">Actor</p>
                                            <button className="btn btn-primary btn-sm">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>



                </div>

            </div>

        </div>
    );
};
