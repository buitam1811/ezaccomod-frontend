import React, { useState,useEffect } from 'react';
import '../../../App.css';
import CardItem from '../../CardItem';
import Axios from 'axios';
import './DealsListingPage.css';
import { Icon, Col, Card, Row } from 'antd';

function Deals() {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        Axios.get('/api/generic-api/post-list/', {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
            .then(response => {
                if (response) {
                    console.log(response);
                    setProducts(response.data)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const rows = [...Array( Math.ceil(Products.length / 4) )];

    const productRows = rows.map( (row, idx) => Products.slice(idx * 4, idx * 4 + 4) );

    const content = productRows.map((row, idx) => (
        <ul className='cards__items'>
          { row.map( product => 
            <CardItem
              src={`${product.room_detail.pictures_included[0].picture}`}
              text={product.room_detail.optional_furniture}
              label={product.room_detail.address_city}
              path='/'
            /> )}
        </ul> ))

    return (
        <div className='cards'>
            <h1>Best deals in Ha Noi!</h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
                {content}
            </div>
            </div>
        </div>
    )
}

export default Deals
