import React from "react";
import "antd/dist/antd.css";
import styles from "./mainTravel.module.css";
import { countries } from "../../api/mock/countries";
import { AutoComplete, Input, } from "antd";
import "./customantd.css"
import { SelectValue } from "antd/lib/select";

interface IProps {
  handlePlace: (palce: SelectValue) => void;
}

export const Country: React.FC<IProps> = ({handlePlace}) => {
  return (
    <div>
      <AutoComplete
        className={styles.countryAutocomplite}
        dataSource={countries}
        placeholder='Попробуйте "Москва"'
        dropdownMenuStyle={{ textAlign: "right" }}
        filterOption={(inputValue, option) =>
          option.props.children
            ?.toString()
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
        onChange={handlePlace} 
      >
        <Input 
        className={styles.countryText}
        prefix={<span className={styles.customLabel}>Место</span>} 
        />
      </AutoComplete>
      <hr className={styles.hr} />
    </div>
  );
};
