import React, { useState, useEffect } from "react";
import globalStyle from "../../core/theme/commonStyle.module.css";
import { Row } from "antd";
import { DataCard } from "./DataCard";
import { data } from "../../api/mock/cards";
import { ICard } from "../../api/dto/Card";

interface IProps {
  interes?: string[];
  country?: string;
}

export const Cards: React.FC<IProps> = ({ interes, country }) => {
  const [currentData, setCureentData] = useState<ICard[]>([]);
  const [filterData, setFilterData] = useState<ICard[]>([]);

  useEffect(() => {
    if (interes && filterData) {
      setFilterData(filterData.filter(x => interes.includes(x.interes)))
    }
    if(country && filterData){
      setFilterData(filterData.filter(x => x.country === country))
    }
    setCureentData(data.slice(currentData.length, currentData.length + 3));
  }, [country, currentData.length, filterData, interes]);
  

  const handleClick = () => {
    setCureentData(
      currentData.concat(
        data.slice(currentData.length, currentData.length + 3)
      ) as ICard[]
    );
  };

  console.log(currentData);

  return (
    <div>
      {currentData.map(item => (
        <Row key={item.id}>
          <DataCard card={item} />
        </Row>
      ))}
      <Row
        onClick={handleClick}
        className={globalStyle.showMore}
        type={"flex"}
        justify="center"
      >
        Показать еще
      </Row>
    </div>
  );
};
