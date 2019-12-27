import React, { useState } from "react";
import styles from "./search.module.css";
import { Row, Col } from 'antd';
import {HeadFilter} from "./HeadFilter"
import { Cards } from "../card/Cards";

export const Search = () => {
    const [sortDirection, setSortDirection] = useState(false);
    const handleSort = () => {
        setSortDirection(!sortDirection)
    }

    return (
        <div >
            <hr className={styles.hr} />
            <Row type="flex" justify="center">
                <Col>
                    <div className={styles.container}>
                      <HeadFilter sort={handleSort} />
                      <Cards sort={sortDirection}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}