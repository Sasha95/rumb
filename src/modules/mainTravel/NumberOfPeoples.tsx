import React, { useState } from "react"
import styles from "./number.module.css"
import { Checkbox } from "../../components/checkbox/Checkbox";
import { Input } from "antd";
import people from "../../resources/people.png"
import up from "../../resources/up.png"
import down from "../../resources/down.png"
import classnames from "classnames"

export const NumberOfPeoples = () => {
    const [count, setCount] = useState(2);
    const [show, setShow] = useState(true);
    const onChange = (e: any) => {        
        if(e.target.checked as boolean){
            setShow(false)
            setCount(1);
        }else(
            setShow(true)
        )
    }

    const counterAdd = () => {
        setCount(count+1);
    }

    const counterЫubtract = () => {
        if(count>1) 
            setCount(count-1)
    }
    const display = classnames(styles.member, {[styles['member-unactive']] : !show });
    return (
        <>
        <div className={styles.content}>
            <div className={display}>
                <Checkbox title={"Я один участник"} onChange={onChange} />
            </div>
            </div>
            {show && <div className={styles.wrapper}>
                <Input
                style={{display: "inline"}}
                    suffix={<div className={styles.container}>
                        <div className={styles.data}>{count}
                    </div>
                        <div className={styles["flex-container"]}>
                            <div onClick={counterAdd} className={styles.image}>
                                <img width={8} height={8} src={up} alt={"up"} />
                            </div>
                            <div className={styles["horizontal-line"]} >
                                <div onClick={counterЫubtract} className={styles.image}> 
                                    <img width={8} height={8} src={down} alt={"down"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    prefix={<span className={styles["costom-lable-people"]}>
                    <img style={{paddingRight: "18px"}} src={people} alt="people" />Нас будет</span>}
                />
            </div>}
        </>
    )
}