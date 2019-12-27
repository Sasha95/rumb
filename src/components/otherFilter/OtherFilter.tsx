import React from "react"
import styles from "./otherFilter.module.css"
import globalStyle from "../../core/theme/commonStyle.module.css"
import { Modal } from "../modal/Modal"
import { Switch } from "antd"
import classnames from "classnames";

interface IProps {
    show: boolean;
    close: () => void;
}

export const OtherFilter: React.FC<IProps> = ({ close, show }) => {
    return (
        <Modal show={show} title={"Другие фильтры"} onClose={close}>
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <div className={styles.title}>Мои друзья</div>
                    <div className={styles.wrapper}>
                        <div className={styles.descript}>
                            Показать туры, которые недавно забронировали друзья
                        </div>
                        <Switch />
                    </div>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.filterContainer}>
                    <div className={styles.title}>Только с возвратом</div>
                    <div className={styles.wrapper}>
                        <div className={styles.descript}>
                            Не показывать туры, в которых нет условий возврата
                        </div>
                        <Switch />
                    </div>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.footerContainer}>
                    <hr className={styles.hr} />
                    <div className={styles.footer}>
                        <span className={classnames(globalStyle.unselectable, styles.clear)}>Очистить всё</span>
                        <span className={classnames(globalStyle.unselectable, styles.btn)}>Показать</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}