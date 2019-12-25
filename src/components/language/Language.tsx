import React, { useState } from "react"
import classNames from "classnames";

import { languages } from "../../api/mock/languages"
import stylemodal from "../../components/modal/modal.module.css"
import { Modal } from "../modal/Modal"
import styles from '../../modules/header/header.module.css'
import { ILanguages } from "../../api/dto/Languages.g"
import languageImg from "../../resources/language.png"

export const Languages = () => {
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(languages[0])

    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleChange = (item: ILanguages) => {
        setSelected(item);
        setShowModal(false)
    }

    return (
        <>
            <Modal show={showModal} title={"Выбрать язык и регион"} onClose={handleCloseModal}>
                <ul className={stylemodal["flex-container-langval"]} >
                    {languages.map((item, index) => (
                        <li className={classNames(
                                {[stylemodal["flex-item-langval"]]: item===selected, 
                                [stylemodal["flex-item-langval-unactive"]]: item!==selected }
                            )} onClick={()=>handleChange(item)} key={index}>
                            <div>{item.name}</div>
                            <div>{item.description}</div>
                        </li>
                    ))}
                </ul>
            </Modal>
            <span className={styles.textBold} onClick={handleOpenModal}>
                {<img src={languageImg} alt="language" />} {" "}
                {selected.description} {" "}
                ({selected.symbol})
            </span>
        </>
    )
}