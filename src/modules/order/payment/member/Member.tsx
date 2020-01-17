import React, { useState, useRef } from "react"
import styles from "./member.module.css"
import { ICard } from "../../../../api/dto/Card"
import { Select, Input, Row, Col } from 'antd';
import { useHistory } from "react-router-dom";
import classnames from "classnames"
import globalStyle from "../../../../core/theme/commonStyle.module.css"
import { useDispatch } from "react-redux";
import { set_order } from "../../../../store/order/orderActions";
const { Option } = Select;
const { TextArea } = Input;
interface IProps {
    selected: ICard;
}

export const Member: React.FC<IProps> = ({ selected }) => {
    const [value, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(1);
    const history = useHistory();
    const dispatch = useDispatch();
    const select = useRef();
    const handleNext = () => {
        dispatch(set_order({
            members: selectedValue
        }));
        history.push(`/rumb/payment${selected.id}/pay`)
    }
    const handleChange = (s: any) => {
        setSelectedValue(s);
    }
    console.log(select)
    return (
        <Row>
            <Col offset={3}>
                <div className={styles.memberTitle}>
                    Кто едет с вами?
            </div>
                <div>
                    <div className={styles.member}>Участники</div>
                    <Select
                        defaultValue={"1 участник"}
                        onChange={handleChange}
                        showSearch
                        className={styles.selectContainer}
                        optionFilterProp="children"
                    >
                        {Array(selected.seats).fill(0).map((e, i) => i + 1).map(index => (
                            <Option key={index} value={index}>
                                {index === 1
                                    ? `${index} участник`
                                    : index > 1 && index < 5 
                                    ? `${index} участника`
                                    : `${index} участников`                                            
                                }
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className={styles.member}>
                    Познакомьтесь с автором тура
                </div>
                <div className={styles.textArea}>
                    <TextArea
                        value={value}
                        placeholder='Здравствуйте! Заинтересовал Ваш тур.'
                        onChange={(text) => { setValue(text.target.value) }}
                        autoSize={{ minRows: 4 }}
                    />
                </div>
                <div onClick={handleNext} className={classnames(globalStyle.buttonOrder, styles.btnContainer)}>Продолжить</div>
            </Col>
        </Row>
    )
}