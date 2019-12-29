import React, { useState } from "react"
import { options } from "../../api/mock/interests"
import 'antd/dist/antd.css';
import { Select } from 'antd';
import globalStyle from "../../core/theme/commonStyle.module.css"

const { Option } = Select;
interface IProps {
    handleSelected: (x: string[]) => void;
}
export const Interests: React.FC<IProps> = ({handleSelected}) => {
    const [selected, setSelected] = useState(["Интересы"]);
    
    const onChange = (x: string[]) => {
        if (!selected.includes("Интересы")){
            setSelected(["Интересы"])
        }
        handleSelected(x);
    }
    return (
        <>
            <Select       
                mode="multiple"
                placeholder=""
                defaultValue={["Интересы"]}
                onChange={(x: string[]) => onChange(x)}
                optionLabelProp="value"
                style={{width: "100%"}}
                dropdownMenuStyle={{textAlign: "right"}}
            >
                {/* <Option  style={{display: "none"}} key={0}> Интересы </Option> */}
                {options.map((item, index) => (
                    <Option key={index + 1} value={item}> {item} </Option>
                ))}
            </Select>
            <hr className={globalStyle.hr} />
        </>
    )
}