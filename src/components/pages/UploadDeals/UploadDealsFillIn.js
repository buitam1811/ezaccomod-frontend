import React, { useState } from 'react'
import './UploadDeals.css'
import useUp from './useUp'
import validate from './validateInfoUp';

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

const UploadDealsFillIn = ({ submitForm }, props) => {
    const { handleChange, handleSubmit, values, errors , roomid} = useUp(
        submitForm,
        validate
    );

    const handleRoom2 = () => {
        props.handleRoom(values.address_number);
    }

    return (
        <form className="upload-form" onSubmit={handleSubmit} noValidate>
            <div className="upload-form-left">
            <div className="image-upload">
            </div>
            <div className="info-upload">
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
                <div className="info-inputs">
                    <label className='info-label'>Accomodation Type:</label>
                    <select className="select-input" name='room_type' onChange={handleChange}>
                        {accomodation.map(item => (
                            <option key={item.key} value={item.key}>{item.value} </option>
                        ))}
                    </select>
                </div>
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
            </div>
            </div>
            <div className="upload-form-right">
                <div className='info-facility'>Facility</div>
                <div className="info-inputs">
                    <label className='info-label'>Kitchen:</label>
                    <select className="select-input" name='kitchen' onChange={handleChange}>
                        {condition.map(item => (
                            <option key={item.key} value={item.key}>{item.value} </option>
                        ))}
                    </select>
                </div>
                <div className="info-inputs">
                    <label className='info-label'>Bathroom:</label>
                    <select className="select-input" name='bathroom_type' onChange={handleChange}>
                        {condition.map(item => (
                            <option key={item.key} value={item.key}>{item.value} </option>
                        ))}
                    </select>
                </div>
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
                <div className="info-inputs">
                    <label className='info-label'>Optional Furniture:</label>
                    <input type="text" 
                        className="info-input" 
                        name="optional_furniture"
                        placeholder="Enter the Optional Furniture"
                        value={values.optional_furniture}
                        onChange={handleChange}
                    />
                </div>
                <hr className="rounded"/>
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
            </div>
        <button className='submit-btn' type='submit'>
                Submit
        </button>
        </form>
    )
}

export default UploadDealsFillIn;
