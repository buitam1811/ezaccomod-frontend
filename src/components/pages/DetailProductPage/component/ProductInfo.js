import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import './ProductInfo.css'
function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    return (
        <div>
            <Descriptions className='location-info' title="Accomodation Information" bordered={true} column='12'>
                <Descriptions.Item className='location-item' label="Location" span='12'>{Product.address_number} {Product.address_street} Street, {Product.address_district} District, {Product.address_city} City</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Accomodation Type" span='4'>{props.roomtype}</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Number of Room" span='4'> {Product.number_of_room}</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Area" span='4'> {Product.area}</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Bathroom Type" span='6'> {props.bathtype}</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Bathroom Heater"span='6'> {props.bathheater}</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Kitchen Type" span='12'> {props.kitchen}</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Air Conditioner" span='6'> {props.air}</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Balcony" span='6'> {props.balcony}</Descriptions.Item>
                <Descriptions.Item className='location-item' label="Water and Electricity Bill per Week" span='6'> {Product.water_electricity_bill_per_week}$</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default ProductInfo
