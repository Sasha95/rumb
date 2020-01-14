import React, { useState } from "react"
import styles from "./payment.module.css"
import { useParams, Link, Route } from "react-router-dom";
import { data } from "../../../api/mock/cards";
import classnames from "classnames"
import { CardInfo } from "../CardInfo"
import { ICard } from "../../../api/dto/Card";
import { Row } from "antd";
import {Requires} from "./Requires"
import globalStyles from "../../../core/theme/commonStyle.module.css"

export const Payment = () => {
    const { orderId } = useParams();
    const selected: ICard = data.filter(x => x.id === Number(orderId))[0];
    // const display = classnames(styles.text, { [styles.textActive]:  },)

    return (
        <div>
            <CardInfo selected={selected} />
            <div className={styles.containerNav}>
                <Link to={`/rumb/payment${selected.id}/requires`}>Требования тура</Link>{" / "}
                <Link to={`/rumb/payment${selected.id}/members`}>Кто едет с вами ?</Link>{" / "}
                <Link to={`/rumb/payment${selected.id}/pay`}>Оплата</Link>
            </div>
            <Route path="/rumb/payment:orderId/requires">
                <Requires selected={selected} />
            </Route>
        </div>
    )
}