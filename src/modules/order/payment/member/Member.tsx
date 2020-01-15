import React, { useState } from "react"
import styles from "./member.module.css"
import { ICard } from "../../../../api/dto/Card"
import { Select, Input } from 'antd';
import { useHistory } from "react-router-dom";
import classnames from "classnames"
import globalStyle from "../../../../core/theme/commonStyle.module.css"
const { Option } = Select;
const { TextArea } = Input;
interface IProps {
    selected: ICard;
}

export const Member: React.FC<IProps> = ({ selected }) => {
    const [value, setValue] = useState('');
    const history = useHistory();
    const handleNext = () => {
        history.push(`/rumb/payment${selected.id}/pay`)
    }
    return (
        <>
            <div>
                Кто едет с вами?
            </div>
            <div>
                <div>Участники</div>                
                <Select
                    defaultValue={"1 участник"}
                    showSearch
                    style={{width: "256px"}}                    
                    optionFilterProp="children"
                >
                    {Array(selected.seats).fill(0).map((e,i)=>i+1).map(index => (
                        <Option key={index} value={index}>
                            {index === 1
                            ? `${index} участник`
                            : index>1 && index<5? `${index} участника`
                            : index > 4? `${index} участников`
                            : ""
                            }
                        </Option>
                    ))}
                </Select>
            </div>
            <div>
                Познакомьтесь с автором тура
            </div>
            <div>
                <TextArea
                    value={value}
                    placeholder='Здравствуйте! Заинтересовал Ваш тур.'     
                    onChange={(text)=>{setValue(text.target.value)}}
                    autoSize={{ minRows: 4 }}
                />
            </div>
            <div onClick={handleNext} className={classnames(globalStyle.buttonOrder, styles.btnContainer)}>Продолжить</div>       
        </>
    )
}