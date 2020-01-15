import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link, useLocation, Route } from "react-router-dom";
import { Button, Drawer, Icon, Input, Menu } from "antd";
import { useSelector } from "react-redux";
import { currentSelector } from "../../store/currentSelect/currentSelectors";
import "../mainTravel/customantd.css"
import { useMedia } from "../../hooks/useMedia";
import { RightMenuSmall } from "./RightMenuSmall";
import { RightMenuBig } from "./RightMenuBig";

const titles = [
  { name: 'howItWorks', description: 'Как это работает' },
  { name: 'reviews', description: 'Отзывы' },
  { name: 'about', description: 'О нас' },
  { name: 'trips', description: 'Мои поездки' },
  { name: 'signIn', description: 'Войти' }
]

export const Header = () => {
  const location = useLocation();
  const current = useSelector(currentSelector);
  const [visible, setVisible] = useState(false);
  const [textInput, setTextInput] = useState();
  useEffect(() => {
    if (current.interests && current.interests.length > 0) {
      setTextInput(
        current.interests
          .join(", ")
          .concat(current.places ? " • " + current.places : "")
      );
    } else {
      setTextInput(current.places);
    }
  }, [current.interests, current.places]);
  const handleChange = (e: any) => {
    setTextInput(e.target.value);
  };
  const Sizes = ["SMALL", "MEDIUM"];
  let isMinimum = useMedia(["(max-width: 800px)", "(max-width: 1200px)"], Sizes, "BIG");
  isMinimum = isMinimum === "MEDIUM" && location.pathname !== "/rumb/"? "MEDIUM": "BIG";
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className={styles.menuBar}>
      <div className={styles.logo}>
        <Link to="/rumb/" className={styles.logos}>
          ЛОГО
        </Link>
      </div>

      <div className={styles.menuCon}>
        <div className={styles.leftMenu}>
        {location.pathname !== "/rumb/" &&
          <Menu>
          <Menu.Item key="search">
            <Input
              onChange={handleChange}
              value={textInput}
              placeholder={"Начать поиск"}
              className={styles.inputContainer}
              prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            </Menu.Item>
            </Menu>
        }
        </div>
        <div className={styles.rightMenu} style={{display: isMinimum === "MEDIUM"? "none": ""}}>
          <RightMenuBig titles={titles} />         
        </div>
        <Button className={styles.barsMenu} style={{display: isMinimum === "MEDIUM"? "inline-block": ""}} type="primary" onClick={showDrawer}>
          <span className={styles.barsBtn}></span>
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
            <RightMenuSmall titles={titles} />
        </Drawer>
      </div>
    </nav>
  );
};
