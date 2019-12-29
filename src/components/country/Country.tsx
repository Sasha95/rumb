import React from "react";
import styles from "./country.module.css";
import globalStyle from "../../core/theme/commonStyle.module.css"
import "antd/dist/antd.css";
import { countries } from "../../api/mock/countries";
import { AutoComplete, Input, } from "antd";
import { SelectValue } from "antd/lib/select";

interface IProps {
    handlePlace: (palce: SelectValue) => void;
  }
  
export const Country: React.FC<IProps> = ({handlePlace}) => {
    return (
      <>
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
        <hr className={globalStyle.hr} />
      </>
    );
};
  