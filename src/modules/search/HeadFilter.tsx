import React, { useState } from "react";
import styles from "./search.module.css";
import globalStyles from "../../core/theme/commonStyle.module.css"
import more from "../../resources/more.svg"
import { Row, Col } from 'antd';
import arrow from "../../resources/down.svg"
import classnames from "classnames";
import { OtherFilter } from "../../components/otherFilter/OtherFilter";

const buttons = ["Дата", "1 участник", "Любая сложность", "Цена", "Без спецпредложений", "Длительность", "Снаряжение"]
interface IProps {
    sort: () => void;
}
export const HeadFilter: React.FC<IProps> = ({sort}) => {
    const [selected, setSelected] = useState<number[]>([]);
    const [sortDirect, setSortDirect] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleActive = (e: any) => {
        const id = Number(e.target.id)
        if (selected.includes(id)) {
            setSelected(selected.filter(x => x !== id))
        } else {
            setSelected([...selected, id])
        }
    }
    const handleSort = () => {
        sort();
        setSortDirect(!sortDirect);
    }
    return (
        <>
            <OtherFilter close={handleCloseModal} show={showModal}/>
            {buttons.map((button, index) => (
                <div className={classnames(styles.btn, { [styles.btnActive]: selected.includes(index) })}
                    key={index}
                    id={String(index)}
                    onClick={handleActive}>
                    {button}
                </div>
            ))}
            <span onClick={handleOpenModal} className={styles.btn}>
                <img src={more} alt={"more"} />
                <span className={styles.otherFilter}>Другие фильтры</span>
            </span>
            <Row type={"flex"} justify={"space-between"} className={styles.wrapper}>
                <Col className={styles.text}>Более 300 вариантов приключений</Col>
                <Col onClick={handleSort} className={globalStyles.cursorPointer}>
                    Показать сначала дорогие
                    <img className={classnames({ [styles.arrow]: !sortDirect }, { [styles.rotate]: sortDirect })} 
                        src={arrow} alt="arrow" />
                </Col>
            </Row>
        </>
    )
}