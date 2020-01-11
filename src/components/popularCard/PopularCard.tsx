import React from "react"
import style from "./popularCard.module.css"
import globalStyle from "../../core/theme/commonStyle.module.css"
import classnames from "classnames"

export interface IProps {
    image: string;
    alt: string;
    cityName: string;
}

export const PopularCard: React.FC<IProps> = ({image, alt, cityName}) => {
    return (
        <div className={style.imageColContainer}>
            <img className={style.img} src={image} alt={alt} />
            <span className={classnames(style.centerImage, style.textImage, globalStyle.unselectable)}>{cityName}</span>
        </div>
    )
}