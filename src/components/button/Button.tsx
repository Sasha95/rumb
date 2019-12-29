import React from "react"
import styles from "./btn.module.css"
import classnames from "classnames"
import globalStyle from "../../core/theme/commonStyle.module.css";

interface IProps {
    onClick: () => void;
}

export const Button: React.FC<IProps> = ({onClick}) => {

    return(
        <div className={classnames(styles.container, globalStyle.unselectable)}>
            <input type="button" className={styles.btn} onClick={onClick} value="Мне повезет" />
        </div>
    )
}