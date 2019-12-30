import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import { Link, useLocation } from "react-router-dom";
import { Languages } from '../../components/language/Language';
import { Valute } from '../../components/valute/Valute';
import { Input, Icon, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { currentSelector } from '../../store/currentSelect/currentSelectors';

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
    const [textInput, setTextInput] = useState();
    useEffect(() => {
        if (current.interests && current.interests.length > 0){
            setTextInput(current.interests.join(", ").concat(current.places ? " • " + current.places : ""));
        } else{
            setTextInput(current.places);
        }
    }, [current.interests, current.places])
    const handleChange = (e: any) => {
        setTextInput(e.target.value)
    }
    return (
        <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <Link to='/rumb/' className={styles.logo}>
                ЛОГО
            </Link>
            <Row justify={"center"} type={"flex"}>
                <Col style={{ marginRight: "40px" }}>
                    <div>
                        <Input
                            style={{ opacity: location.pathname === "/rumb/" || location.pathname === "/rumb" ? 0 : 1 }}
                            readOnly={location.pathname === "/rumb/" || location.pathname === "/rumb"}
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
                        <Link to={`rumb/${item.name}/`} className={styles.text}>
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