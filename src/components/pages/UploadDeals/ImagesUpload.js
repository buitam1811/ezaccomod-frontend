import Axios from 'axios';
import React, { useState } from 'react'
import FileUpload from '../../Utils/FileUpload';
import './UploadDeals.css'
import { Row, Col } from 'antd'

const duration = [
    { key: 'W', value: "1 Week", price: '30$' },
    { key: 'M', value: "1 Month", price: '120$' },
    { key: 'Q', value: "3 Month", price: '120$'},
    { key: 'Y', value: "1 Year",  price: '1000$'}
]

function ImagesUpload(props) {
    const [Images, setImages] = useState([]);

    const updateFiles = (newImages) => {
        setImages(newImages)
    }

    const [price, setPrice] = useState('W');

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const [room, setroom] = useState(props.roomID)

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            room_id: room,
            display_duration_type: price
        };
            
        Axios.post(`api/create_post_action-api/${props.roomID}/`, data, {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(
        res => {
            console.log(res);
            props.submit();
        }
        ).catch(
        err => {
            console.log(err);
        })
    }


    return (
        <form className="upload-form" onSubmit={handleSubmit} noValidate>
            <Row className="upload-heading">
                <h1>Insert Image and Choose Your Post Display Period</h1>
            </Row>
            <Row className="upload-heading">
                <h3>Upload Image For Your Post</h3>
            </Row>
            <Row className="upload-image-section">
                <div>
                    <FileUpload roomId={props.roomID} refreshFunction={updateFiles} />
                </div>
            </Row>
            <Row className="duration-options">
                <label className='info-label'>Display your room for:</label>
                <select className="select-input" name='duration' onChange={handlePrice}>
                    {duration.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>    
                    ))}
                </select>
            </Row>
            <Row className='image-submit'>
                <button className='image-submit-btn' type='submit'>
                    Request to make a post
                </button>
            </Row>
        </form>
    )
}

export default ImagesUpload
