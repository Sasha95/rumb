import React from "react"
import styles from "./requires.module.css"
import { ICard } from "../../../../api/dto/Card"
import { Moment } from "moment"

interface IProps {
    selected: ICard;
    date: Moment;
    title?: string;
}

export const Day: React.FC<IProps> = ({selected, date, title=`День прибытия ${date.format('dddd')}`}) => {
    return (
        <div className={styles.container}>
            <div className={styles.dayContainer}>
                <div className={styles.day}>{date.format('MMM')}</div>
                <div className={styles.day}>{date.format('D')}</div>
            </div>
            <div className={styles.dateTimeContainer}>
                <div className={styles.dayTitle}>{title}</div>
                <div className={styles.timeTitle}>{selected.adress.timeStart}</div>
            </div>
        </div>
    )
}