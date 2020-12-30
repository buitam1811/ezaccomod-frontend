import Axios from 'axios';
import React, { useState } from 'react'
import './Filter.css'

const areaLess = [
    { key: 100, value: "< 100", price: "100$"},
    { key: 90, value: "< 90", price: "90$"},
    { key: 80, value: "< 80", price: "80$"},
    { key: 70, value: "< 70", price: "70$"},
    { key: 60, value: "< 60", price: "60$"},
    { key: 50, value: "< 50", price: "50$"},
    { key: 40, value: "< 40", price: "40$"}
]

const accomodation = [
    { key: 'H', value: "House" },
    { key: 'S', value: "Studio" },
    { key: 'A', value: "Apartment" },
    { key: 'M', value: "Miniroom" }
]

const condition = [
    { key: 'S', value: "Shared" },
    { key: 'P', value: "Private" },
    { key: 'N', value: "None" }
]

function Filter(props) {
    const [Products, setProducts] = useState([]);
    const [search, setsearch] = useState({
        street: '',
        district: '',
        city: '',
        room_type: '',
        area: '',
        price: '',
        bathroom: '',
        kitchen: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setsearch({
            ...search,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        Axios.get(`/api/post-api/approved-list/?is_available__exact=&address_number__exact=&address_street__icontains=${search.street}&address_district__icontains=${search.district}&address_city=${search.city}&area__gt=&area__lt=${search.area}&room_type=${search.room_type}&bathroom_type=${search.bathroom}&bathroom_heater=&kitchen_type=${search.kitchen}&air_conditional=&balcony=&price_renter_to_pay__gt=&price_renter_to_pay__lt=${search.price}`).then(
        response => {
            if (response) {
                console.log(response);
                setProducts(response.data);
            } else {
                alert('Failed to fetch product datas')
            }
        })

        props.sendproducts(Products);
    }

    const handleRestore = e => {
        e.preventDefault();
        Axios.get('api/post-api/approved-list/')
            .then(response => {
                if (response) {
                    console.log(response);
                    setProducts(response.data);
                } else {
                    alert('Failed to fectch product datas')
                }
            })

        props.sendproducts(Products);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div className='search-section'>
                    <div className="search-inputs">
                        <label className='search-label'>Street:</label>
                        <input type="text" 
                            className="search-input" 
                            name="street"
                            placeholder=""
                            value={search.street}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="search-inputs">
                        <label className='search-label'>District:</label>
                        <input type="text" 
                            className="search-input" 
                            name="district"
                            placeholder=""
                            value={search.district}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="search-inputs">
                        <label className='search-label'>City:</label>
                        <input type="text" 
                            className="search-input" 
                            name="city"
                            placeholder=""
                            value={search.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="search-inputs">
                            <label className='search-label'>Accomodation Type:</label>
                            <select className="search-input-select" name='room_type' onChange={handleChange}>
                                {accomodation.map(item => (
                                    <option key={item.key} value={item.key}>{item.value} </option>
                                ))}
                            </select>
                    </div>
                    <div className="search-inputs">
                            <label className='search-label'>Area Less Than:</label>
                            <select className="search-input-select" name='area' onChange={handleChange}>
                                {areaLess.map(item => (
                                    <option key={item.key} value={item.key}>{item.value} </option>
                                ))}
                            </select>
                    </div>
                    <div className="search-inputs">
                            <label className='search-label'>Price Less Than:</label>
                            <select className="search-input-select" name='price' onChange={handleChange}>
                                {areaLess.map(item => (
                                    <option key={item.key} value={item.key}>{item.price} </option>
                                ))}
                            </select>
                    </div>
                    <div className="search-inputs">
                            <label className='search-label'>Bathroom:</label>
                            <select className="search-input-select" name='bathroom' onChange={handleChange}>
                                {condition.map(item => (
                                    <option key={item.key} value={item.key}>{item.value} </option>
                                ))}
                            </select>
                    </div>
                    <div className="search-inputs">
                            <label className='search-label'>Kitchen:</label>
                            <select className="search-input-select" name='kitchen' onChange={handleChange}>
                                {condition.map(item => (
                                    <option key={item.key} value={item.key}>{item.value} </option>
                                ))}
                            </select>
                    </div>
                </div>
                <div className='search-btn'>
                    <button className='sb-btn' type='submit'>
                        Find
                    </button>
                    <button className='sb-btn' onClick={handleRestore} type='submit'>
                        Restore
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Filter
