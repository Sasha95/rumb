import React from "react";
import "antd/dist/antd.css";
import styles from "./mainTravel.module.css";
import { countries } from "../../api/mock/countries";
import { AutoComplete, Input, } from "antd";
import "./customantd.css"

export const Country = () => {
  return (
    <div>
      <AutoComplete
        style={{ width: '100%', border: "none",marginTop: "30px" }}
        dataSource={countries}
        placeholder='Попробуйте "Москва"'
        dropdownMenuStyle={{ textAlign: "right" }}
        filterOption={(inputValue, option) =>
          option.props.children
            ?.toString()
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
      >
        <Input prefix={<span className={styles["custom-label"]}>Место</span>} />
      </AutoComplete>

      <hr className={styles.hr} />
    </div>
  );
};
