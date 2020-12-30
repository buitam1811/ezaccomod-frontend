import React, { useState,useEffect } from "react";
import { Card, Button, Row } from "antd";
import { Link } from "react-router-dom";
import './Admin.css'

const duration = [
    { key: 'W', value: "1 Week", price: '30$' },
    { key: 'M', value: "1 Month", price: '120$' },
    { key: 'Q', value: "3 Month", price: '120$'},
    { key: 'Y', value: "1 Year",  price: '1000$'}
]

const { Meta } = Card;
function PostCard(props) {
    useEffect(() => {
        handleduration(props.product.display_duration_type)
    }, [props])
    const [duration_type, setduration_type] = useState('')

    const handleduration = (type) => duration.map(item => (item.key===type) && setduration_type(item.value))

    return(
        <div className="admin-card">
            <Link to={props.path}>
                <Card cover={<img src={props.product.room_detail.pictures_included[0].picture}/>}>
                <Meta
                    title={props.product.room_detail.room_description}
                    description={duration_type}
                />
                </Card>
            </Link>
            <Row justify='center'>
                <Button className='remove-btn' size="large" shape="round" type="danger" onClick={props.onClick}>
                    {props.title}
                </Button>
            </Row>
        </div>
        )
    };

export default PostCard;
