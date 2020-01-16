import React, { useState } from "react"
import classNames from "classnames";
import { valutes } from "../../api/mock/valutes"
import stylemodal from "../../components/modal/modal.module.css"
import { Modal } from "../modal/Modal"
import styles from '../../modules/header/header.module.css'
import {IValute} from "../../api/dto/Valutes.g"

export const Valute = () => {
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(valutes[0])

    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleChange = (item: IValute) => {
        setSelected(item)
    }

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
                {selected.symbol} {" "}
                {selected.name}
            </span>
        </>
    )
}