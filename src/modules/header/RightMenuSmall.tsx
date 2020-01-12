import React from "react"
import { Menu } from "antd"
import { Languages } from "../../components/language/Language"
import { Valute } from "../../components/valute/Valute"
import styles from "./header.module.css"
import { Link } from "react-router-dom";

interface IProps {
    titles: {
        name: string;
        description: string;
    }[]
}

export const RightMenuSmall: React.FC<IProps> = ({titles}) => {
    return(
        <Menu mode="horizontal" inlineCollapsed={true}>   
            <Menu.Item className={styles.modified} key="languages">
                <Languages />
            </Menu.Item> 
            <Menu.Item className={styles.modified} key="valute">            
                <Valute />
            </Menu.Item>
            {titles.map((item, index) => (
            <Menu.Item className={styles.modified} key={index}>
                <Link to={`rumb/${item.name}/`} className={styles.text}>
                    {item.description}
                </Link>
            </Menu.Item>
        ))}
      </Menu>
    )
}
