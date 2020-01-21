import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import { Valute } from "../../components/valute/Valute"
import { Languages } from "../../components/language/Language"
import styles from "./header.module.css"

export interface IProps {
    titles: {
        name: string;
        description: string;
    }[]
}

export const RightMenuBig: React.FC<IProps> = ({titles}) => {
    return(
        <Menu mode="horizontal" inlineCollapsed={false}>        
            {titles.map((item, index) => (
            <Menu.Item className={styles.modified} key={index}>
                <Link to={`rumb/${item.name}/`} replace={true}>
                    {item.description}
                </Link>
            </Menu.Item>
        ))}
            <Menu.Item className={styles.modified} key="valute">            
            <Valute />
        </Menu.Item>
        <Menu.Item className={styles.modified} key="languages">
            <Languages />
        </Menu.Item> 

      </Menu>
    )
}