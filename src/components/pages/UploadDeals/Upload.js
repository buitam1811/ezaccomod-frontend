import React, { useState } from 'react'
import './UploadDeals.css'
import useUp from './useUp'
import validate from './validateInfoUp';
import { Row, Col } from 'antd'

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

const UploadDealsFillIn = ({ submitForm , handleRoom }) => {
    const { handleChange, handleSubmit, values, errors} = useUp(
        submitForm, handleRoom,
        validate
    );

    return (
        <form className="upload-form" onSubmit={handleSubmit} noValidate>
            <Row className="upload-heading">
                <h1>Upload A Product</h1>
            </Row>
            <Row gutter={[16,16]}>
                <Col className='left-inputs' lg={12} xs={24}>
                    <Row className='rleft-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>House No.:</label>
                            <input type="text" 
                                className="info-input" 
                                name="address_number"
                                placeholder="Enter the address number"
                                value={values.address_number}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rleft-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Street:</label>
                            <input type="text" 
                                className="info-input" 
                                name="address_street"
                                placeholder="Enter the street"
                                value={values.address_street}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rleft-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>District:</label>
                            <input type="text" 
                                className="info-input" 
                                name="address_district"
                                placeholder="Enter the district"
                                value={values.address_district}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rleft-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>City:</label>
                            <input type="text" 
                                className="info-input" 
                                name="address_city"
                                placeholder="Enter the city"
                                value={values.address_city}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rleft-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Accomodation Type:</label>
                            <select className="select-input" name='room_type' onChange={handleChange}>
                                {accomodation.map(item => (
                                    <option key={item.key} value={item.key}>{item.value} </option>
                                ))}
                            </select>
                        </div>
                    </Row>
                    <Row className='rleft-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Room:</label>
                            <input type="number" 
                                className="info-input" 
                                name="number_of_room"
                                placeholder="Enter number of rooms"
                                value={values.number_of_room}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rleft-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Area:</label>
                            <input type="number" 
                                className="info-input" 
                                name="area"
                                placeholder="Enter the area ( m² )"
                                value={values.area}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                </Col>
                <Col className='right' lg={12} xs={24}>
                    <Row className='rright-inputs'>
                        <h3 className='facility'>Facility</h3>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Kitchen:</label>
                            <select className="select-input" name='kitchen' onChange={handleChange}>
                                {condition.map(item => (
                                    <option key={item.key} value={item.key}>{item.value} </option>
                                ))}
                            </select>
                        </div>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Bathroom:</label>
                            <select className="select-input" name='bathroom_type' onChange={handleChange}>
                                {condition.map(item => (
                                    <option key={item.key} value={item.key}>{item.value} </option>
                                ))}
                            </select>
                        </div>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Bathroom Heater:</label>
                            <span className="radio-input">Yes</span>
                            <input type="radio" 
                                className="info-radio" 
                                name="bathroom_heater"
                                value={true}
                                onChange={handleChange}
                            />
                            <span className="radio-input">No</span>
                            <input type="radio" 
                                className="info-radio" 
                                name="bathroom_heater"
                                value={false}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Air Conditioner:</label>
                            <span className="radio-input">Yes</span>
                            <input type="radio" 
                                className="info-radio" 
                                name="air_conditional"
                                value={true}
                                onChange={handleChange}
                            />
                            <span className="radio-input">No</span>
                            <input type="radio" 
                                className="info-radio" 
                                name="air_conditional"
                                value={false}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Balcony:</label>
                            <span className="radio-input">Yes</span>
                            <input type="radio" 
                                className="info-radio" 
                                name="balcony"
                                value={true}
                                onChange={handleChange}
                            />
                            <span className="radio-input">No</span>
                            <input type="radio" 
                                className="info-radio" 
                                name="balcony"
                                value={false}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Water and Electricity per week:</label>
                            <input type="number" 
                                className="info-input" 
                                name="water_electricity_bill_per_week"
                                placeholder="Enter the price ( USD )"
                                value={values.water_electricity_bill_per_week}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Rental Price per Month:</label>
                            <input type="text" 
                                className="info-input" 
                                name="price_renter_to_pay"
                                placeholder="Enter the rental price per month"
                                value={values.price_renter_to_pay}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Is it available to be rented:</label>
                            <span className="radio-input">Yes</span>
                            <input type="radio" 
                                className="info-radio" 
                                name="is_available"
                                value={true}
                                onChange={handleChange}
                            />
                            <span className="radio-input">No</span>
                            <input type="radio" 
                                className="info-radio" 
                                name="is_available"
                                value={false}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                    <Row className='rright-inputs'>
                        <div className="info-inputs">
                            <label className='info-label'>Description</label>
                            <input type="text" 
                                className="info-input" 
                                name="room_description"
                                placeholder="Something about this accomodation"
                                value={values.room_description}
                                onChange={handleChange}
                            />
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className='btn-holder'>
                <button className='submit-btn' type='submit'>
                    Submit
                </button>
            </Row>
        </form>
    )
}

export default UploadDealsFillIn;
