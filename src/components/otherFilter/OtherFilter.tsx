import React, { useState } from "react"
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
    const [friends, setFrieds] = useState(false)
    const [returns, setReturns] = useState(false);

    const handleClear = () => {
        setFrieds(false);
        setReturns(false)
    }
    return (
        <Modal show={show} title={"Другие фильтры"} onClose={close}>
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <div className={styles.title}>Мои друзья</div>
                    <div className={styles.wrapper}>
                        <div className={styles.descript}>
                            Показать туры, которые недавно забронировали друзья
                        </div>
                        <Switch onChange={()=>{setFrieds(!friends)}} checked={friends} />
                    </div>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.filterContainer}>
                    <div className={styles.title}>Только с возвратом</div>
                    <div className={styles.wrapper}>
                        <div className={styles.descript}>
                            Не показывать туры, в которых нет условий возврата
                        </div>
                        <Switch onChange={() => setReturns(!returns)} checked={returns} />
                    </div>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.footerContainer}>
                    <hr className={styles.hr} />
                    <div className={globalStyle.footerModal}>
                        <span className={classnames(globalStyle.unselectable, globalStyle.btnModal)}>Показать</span>
                        <span onClick={handleClear} className={classnames(globalStyle.unselectable, globalStyle.clearModal)}>Очистить всё</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}