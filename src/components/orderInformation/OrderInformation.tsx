import React from "react";
import styles from "./orderInformation.module.css";

interface IProps {
  title: string;
  operator?: boolean;
}

export const OrderInformation: React.FC<IProps> = ({
  title,
  operator,
  children
}) => {
  return (
    <tr>
      <td className={styles.leftWrap}>
        <div className={styles["our-doing"]}>
          {title}
          {operator && (
            <div className={styles["btn-call"]}>Связаться с оператором</div>
          )}
        </div>
      </td>
      <td className={styles.rihtWrap}>{children}</td>
    </tr>
  );
};
