import React from "react";
import styles from "./orderInformation.module.css";
import globalStyle from "../../core/theme/commonStyle.module.css";
import classnames from "classnames";
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
      <Col className={classnames(styles.leftWrap, globalStyle.leftContainer)}>
        <div className={styles.ourDoing}>
          {title}
          {operator && (
            <div className={styles.btnCall}>Связаться с оператором</div>
          )}
        </div>
      </Col>
      <Col className={classnames(styles.rihtWrap, globalStyle.rightContainer)}>{children} </Col>
    </Row>
  );
};
