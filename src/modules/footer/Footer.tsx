import React, { useState } from "react"
import styles from "./footer.module.css"
import classnames from "classnames"
import globalStyle from "../../core/theme/commonStyle.module.css";

export const Footer = () => {
    const [show, setShow] = useState(true);
    return (
        show ?
            <div className={styles.wrapper}>
                <span className={classnames(styles.btn, globalStyle.unselectable)} onClick={() => { setShow(false) }}>Got it</span>
                <span className={styles.text}>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span>
            </div>
            : null
    )
}