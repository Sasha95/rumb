import React from "react"
import classNames from "classnames";
import styles from "./modal.module.css"
const close = require("../../resources/close.svg");

interface Title {
    title: string;
    show: boolean;
    onClose: () => void;
}

export const Modal: React.FC<Title> = ({ title, show, onClose, children }) => {
    const display = classNames(styles.modal, { [styles["display-block"]]: show }, { [styles["display-none"]]: !show });
    return (
        <div className={display}>
            <section className={styles["modal-main"]}>
                <div className={styles.containter}>
                    <img className={styles.close} onClick={onClose} src={close} alt="close" />
                    <span className={styles.title}>{title}</span>
                </div>
                <hr className={styles.hr} />
            {children}
            </section>
        </div>
    )
}