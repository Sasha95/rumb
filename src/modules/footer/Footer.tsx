import React from "react"
import styles from "./footer.module.css"

export const Footer = () => {
    return(
        <div className={styles.wrapper}>
            <span className={styles.btn}>Got it</span>
            <span className={styles.text}>Cookies help us deliver our services. By using our services, you agree to our use of cookies.</span>
        </div>
    )
}