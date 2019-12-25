import React, { useState, useEffect } from "react"
import globalStyle from "../../core/theme/commonStyle.module.css"
import { Row, Col } from "antd"
import { DataCard } from "./DataCard"
import { data } from "../../api/mock/cards"
import { ICard } from "../../api/dto/Card"

interface IProps {
  interes: string[];
  
}

export const Cards = () => {
    const [currentData, setCureentData] = useState<ICard[]>([]);
    useEffect(()=> {
        setCureentData(data.slice(currentData.length, currentData.length+3))
    }, [])
    const handleClick = () => {
        setCureentData(currentData.concat(data.slice(currentData.length, currentData.length+3)) as ICard[])
    }

    return(
        <Row type="flex">
          <Col>
            <div className={globalStyle.popularText}>ПOПУЛЯРНЫЕ ТУРЫ</div>

            <div>
              {currentData.map((item) =>
                <Row key={item.id}>
                  <DataCard card={item} />
                </Row>
              )}
              <Row onClick={handleClick} className={globalStyle.showMore} type={"flex"} justify="center">
                Показать еще
              </Row>
            </div>
          </Col>
        </Row>
    )
}