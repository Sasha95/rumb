import React from "react"
import styles from "./orderInformation.module.css"

interface IProps {
    title: string;
    operator?: boolean;
}

export const OrderInformation: React.FC<IProps> = ({ title, operator, children }) => {
    return (
        <table style={{marginLeft: "120px", marginTop: "70px"}}>
            <tbody>
            <tr>
                <td style={{width: "408px", verticalAlign: "top"}}>
                    <div className={styles["our-doing"]}>
                    {title}
                    {operator &&
                        <div className={styles["btn-call"]}>
                            Связаться с оператором
                        </div>}
                </div></td>
                <td style={{paddingRight: "120px"}}>{children}</td>
            </tr>
            </tbody>
        </table>
    )
}