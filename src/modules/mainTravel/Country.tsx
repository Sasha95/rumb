import React from "react"
import "antd/dist/antd.css";
import styles from "./mainTravel.module.css"
import { AutoComplete } from 'antd';


export const Country = () => {
    const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
    return (
        <div>
            <AutoComplete
            style={{ width: 200 }}
            dataSource={dataSource}
            placeholder="try to type `b`"
            filterOption={(inputValue, option) => 
                true
            }
            />
            <hr className={styles.hr} />
        </div>
    )
}