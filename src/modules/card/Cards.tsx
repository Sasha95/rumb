import React, { useState, useEffect } from "react";
import globalStyle from "../../core/theme/commonStyle.module.css";
import { Row } from "antd";
import { DataCard } from "./DataCard";
import { data } from "../../api/mock/cards";
import { ICard } from "../../api/dto/Card";
import { useSelector } from "react-redux";
import { current } from "../../store/currentSelect/currentSelectors";

export const Cards = () => {
  const [currentData, setCureentData] = useState<ICard[]>([]);
  const [filterData, setFilterData] = useState<ICard[]>();
  const selector = useSelector(current);

  useEffect(() => {
    let filter;
    if ((selector.interests && selector.interests.length>0)) {
      filter = data.filter(x => selector.interests.includes(x.interes))
      .filter(x => selector.places && (selector.places.indexOf(x.town)!==-1 || selector.places.indexOf(x.country)!==-1))
      setFilterData(filter)
      setCureentData(filter.slice(currentData.length, currentData.length + 3));
    } else{
      setCureentData(data.slice(currentData.length, currentData.length + 3));
    }
  }, []);
  

  const handleClick = () => {
    if(filterData){
      setCureentData(
        currentData.concat(filterData.slice(currentData.length, currentData.length + 3)) as ICard[]
      ); 
    }else{
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
