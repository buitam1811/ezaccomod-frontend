import React, { useState,useEffect } from 'react';
import '../../../App.css';
import CardItem from '../../CardItem';
import Axios from 'axios';
import './DealsListingPage.css';
import { Icon, Col, Card, Row } from 'antd';
import Filter from './Filter';

function Deals() {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        Axios.get('api/post-api/approved-list/')
            .then(response => {
                if (response) {
                    console.log(response);
                    setProducts(response.data);
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const filterProducts = (newFiltered) => {
        setProducts(newFiltered);
    }

    const rows = [...Array( Math.ceil(Products.length / 3) )];

    const productRows = rows.map( (row, idx) => Products.slice(idx * 3, idx * 3 + 3) );

    const content = productRows.map((row, idx) => (
        <ul className='cards__items'>
          { row.map( product => 
            <CardItem
              src={`${product.room_detail.pictures_included[0].picture}`}
              text={product.room_detail.room_description}
              label={product.room_detail.address_city}
              path={`/product/${product.room_detail.id}`}
            /> )}
        </ul> ))

    return (
        <div>
            <div className='cards'>
                <h1>FIND THE BEST ACCOMODATION ACROSS THE COUNTRY NOW!</h1>
                <Filter sendproducts={filterProducts}/>
                <div className='cards__container'>
                <div className='cards__wrapper'>
                {Products.length === 0 ?
                    <div style={{ display: 'flex', height: '600px', justifyContent: 'center', alignItems: 'center' }}>
                        <h2>No Post Found <i class="fas fa-search" style={{marginLeft:'10px'}}></i></h2>
                    </div> :
                    <>
                    {content} 
                    </>
                }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Deals
