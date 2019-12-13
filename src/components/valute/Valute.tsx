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
        setShowModal(false)
    }

    return (
        <>
            <Modal show={showModal} title={"Выбрать валюту"} onClose={handleCloseModal}>
                <ul className={stylemodal["flex-container-langval"]} >
                    {valutes.map((item, index) => (
                        <li className={classNames({[stylemodal["flex-item-langval"]]: item===selected, [stylemodal["flex-item-langval-unactive"]]: item!==selected })}
                            onClick={()=>handleChange(item)} key={index}>
                                <div>{item.description}</div>
                                <div>{item.name}</div>
                        </li>
                    ))}
                </ul>
            </Modal>
            <li className={styles.textBold} onClick={handleOpenModal}>
                {selected.symbol} {" "}
                {selected.name}
            </li>
        </>
    )
}