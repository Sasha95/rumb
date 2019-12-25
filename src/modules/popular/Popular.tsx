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

export const Popular = () => {
    return (
        <>
        <img className={style.ellipseLeft} src={lbellipse} alt={"ellips"} />
        <img className={style.ellipseRight} src={rbellips} alt={"rbellips"} />
        <table style={{zIndex: 10}}>
            <tbody>
                <tr>
                    <td className={globalStyle.popularText} style={{paddingTop: "40px"}}>ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ</td>
                </tr>
                <tr>
                    <td>
                    <div style={{position: "relative"}}>
                        <img src={seul} alt={"Seul"} />
                        <span style={{paddingLeft: "50px"}} className={classnames(style.centerImage, style.textImage)}>Сеул</span>
                    </div>

                    </td>
                    <td>
                    <div style={{position: "relative", marginLeft: "24px", marginRight: "24px"}}>
                        <img src={york} alt={"New York"} />
                        <span className={classnames(style.centerImage, style.textImage)}>Нью-Йорк</span>
                    </div>
                    </td>
                    <td>
                    <div style={{position: "relative"}}>
                        <img src={singapur} alt={"Singapur"} />
                        <span className={classnames(style.centerImage, style.textImage)}>Сингапур</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={style.btn}>
                        <img className={style.image} src={location} alt={"location"}/>
                        <span className={style.text}>Посмотреть все изменения</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
}
