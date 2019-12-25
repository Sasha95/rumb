import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import { Link, useLocation } from "react-router-dom";
import { Languages } from '../../components/language/Language';
import { Valute } from '../../components/valute/Valute';
import { Input, Icon } from 'antd';
import { useSelector } from 'react-redux';
import { current } from '../../store/currentSelect/currentSelectors';

const titles = [
    { name: 'howItWorks', description: 'Как это работает' },
    { name: 'reviews', description: 'Отзывы' },
    { name: 'about', description: 'О нас' },
    { name: 'trips', description: 'Мои поездки' },
    { name: 'signIn', description: 'Войти' }
]

export const Header = () => {
    const location = useLocation();
    const selector = useSelector(current);
    const [textInput, setTextInput] = useState();
    useEffect(() => {
        if (selector.interests && selector.interests.length > 0)
            setTextInput(selector.interests.join(", ").concat(selector.places ? " • " + selector.places : ""));
    }, [selector])

    return (
        <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <Link to='/' className={styles.logo}>
                ЛОГО
            </Link>
            <table className={styles.centerContainer}>
                <tbody>
                    <tr>
                        {location.pathname !== "/" &&
                            <td style={{ width: "408px", verticalAlign: "middle" }}>
                                <Input
                                    value={textInput}
                                    placeholder={"Начать поиск"}
                                    style={{ width: "384px", right: "35px" }}
                                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                            </td>}
                        <td>
                            {titles.map((item, index) => (
                                <span key={index}>
                                    <Link to={`/${item.name}`} className={styles.text}>
                                        {item.description}
                                    </Link>
                                </span>
                            ))}
                            <span>
                                <Valute />
                                <Languages />
                            </span>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}