import React from "react"
import { options } from "../../api/mock/interests"
import 'antd/dist/antd.css';
import { Select } from 'antd';
import styles from "./mainTravel.module.css"
import "./customantd.css"

const { Option } = Select;
interface IProps {
    handleSelected: (x: string[]) => void;
}
export const Interests: React.FC<IProps> = ({handleSelected}) => {
    return (
        <>
            <Select       
                // prefixCls="ewfewf"
                // onInputKeyDown
                mode="multiple"
                placeholder=""
                defaultValue={["Интересы"]}
                onChange={(x: string[]) => handleSelected(x)}
                optionLabelProp="value"
                style={{width: "100%"}}
                dropdownMenuStyle={{textAlign: "right"}}
            >
                {/* <Option  style={{display: "none"}} key={0}> Интересы </Option> */}
                {options.map((item, index) => (
                    <Option key={index + 1} value={item}> {item} </Option>
                ))}
            </Select>
            <hr className={styles.hr} />
        </>
    )
}