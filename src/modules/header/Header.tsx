import React from 'react'
import styles from './header.module.css'
import { Link } from "react-router-dom";
import { Languages } from '../../components/language/Language';
import { Valute } from '../../components/valute/Valute';

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