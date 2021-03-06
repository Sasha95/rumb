import React, { useState, useEffect } from "react"
import styles from "./number.module.css"
import { Checkbox } from "../../components/checkbox/Checkbox";
import { Input } from "antd";
import people from "../../resources/people.svg"
import up from "../../resources/up.svg"
import down from "../../resources/downNum.svg"
import classnames from "classnames"

interface IProps {
    handleNumberOfPeople: (number: number) => void;
}

export const NumberOfPeoples: React.FC<IProps> = ({handleNumberOfPeople}) => {
    const [count, setCount] = useState(2);
    const [show, setShow] = useState(true);
    const onChange = (e: any) => {
        if (e.target.checked as boolean) {
            setShow(false)
            setCount(1);
        } else (
            setShow(true)
        )
    }

    const counterAdd = () => {
        setCount(count + 1);
    }

    const counterSubtract = () => {
        if (count > 1)
            setCount(count - 1)
    }

    useEffect(()=> {
        handleNumberOfPeople(count)
    }, [count, handleNumberOfPeople])

    const display = classnames(styles.member, { [styles.memberUnactive]: !show });
    return (
        <>
            <div className={styles.content}>
                <div className={display}>
                    <Checkbox title={"Я один участник"} onChange={onChange} />
                </div>
            </div>
            {show && <div className={styles.wrapper}>
                <Input
                    readOnly
                    style={{ display: "inline" }}
                    suffix={<div className={styles.container}>
                        <div className={styles.data}>{count}
                        </div>
                        <div className={styles.flexContainer}>
                            <div onClick={counterAdd} className={styles.image}>
                                <img width={8} height={8} src={up} alt={"up"} />
                            </div>
                            <div className={styles.horizontalLine} >
                                <div onClick={counterSubtract} className={styles.image}>
                                    <img width={8} height={8} src={down} alt={"down"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    prefix={<span className={styles.costomLablePeople}>
                        <img style={{ paddingRight: "17px", marginLeft: "-7px" }} src={people} alt="people" />
                        <span>Нас будет</span>
                    </span>}
                />
            </div>}
        </>
    )
}