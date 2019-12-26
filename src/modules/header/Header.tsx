import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import { Link, useLocation } from "react-router-dom";
import { Languages } from '../../components/language/Language';
import { Valute } from '../../components/valute/Valute';
import { Input, Icon, Row, Col } from 'antd';
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
        if (selector.interests && selector.interests.length > 0){
            setTextInput(selector.interests.join(", ").concat(selector.places ? " • " + selector.places : ""));
        } else{
            setTextInput(selector.places);
        }
    }, [selector.interests, selector.places])
    const handleChange = (e: any) => {
        setTextInput(e.target.value)
    }

    return (
        <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <Link to='/' className={styles.logo}>
                ЛОГО
            </Link>
            <Row justify={"center"} type={"flex"}>
                <Col style={{ marginRight: "40px" }}>
                    <div>
                        <Input
                            style={{ opacity: location.pathname === "/" ? 0 : 1 }}
                            readOnly={location.pathname === "/"}
                            onChange={handleChange}
                            value={textInput}
                            placeholder={"Начать поиск"}
                            className={styles.container}
                            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                    </div>
                </Col>
                {titles.map((item, index) => (
                    <span key={index}>
                        <Link to={`/${item.name}`} className={styles.text}>
                            {item.description}
                        </Link>
                    </span>
                ))}
                <span>
                    <Valute />
                </span>
                <span>
                    <Languages />
                </span>
            </Row>
        </div>
    );
}