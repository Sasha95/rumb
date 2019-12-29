import React from "react"
import style from "./popular.module.css"
import globalStyle from "../../core/theme/commonStyle.module.css"
import seul from "../../resources/seul.png"
import york from "../../resources/york.png"
import singapur from "../../resources/singapur.png"
import classnames from "classnames"
import location from "../../resources/loc_white.svg"
import rbellips from "../../resources/rbellips.svg"
import lbellipse from "../../resources/lbellipse.svg"
import { Col, Row } from "antd"

export const Popular = () => {
    return (
        <div>
            <img className={style.ellipseLeft} src={lbellipse} alt={"ellips"} />
            <img className={style.ellipseRight} src={rbellips} alt={"rbellips"} />
            <Row className={globalStyle.popularText}>
                ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ
            </Row>
            <Row type={"flex"} justify={"center"}>
                <Col className={style.imageColContainer}>
                    <img src={seul} alt={"Seul"} />
                    <span className={classnames(style.centerImage, style.textImage, globalStyle.unselectable)}>Сеул</span>
                </Col>
                <Col className={style.imageColContainer}>
                    <div className={globalStyle.marginImage}>
                        <img src={york} alt={"New York"} />
                        <span className={classnames(style.centerImage, style.textImage, globalStyle.unselectable)}>Нью-Йорк</span>
                    </div>
                </Col>
                <Col className={style.imageColContainer}>
                    <img src={singapur} alt={"Singapur"} />
                    <span className={classnames(style.centerImage, style.textImage, globalStyle.unselectable)}>Сингапур</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={style.btn}>
                        <img className={style.image} src={location} alt={"location"} />
                        <span className={classnames(style.text, globalStyle.unselectable)}>Посмотреть все изменения</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
