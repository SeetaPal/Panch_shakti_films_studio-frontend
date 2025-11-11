import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../CastinAgencyProductionHouseDashboard/HeaderDashboard";

export const Requirement = () => {
    const navigate = useNavigate()
    return (
        <div className="ps-4 p-2 w-100">
            <HeaderDashboard />

            <div className="animate-slide-down w-100 mt-2">
                <div className="row bg-transparent p-3 shadow  main_contain_height rounded_border" >
                    <div className="col-12 Project_Details">
                        <form>
                            <h4 className="actives mb-3"> Casting Agency / Production House Dashboard</h4>
                            {/* <h5 className="mb-3 actives">Project Details</h5> */}
                            <div className="mb-3">
                                <label className="form-label">Project Title</label>
                                <input type="text" className=" form-control input-custom" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Project Description / Synopsis</label>
                                <textarea className=" form-control input-custom" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Production Company</label>
                                <input type="text" className=" form-control input-custom" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Role Name</label>
                                <input type="text" className=" form-control input-custom" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Character Description</label>
                                <textarea className=" form-control input-custom" rows="2" ></textarea>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Age Range</label>
                                    <input type="text" className=" form-control input-custom" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Ethnicity</label>
                                    <input type="text" className=" form-control input-custom" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label d-block">Gender</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="male" value="Male" />
                                        <label className="form-check-label" htmlFor="male">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="female" value="Female" />
                                        <label className="form-check-label" htmlFor="female">Female</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Physical Attributes</label>
                                    <input type="text" className=" form-control input-custom" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Specific Skills</label>
                                <input type="text" className=" form-control input-custom" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Experience</label>
                                <textarea className=" form-control input-custom" rows="2" ></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Special Characteristics</label>
                                <textarea className=" form-control input-custom" rows="2" ></textarea>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Audition Date</label>
                                    <input type="Date" className=" form-control input-custom" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Audition Location</label>
                                    <input type="text" className=" form-control input-custom" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Audition Fees</label>
                                    <input type="text" className=" form-control input-custom" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Shooting Date</label>
                                    <input type="Date" className=" form-control input-custom" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Shooting Location</label>
                                    <input type="text" className=" form-control input-custom" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Shoot Fees</label>
                                    <input type="text" className=" form-control input-custom" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="Male" />
                                    <label className="form-check-label" htmlFor="male">Paid</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="Female" />
                                    <label className="form-check-label" htmlFor="female">Unpaid</label>
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary px-5"
                                    onClick={() => navigate('/DashboardPage')}>Post</button>
                            </div>

                        </form>
                    </div>


                </div>

            </div>

        </div>
    );
};
