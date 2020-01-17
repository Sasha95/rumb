import React, { useState, useEffect } from "react"
import classNames from "classnames";
import { valutes } from "../../api/mock/valutes"
import stylemodal from "../../components/modal/modal.module.css"
import { Modal } from "../modal/Modal"
import styles from '../../modules/header/header.module.css'
import {IValute} from "../../api/dto/Valutes.g"
import { useDispatch, useSelector } from "react-redux";
import { set_current_valute } from "../../store/currentValute/currentValuteActions";
import { currentValuteSelector } from "../../store/currentValute/currentValuteSelectors";

export const Valute = () => {
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState<IValute>(valutes[0])
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleChange = (item: IValute) => {
        dispatch(set_current_valute(item))
        setSelected(item)
    }
    const valute = useSelector(currentValuteSelector)
    // useEffect(()=> {
    //     setSelected(valute);
    // }, [])

    return (
        <>
            <Modal show={showModal} title={"Выбрать валюту"} onClose={handleCloseModal}>
                <div className={stylemodal.flexContainerLangval} >
                    {valutes.map((item, index) => (
                        <div className={classNames(
                                {[stylemodal.flexItemLangval]: item===selected, 
                                [stylemodal.flexItemLangvalUnactive]: item!==selected }
                            )}
                            onClick={()=>handleChange(item)} key={index}>
                                <div className={stylemodal.titleItemModal}>{item.description}</div>
                                <div className={stylemodal.textItemModal}>{item.name} - {item.symbol}</div>
                        </div>
                    ))}
                </div>
            </Modal>
            <span className={styles.textBold} onClick={handleOpenModal}>
                {valute.symbol} {" "}
                {valute.name}
            </span>
        </>
    )
}