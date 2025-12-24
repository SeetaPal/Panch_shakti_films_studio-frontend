import React from "react";

export const RequirementForm = () => {
    return (
        <div className="container my-4">
            {/* Header Section */}
            <div className="d-flex align-items-center mb-3 p-3 borders rounded shadow-sm">
                <div className="me-3">
                    <div className=" rounded" >
                        <img src="Assets/images/logo.webp" alt="Panch Shakti Logo" width={150} />
                    </div>

                </div>
                <div>
                    <h3 className="fw-bold">Company Name</h3>
                    <button className="btn btn-sm mt-2 text-white" style={{ background: "#eb3324" }}>
                        Post Your Requirement
                    </button>
                </div>
            </div>

            {/* Form Section */}
            <div className="borders rounded p-4 shadow-sm">
                <form>
                    {/* Production House Name */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">
                            Production House Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter production house name" />
                    </div>

                    {/* Description */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Description</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter description"></textarea>
                    </div>

                    {/* Shoot Dates */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Start Date</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-semibold">End Date</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter location" />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary px-5">
                            Submit Post
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};
