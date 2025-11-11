import React, { useState } from "react";
import { Location } from "../../LoginPage/DDL/Location";
import { CommonDDL } from "../../LoginPage/DDL/TalentCategory/CommonDDL";
export const LeftFilter = () => {

  const [minAge, setMinAge] = useState(20);
  const [maxAge, setMaxAge] = useState(40);

  const handleMinChange = (e) => {
    let value = Math.min(Number(e.target.value), maxAge - 1);
    setMinAge(value);
  };

  const handleMaxChange = (e) => {
    let value = Math.max(Number(e.target.value), minAge + 1);
    setMaxAge(value);
  };


  return (
    <div
      className="p-3 text-light"
      style={{ width: "260px", backgroundColor: "#000" }}
    >
      {/* Hide Filters */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h6 className="text-uppercase m-0 fw-bold golden_color"> Filters</h6>
        <i className="bi bi-chevron-up text-light"></i>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control bg-black input-custom"
          placeholder="Search"
        />
      </div>

      {/* Age Filter */}
      <div className="mb-4">
        {/* Label + Current values */}
        <div className="d-flex justify-content-between align-items-center">
          <label className="form-label fw-semibold text-light mb-1">Age</label>
          <span className="golden_color ">
            {minAge} - {maxAge}
          </span>
        </div>

        {/* Slider */}
        <div className="range-slider">
          <div className="slider-track"></div>
          <div
            className="slider-range"
            style={{
              left: `${((minAge - 10) / (50 - 10)) * 100}%`,
              right: `${100 - ((maxAge - 10) / (50 - 10)) * 100}%`,
            }}
          ></div>

          <input
            type="range"
            min="10"
            max="50"
            value={minAge}
            onChange={handleMinChange}
            className="thumb thumb-left"
          />
          <input
            type="range"
            min="10"
            max="50"
            value={maxAge}
            onChange={handleMaxChange}
            className="thumb thumb-right"
          />
        </div>

        {/* Number scale below */}
        <div className="d-flex justify-content-between small text-muted mt-2">
          {Array.from({ length: 6 }, (_, i) => 0 + i * 10).map((num) => (
            <span className="text-gray" key={num}>{num}</span>
          ))}
        </div>
      </div>
      {/* Gender */}
      <div className="mb-4">
        <label className="form-label fw-semibold">Gender</label>
        <div className="d-flex gap-3">
          <div className="form-check">
            <input
              type="radio"
              name="gender"
              id="male"
              className="form-check-input  input-custom"
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="gender"
              id="female"
              className="form-check-input  input-custom"
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="gender"
              id="all"
              className="form-check-input  input-custom"
            />
            <label htmlFor="all" className="form-check-label">
              All
            </label>
          </div>
        </div>
      </div>

      {/* City */}
      <div className="mb-4">
        <label className="form-label fw-semibold">City</label>
        <Location />
      </div>

      {/* Talent Categories */}
      <div className="mb-4">
        <label className="form-label fw-semibold">TalentCategory</label>

        {/*<TalentCategory />*/}
        <CommonDDL />
      </div>

      {/* Languages */}
      <div className="mb-4">
        {/*<h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-black text-light border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#languages"
            >
              Languages
            </button>
          </h2>*/}
        <label className="form-label fw-semibold">Languages</label>

        <CommonDDL />
      </div>

      {/* Shortlisted Models */}
      <div className="mt-4">
        <button className="btn  input-custom golden_color w-100 btn-sm mt-3" style={{ height: "51px" }}>
          ❤️ Shortlisted Models
        </button>
      </div>
    </div>
  );
};
