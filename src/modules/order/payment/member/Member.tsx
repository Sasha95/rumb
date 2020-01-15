import React from "react"
import styles from "./member.module.css"
import { Row } from "antd"
import { ICard } from "../../../../api/dto/Card"
import { Select } from 'antd';
const { Option } = Select;

interface IProps {
    selected: ICard;
}

export const Member: React.FC<IProps> = ({ selected }) => {
    return (
        <>
            <div>
                Кто едет с вами?
            </div>
            <div>
                <div>Участники</div>                
                <Select
                    showSearch
                    style={{width: "256px"}}                    
                    optionFilterProp="children"
                >
                    <Option value="jack">1</Option>
                    <Option value="lucy">2</Option>
                    <Option value="tom">3</Option>
                </Select>
            </div>
        </>
    )
}