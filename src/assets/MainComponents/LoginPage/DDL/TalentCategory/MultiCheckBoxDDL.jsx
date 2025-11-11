
import { MultiSelect } from "react-multi-select-component";

export const MultiCheckBoxDDL = (props) => {
    const { WardIDData, setWardIDData, setSelected, selected } = props;

    const staticData = [
        { wardName: "Actor", m_WardID: 1 },
        { wardName: "Model", m_WardID: 2 },
        { wardName: "Dancer", m_WardID: 3 },
        { wardName: "Singer", m_WardID: 4 }
    ];

    const options = staticData.map(i => ({
        label: i.wardName,
        value: i.m_WardID
    }));

    const handleChange = (e) => {
        if (e && e.length > 0) {
            setSelected(e);
            setWardIDData(e.map(i => i.value));
        } else {
            setSelected([]);
            setWardIDData([]);
        }
    };

    return (
        <div>
            <MultiSelect
                options={options}
                value={selected}
                onChange={(e) => handleChange(e)}
                labelledBy="Select..."
            />
        </div>
    );
};

