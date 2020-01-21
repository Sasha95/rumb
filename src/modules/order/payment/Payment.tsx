import React from "react"
import styles from "./payment.module.css"
import { useParams, Route, NavLink } from "react-router-dom";
import { data } from "../../../api/mock/cards";
import { CardInfo } from "../CardInfo"
import { ICard } from "../../../api/dto/Card";
import { Requires } from "./require/Requires"
import { Member } from "./member/Member";
import { Row, Col } from "antd";
import Pay from "./pay/Pay";
import { RezultCard } from "./ResultCard";
import { StripeProvider, Elements } from 'react-stripe-elements'

export const Payment = () => {
    const { orderId } = useParams();
    const selected: ICard = data.filter(x => x.id === Number(orderId))[0];
    // const display = classnames(styles.text, { [styles.textActive]:  },)

    return (
        <Row style={{ paddingBottom: "48px" }}>
            <CardInfo selected={selected} />
            <Row  className={styles.containerNav} type={"flex"} justify={"space-between"}>
                <Col offset={3}>
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
                </Col>
            </Row>
            <Route path="/rumb/payment:orderId/requires">
                <Requires selected={selected} />
            </Route>
            <Route path="/rumb/payment:orderId/members">
                <Member selected={selected} />
            </Route>
            <Route path="/rumb/payment:orderId/pay">
            <StripeProvider apiKey="pk_test_j7KlMPUXrrTh3PpKNZRzhRfD00F7l2qfRy">
                <Elements>
                    <Pay />
                </Elements>
            </StripeProvider>
            </Route>
        </Row>
    )
}