import React from "react"
import styles from "./checkbox.module.css"

interface IProps {
    title: string;
    onChange: (e: any) => void;
}

export const Checkbox: React.FC<IProps> = ({ title, onChange }) => {
    return (
        <div className={styles["form-group"]}>
            <input onChange={onChange} type="checkbox" id="html" />
            <label className={styles.label} htmlFor="html"> {title} </label>
        </div>
    )
}