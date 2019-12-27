import React, { useState, useEffect } from "react";
import globalStyle from "../../core/theme/commonStyle.module.css";
import { Row, Col } from "antd";
import { DataCard } from "./DataCard";
import { data } from "../../api/mock/cards";
import { ICard } from "../../api/dto/Card";
import { useSelector } from "react-redux";
import { current } from "../../store/currentSelect/currentSelectors";
import { filter, sorting } from "./Helper";

interface IProps {
  sort?: boolean;
}

export const Cards: React.FC<IProps> = ({sort}) => {
  const [currentData, setCureentData] = useState<ICard[]>([]);
  const [filterData, setFilterData] = useState<ICard[]>();
  const selector = useSelector(current);
  
  useEffect(() => {
    const result = filter(data, selector);
    setFilterData(result)
    setCureentData(result.slice(currentData.length, currentData.length + 3));    
  }, []);
  
  sorting(currentData, sort);

  const handleClick = () => {
    if (filterData) {
      setCureentData(
        currentData.concat(filterData.slice(currentData.length, currentData.length + 3)) as ICard[]
      );
    } else {
      setCureentData(
        currentData.concat(data.slice(currentData.length, currentData.length + 3)) as ICard[]
      );
    }
  };

  return (
    <div>
      {currentData.map(item => (
        <Row key={item.id}>
          <DataCard card={item} />
        </Row>
      ))}
      {filterData?.length !== currentData.length && 
      <Row type={"flex"} justify="center">
        <Col className={globalStyle.showMore} onClick={handleClick}>
          Показать еще
        </Col>
      </Row>
      }
    </div>
  );
};
