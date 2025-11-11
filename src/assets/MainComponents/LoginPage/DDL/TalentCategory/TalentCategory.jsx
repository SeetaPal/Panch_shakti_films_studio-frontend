import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { MultiCheckBoxDDL } from "./MultiCheckBoxDDL";


export const TalentCategory = () => {
    const Navigate = useNavigate()

    const [WardIDData, setWardIDData] = useState([]);
    const [selected, setSelected] = useState([]);


    return (
        <div>



            <div className="row">

                <div className="col-12">
                    <label className="form-label fw-semibold">TalentCategory</label>
                    <MultiCheckBoxDDL
                        WardIDData={WardIDData}
                        setWardIDData={setWardIDData}
                        selected={selected}
                        setSelected={setSelected}
                    />

                </div>

                {/* <div className="col-lg-12">
                    <h1>Select Fruits</h1>
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />
                </div> */}
            </div>



        </div>
    )
}