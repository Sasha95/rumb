import React from "react"
import styles from "./btn.module.css"

interface IProps {
    onClick: () => void;
}

export const Button: React.FC<IProps> = ({onClick}) => {

    return(
        <div className={styles.container}>
            <input type="button" className={styles.btn} onClick={onClick} value="Мне повезет" />
        </div>
    )
}