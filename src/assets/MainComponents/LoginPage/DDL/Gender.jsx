import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Select from 'react-select'

export const Gender = () => {

    const Navigate = useNavigate()
    const [stateID, setStateID] = useState({
        ID: 0,
        Label: "Gender",
    });

    const options = [
        { id: 1, value: "1", label: "Male"},
        { id: 2, value: "2", label: "Female" },
    ];

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#1a1a1a", // Bootstrap dark background
            borderColor: state.isFocused ? "#b18502" : "#444", // gold on focus
            color: "#fff",
            boxShadow: "none",
            "&:hover": {
                borderColor: "#b18502",
            },
            borderRadius: "8px",
            minHeight: "51px",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#fff",
        }),
        input: (provided) => ({
            ...provided,
            color: "#fff",
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#1a1a1a",
            borderRadius: "8px",
            overflow: "hidden",
            padding: '0px 0px',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#b18502" : "#212529",
            color: state.isFocused ? "#000" : "#fff",
            cursor: "pointer",
        }),
    };
    return (

        <div className="">

            {/*<label htmlFor="" className="text-start"> Choose Your Reason to Register</label>*/}
            <Select
                id="StateID"
                className="w-100"
                isClearable={false}
                isSearchable
                value={{ value: stateID.ID, label: stateID.Label }}
                onChange={(e) => {
                    e
                        ? setStateID({ ...stateID, ID: e.value, Label: e.label })
                        : setStateID({ ...stateID, ID: 0, Label: "Select..." });
                }}
                options={options}
                styles={customStyles}
            />
        </div>
    )
}