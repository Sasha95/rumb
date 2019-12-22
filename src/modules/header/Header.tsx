import React from 'react'
import styles from './header.module.css'
import { Link } from "react-router-dom";
import { Languages } from '../../components/language/Language';
import { Valute } from '../../components/valute/Valute';
import { Input, Icon } from 'antd';

const titles = [
    { name: 'howItWorks', description: 'Как это работает' },
    { name: 'reviews', description: 'Отзывы' },
    { name: 'about', description: 'О нас' },
    { name: 'trips', description: 'Мои поездки' },
    { name: 'signIn', description: 'Войти' }
]

export const Header = () => {

    return (
        <>

            <ul className={styles.ul}>
                <Link to='/' className={styles.logo}>
                    ЛОГО
                </Link>
                <li className={styles.search}>
                <Input
                    style={{maxWidth: "384px"}}
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
                </li>
                {titles.map((item, index) => (
                    <li key={index}>
                        <Link to={`/${item.name}`} className={styles.text}>
                            {item.description}
                        </Link>
                    </li>
                ))}
                <Valute />
                <Languages />
            </ul>
        </>
    );
}