import { Actor } from "../../LoginPage/DDL/Actor";
import { Gender } from "../../LoginPage/DDL/Gender";
import { IamaClient } from "../../LoginPage/DDL/IamaClient";
import { Location } from "../../LoginPage/DDL/Location";


export default function CastingCallPage() {
    return (

        <div className="container my-4 padding_top_services px-0">

            {/* Header */}
            <h3 className="mb-3">Actor Casting Calls In Pune</h3>
            <p className="text-white">
                Looking for acting casting calls for actors for Bollywood movies, theatre projects, featured films,
                TV serials, web series, ad films, reality shows, short films, OTT platforms, and live shows in Pune?
                Apply now for upcoming shoots, pilot episodes, season premieres, and more!
            </p>

            {/* Search Section */}
            <div className=" pt-3  mb-5">
                <div className="row g-2">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
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

            {/* Sorting */}
            <div className="d-flex justify-content-between align-items-center mb-3 ">
                <span className="fw-bold">Search Projects</span>
                <select className="form-select w-auto">
                    <option>Sort by: Relevant</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                </select>
            </div>

            {/* Casting Cards */}
            <div className="casting-card Footer-bg p-4 mb-5 mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <span className="badge bg-dark me-2">Actor</span>
                        <h5>Looking For Lead Female Actors For A New Series Shoot</h5>
                        <p className="gray_color small mb-1">Posted on: Jan 8, 2025 | Expires: Jan 8, 2026</p>
                        <p>
                            Required lead female actors for a new series. Role - Lead role to act as an investigator.
                            <br /> Age Range - 18 to 44 years <br /> Location - Pune <br />
                            Budget - Based on profile
                        </p>
                        <div className="row pt-2">
                            <div className="col-1  ">
                                 <img src="publicAssets/images/dharmaProducts.webp" alt="Panch Shakti Logo"  width={50}/>
                            </div>
                            <div className="col-6">
                                <p className="fw-bold mb-0"> Ag Production Unit</p>
                                <p className=" mb-0 gray_color">Production house</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 border-start1 d-flex flex-column justify-content-center p-lg-5">
                        <h6>Lead Female Actors For A New Series Shoot</h6>
                        <p className="small mb-1">Female, 18 - 44Yrs</p>
                        <p className="small">Actor</p>
                        <button className="btn btn-primary btn-sm">Apply</button>
                    </div>
                </div>
            </div>

            {/* Example Expired Card */}
            <div className="casting-card p-4 mb-3 Footer-bg">
                <div className="row">
                    <div className="col-md-8">
                        <span className="badge bg-dark me-2">Actor</span>
                        <span className="badge bg-secondary">Model</span>
                        <h5>Casting Call For Sardar Male Actor For Upcoming Big Banner Film Project</h5>
                        <p className="gray_color small mb-1">Posted on: Feb 13, 2024 | <span className="text-danger">Expired</span></p>
                        <p>
                            Casting Call for upcoming Feature Film: Sikh (Sardar) Action Hero. Seeking a dynamic and talented turbaned Sikh actor for a major upcoming feature film.
                        </p>
                        <p className="fw-bold mb-0">Posted by: Anti-casting (Premium Casting Agency)</p>
                    </div>
                    <div className="col-md-4 border-start1 d-flex flex-column justify-content-center">
                        <h6>Male Sardar Actor Required Across India</h6>
                        <p className="small mb-1">Male, 18 - 24Yrs</p>
                        <p className="small">Actor, Model</p>

                        <span className="badge text-danger fs-6">Expired</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
