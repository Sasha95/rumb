import React, { useState, useEffect } from "react";
import globalStyle from "../../core/theme/commonStyle.module.css";
import { Row, Col } from "antd";
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
      let interes: ICard[] = [];
      let places: ICard[] = [];
      if (selector.interests && selector.interests.length>0){
        interes.push(...data.filter(x => selector.interests.includes(x.interes)))
      }
      if (selector.places){
        places.push(...data.filter(x => (selector.places.indexOf(x.town)!==-1 || selector.places.indexOf(x.country)!==-1)))
      }
      console.log("places", places)
      console.log("interes", interes)
      // console.log("!!!!", interes.filter(x => !places.includes(x)))
      // const filter = interes.filter(x => places.includes(x));
      const filter = Array.from(new Set([...places, ...interes]));
      console.log(filter)
      if (filter.length>0 && interes.length===0 && places.length===0){
        setFilterData(filter)
        setCureentData(filter.slice(currentData.length, currentData.length + 3));
      } else{
        setFilterData(data)
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
      <Row type={"flex"} justify="center">
        <Col className={globalStyle.showMore} onClick={handleClick}>
          Показать еще
        </Col>
      </Row>
    </div>
  );
};
