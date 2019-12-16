import React from "react"
import { options } from "../../api/mock/interests"
import 'antd/dist/antd.css';
import { Select } from 'antd';
import styles from "./mainTravel.module.css"

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
            >
                <Option key={0}> <span >Интересы</span> </Option>
                {options.map((item, index) => (
                    <Option key={index + 1} value={item}> {item} </Option>
                ))}
            </Select>
            <hr className={styles.hr} />
        </>
    )
}