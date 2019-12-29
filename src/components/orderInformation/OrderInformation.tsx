import React from "react";
import styles from "./orderInformation.module.css";
import { Col, Row } from "antd";

interface IProps {
  title: string;
  operator?: boolean;
}

export const OrderInformation: React.FC<IProps> = ({
  title,
  operator,
  children
}) => {
  return (
    <Row type={"flex"} justify={"center"}>
      <Col  style={{ width: "408px", paddingRight: "24px" }} className={styles.leftWrap}>
        <div className={styles["our-doing"]}>
          {title}
          {operator && (
            <div className={styles["btn-call"]}>Связаться с оператором</div>
          )}
        </div>
      </Col>
      <Col style={{ width: "794px" }} className={styles.rihtWrap}>{children} </Col>
    </Row>
  );
};
