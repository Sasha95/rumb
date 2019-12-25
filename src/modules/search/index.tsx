import React from "react";
import styles from "./search.module.css";
import globalStyle from "../../core/theme/commonStyle.module.css"
import { Row, Col } from 'antd';
import { data } from "../../api/mock/cards";
import { DataCard } from "../card/DataCard";
import {HeadFilter} from "./HeadFilter"

export const Search = () => {
    return (
        <div >
            <hr className={styles.hr} />
            <Row type="flex" justify="center">
                <Col>
                    <div className={styles.container}>
                      <HeadFilter />
                        {data.map((item) =>
                            <Row key={item.id}>
                                <DataCard card={item} />
                            </Row>
                        )}
                        <Row className={globalStyle.showMore} type={"flex"} justify="center">
                            Показать еще
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}