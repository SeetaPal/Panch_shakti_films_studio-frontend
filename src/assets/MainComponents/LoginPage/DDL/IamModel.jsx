import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Select from 'react-select'

export const IamModel = () => {

    const Navigate = useNavigate()

    const [StateID, setStateID] = useState({
        DDL: [],
        ID: 0,
        Label: "I am a Model",
    })

    const options = [
        { id: 1, value: '1', label: 'I am a Model' },
  


    ]

    return (

        <div className="">

                {/*<label htmlFor="" className="text-start"> Choose Your Reason to Register</label>*/}
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
    )
}