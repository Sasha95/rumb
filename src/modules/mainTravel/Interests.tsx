import React from "react"
import { options } from "../../api/mock/interests"
import 'antd/dist/antd.css';
import { Select } from 'antd';
import styles from "./mainTravel.module.css"
import "./customantd.css"

const { Option } = Select;

export const Interests = () => {
    const handleChange = (item: string) => {
        console.log(item);
    }

    return (
        <>
            <Select
                mode="multiple"
                placeholder=""
                defaultValue={"Интересы"}
                onChange={handleChange}
                optionLabelProp="value"
                style={{width: "100%"}}
                dropdownMenuStyle={{textAlign: "right"}}
            >
                <Option style={{display: "none"}} key={0}> Интересы </Option>
                {options.map((item, index) => (
                    <Option key={index + 1} value={item}> {item} </Option>
                ))}
            </Select>
            <hr className={styles.hr} />
        </>
    )
}