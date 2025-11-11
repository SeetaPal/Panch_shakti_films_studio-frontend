import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Select from 'react-select'

export const ChooseReasonRegister = () => {

    const Navigate = useNavigate()

    const [StateID, setStateID] = useState({
        DDL: [],
        ID: 0,
        Label: "Select...",
    })

    const options = [
        { id: 1, value: '12', label: '(If Your are Casting Director / Production House came here to Hire a Talent Then please select 1st option)' },
        { id: 2, value: '22', label: '(If Your are Model / Actor Actress & etc. came here to search work. Then please select 2nd option)' },
        { id: 3, value: '33', label: '(If Your are Client came here for creating Ad shoot, website & Logo designing & etc. Then please select 3rd option)' },
    ]

    return (

        <div className="row">

            <div className="col-8">
                <label htmlFor="" className="text-start"> Choose Your Reason to Register <span className="golden_color">*</span></label>
                <Select

                    id='StateID'
                    className="mt-3 "
                    isClearable={false}
                    // isRtl={isRtl}
                    isSearchable
                    maxMenuHeight={130}
                    value={{ value: StateID.ID, label: StateID.Label }}
                    onChange={(e) => {
                        e ?
                            setStateID({ ...StateID, ID: e.value, Label: e.label })
                            :
                            setStateID({ ...StateID, ID: 0, Label: "Select..." })

                    }}
                    options={options}

                />
            </div>
        </div>
    )
}