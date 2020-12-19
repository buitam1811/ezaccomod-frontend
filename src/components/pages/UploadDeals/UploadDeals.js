import React, { useState} from 'react'
import './UploadDeals.css'
import { Typography, Button, Form, message, Input, Icon } from 'antd'
import FileUpload from '../../Utils/FileUpload'

const accomodation = [
    { key: 1, value: "Condo" },
    { key: 2, value: "Flat" },
    { key: 3, value: "Apartment" },
    { key: 4, value: "Villa" },
    { key: 5, value: "Penthouse" },
    { key: 6, value: "Motel Room" },
    { key: 7, value: "Hotel Room" }
]

function UploadDeals() {
    const [values, setValues] = useState(
        {
            location: '',
            nearbylocations: '',
            accomodationtype: 1,
            roomamout: 0,
            area: 0,
            price: 0
        }
    );

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };
    
    const onSubmit = (event) => {

    };
    return (
        <div className="uploadpage-container">
            <div className="upload-content">
                <div className="upload-heading">
                    <h1>Upload A Product</h1>
                </div>
                <form className="upload-form" onSubmit={onSubmit}>
                    <form action="" className="upload-form-left">
                    <div className="image-upload">

                    </div>
                    <div className="info-upload">
                        <div className="info-inputs">
                            <label className='info-label'>Location: </label>
                            <input type="text" 
                                className="info-input" 
                                name="location"
                                placeholder="Enter the location"
                                value={values.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="info-inputs">
                            <label className='info-label'>Nearby Locations: </label>
                            <input type="text" 
                                className="info-input" 
                                name="nearbylocations"
                                placeholder="Enter the nearby locations"
                                value={values.nearbylocations}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="room">
                            <span className="info-inputs">
                                <label className='info-label'>Accomodation Type: </label>
                                <select>onChange={handleChange} value={values.accomodationtype}
                                    {accomodation.map(item => (
                                        <option key={item.key} value={item.key}>{item.value} </option>
                                    ))}
                                </select>
                            </span>
                            <span className="info-inputs">
                                <label className='info-label'>Number of Rooms: </label>
                                <input type="number" 
                                    className="info-input" 
                                    name="roomamount" 
                                    value={values.roomamout}
                                    onChange={handleChange}        
                                />
                            </span>
                        </div>
                        <div className="info-inputs">
                            <label className='info-label'>Area: </label>
                            <input type="number" 
                                className="info-input" 
                                name="area"
                                value={values.area}
                                onChange={handleChange}
                            />
                            <span className='info-label'>cm</span>
                            <sup className='info-label'>2</sup>
                        </div>
                        <div className="info-inputs">
                            <label className='info-label'>Price: </label>
                            <input type="number" 
                                className="info-input" 
                                name="price"
                                placeholder="Enter the price"
                                value={values.price}
                                onChange={handleChange}
                            />
                            <label className='info-label'>/ month</label>
                        </div>
                        <div className="info-inputs">
                            <label className='info-label'>Live With Owner:</label>
                            <label>Yes</label>
                            <input type="radio" 
                                className="info-radio" 
                                name="owner"
                            />
                            <label>No</label>
                            <input type="radio" 
                                className="info-radio" 
                                name="owner"
                            />
                        </div>
                    </div>
                    </form>
                    <form className="upload-from-right"></form>
                </form>   
                <button className='submit-btn' onClick={onSubmit}>
                        Submit
                </button>   
            </div>
        </div>
    )
}

export default UploadDeals
