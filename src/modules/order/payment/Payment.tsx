import React from "react"
import styles from "./payment.module.css"
import { useParams, Route, NavLink } from "react-router-dom";
import { data } from "../../../api/mock/cards";
import { CardInfo } from "../CardInfo"
import { ICard } from "../../../api/dto/Card";
import { Requires } from "./require/Requires"
import { Member } from "./member/Member";

export const Payment = () => {
    const { orderId } = useParams();
    const selected: ICard = data.filter(x => x.id === Number(orderId))[0];
    // const display = classnames(styles.text, { [styles.textActive]:  },)

    return (
        <div>
            <CardInfo selected={selected} />
            <div className={styles.containerNav}>
                <NavLink                    
                    activeClassName={styles.textActive}
                    className={styles.text}
                    to={`/rumb/payment${selected.id}/requires`}>
                    Требования тура
                </NavLink>{" / "}
                <NavLink
                    activeClassName={styles.textActive}
                    className={styles.text}
                    to={`/rumb/payment${selected.id}/members`}>
                    Кто едет с вами ?
                </NavLink>{" / "}
                <NavLink
                    activeClassName={styles.textActive}
                    className={styles.text}
                    to={`/rumb/payment${selected.id}/pay`}>
                    Оплата
                </NavLink>
            </div>
            <Route path="/rumb/payment:orderId/requires">
                <Requires selected={selected} />
            </Route>
            <Route path="/rumb/payment:orderId/members">
                <Member selected={selected} />
            </Route>
        </div>
    )
}