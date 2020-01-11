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
import { PopularCard } from "../../components/popularCard/PopularCard"

export const Popular = () => {

    return (
        <div className={globalStyle.marginContainer}>
            <img className={style.ellipseLeft} src={lbellipse} alt={"ellips"} />
            <img className={style.ellipseRight} src={rbellips} alt={"rbellips"} />
            <Row className={globalStyle.popularText}>
                ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ
            </Row>
            <div className={style.imgContainer}>
                <PopularCard cityName={"Сеул"} alt={"Seul"} image={seul} />
                <PopularCard cityName={"Нью-Йорк"} alt={"New York"} image={york} />
                <PopularCard cityName={"Сингапур"} alt={"Singapur"} image={singapur} />            
            </div>
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
