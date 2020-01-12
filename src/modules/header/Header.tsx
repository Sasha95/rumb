import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Drawer } from "antd";
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
  const Sizes = ["SMALL"];
  const isMinimum = useMedia(["(max-width: 800px)"], Sizes, "BIG");
  
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
        {/* <div>
                    {location.pathname === "/rumb" &&
                    <div style={{ marginRight: "40px" }}>
                        <div>
                            <Input
                                // style={{ opacity: location.pathname === "/rumb/" || location.pathname === "/rumb" ? 0 : 1 }}
                                // readOnly={location.pathname === "/rumb/" || location.pathname === "/rumb"}
                                onChange={handleChange}
                                value={textInput}
                                placeholder={"Начать поиск"}
                                className={styles.container}
                                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            />
                        </div>
                    </div>
                    }
                </div> */}
      </div>

      <div className={styles.menuCon}>
        <div className={styles.rightMenu}>
          <RightMenuBig titles={titles}/>
        </div>
        <Button className={styles.barsMenu} type="primary" onClick={showDrawer}>
          <span className={styles.barsBtn}></span>
        </Button>
        <Drawer        
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          {isMinimum === "SMALL" &&
            <RightMenuSmall titles={titles}/>    
        }
        </Drawer>
      </div>
    </nav>
  );
};
