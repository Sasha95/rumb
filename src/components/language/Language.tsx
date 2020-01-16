import React, { useState } from "react"
import classNames from "classnames";
import { languages } from "../../api/mock/languages"
import stylemodal from "../../components/modal/modal.module.css"
import { Modal } from "../modal/Modal"
import styles from '../../modules/header/header.module.css'
import { ILanguages } from "../../api/dto/Languages.g"
import languageImg from "../../resources/language.svg"

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
    }

    return (
        <>
            <Modal show={showModal} title={"Выбрать язык и регион"} onClose={handleCloseModal}>
                <div className={stylemodal.flexContainerLangval} >
                    {languages.map((item, index) => (
                        <div className={classNames(
                                {[stylemodal.flexItemLangval]: item===selected, 
                                [stylemodal.flexItemLangvalUnactive]: item!==selected }
                            )} onClick={()=>handleChange(item)} key={index}>
                            <div className={stylemodal.titleItemModal}>{item.name}</div>
                            <div className={stylemodal.textItemModal}>{item.description}</div>
                        </div>
                    ))}
                </div>
            </Modal>
            <span className={styles.textBold} onClick={handleOpenModal}>
                {<img src={languageImg} alt="language" />} {" "}
                {selected.description} {" "}
                ({selected.symbol})
            </span>
        </>
    )
}