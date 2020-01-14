import React from "react"
import { Row, Col } from "antd"
import { ICard } from "../../api/dto/Card"
import globalStyle from "../../core/theme/commonStyle.module.css"
import styles from "./imageConatiner.module.css";
import like from "../../resources/like.svg";
import share from "../../resources/share.svg";

interface IProps {
    selected: ICard;
}

export const ImageContainer: React.FC<IProps> = ({selected}) => {
    return(
        <Row type={"flex"} justify={"center"} align={"top"}>
        <Col>
            <img src={selected.images[0]} alt={"img"} />
        </Col>
        <Col className={globalStyle.marginImage}>
            <img src={selected.images[1]} alt={"img"} />
        </Col>
        <Col className={styles.socialContainer}>
            <img src={selected.images[2]} alt={"img"} />
            <div className={styles.socialLike}>
                <img
                    className={styles.shareLike}
                    src={share}
                    alt={"share"}
                />
                <span className={styles.shareLikeText}>
                    Поделиться
                        </span>
            </div>
            <div className={styles.socialShare}>
                <img
                    className={styles.shareLike}
                    src={like}
                    alt={"like"}
                />
                <span className={styles.shareLikeText}>Избранное</span>
            </div>
        </Col>
    </Row>
    )
}