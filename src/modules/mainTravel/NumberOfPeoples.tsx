import React from "react"
import styles from "./number.module.css"
import { Checkbox } from "../../components/checkbox/Checkbox";
import { Input } from "antd";
import people from "../../resources/people.png"

export const NumberOfPeoples = () => {
    const onChange = (e: any) => {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <div className={styles.member}>
                <Checkbox title={"Я один участник"} onChange={onChange} />
            </div>
            <div>
                <Input
                style={{height: "64px"}}
                    suffix={<div className={styles.container}>
                        <div className={styles.data}>{2}
                    </div>
                        <div className={styles["flex-container"]}>
                            <div>
                                dqwd
                            </div>
                            <div className={styles["horizontal-line"]} >
                                dqwd
                            </div>
                        </div>
                    </div>
                    }
                    prefix={<span className={styles["costom-lable-people"]}>
                    <img style={{paddingRight: "18px"}} src={people} alt="people" />Нас будет</span>}
                />
            </div>
        </>
    )
}