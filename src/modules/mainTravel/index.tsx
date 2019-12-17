import React from "react"
import { Interests } from "./Interests"
import styles from "./mainTravel.module.css"
import book from "../../resources/book.png"
import location from "../../resources/location.png"
import calnedar from "../../resources/calendar.png"
import { Country } from "./Country"
import { RangeDate } from "./RangeDate"

export const MainTravel = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <div>Путешествуй увлечениями <br /> Планирование активного отдыха стало проще</div>
                <div className={styles.container}>
                    <div className={styles["felx-container1"]}>
                        <div>
                            <img className={styles.image} src={book} alt="interes" />
                        </div>
                        <div className={styles.line} />
                        <div>
                            <img className={styles.image} src={location} alt="location" />
                        </div>
                        <div className={styles.date}>
                            <img className={styles.image} src={calnedar} alt="calendar" />
                        </div>
                    </div>
                    <div className={styles["felx-container2"]}>
                        <Interests />
                        <Country />
                        <div className={styles.range}>
                            <RangeDate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}